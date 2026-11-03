<template>
  <figure class="chart">
    <svg
      :viewBox="`0 0 ${W} ${H}`"
      role="img"
      aria-labelledby="chart-title chart-desc"
    >
      <title id="chart-title">Latency per token as prompt length grows, six small language models on a Jetson Xavier NX</title>
      <desc id="chart-desc">
        All models slow down as prompts get longer. The two models of 350M parameters and up stop running reliably at about 320 tokens. The four smaller models keep running to 512 tokens.
      </desc>

      <!-- gridlines and y axis -->
      <g class="axis">
        <g v-for="t in yTicks" :key="'y' + t">
          <line :x1="L" :x2="R" :y1="y(t)" :y2="y(t)" class="grid" />
          <text :x="L - 10" :y="y(t) + 4" text-anchor="end">{{ t.toFixed(1) }}</text>
        </g>
        <g v-for="t in xTicks" :key="'x' + t">
          <text :x="x(t)" :y="B + 22" text-anchor="middle">{{ t }}</text>
        </g>
        <text :x="L" :y="T - 14" class="axis-title">seconds per token</text>
        <text :x="R" :y="B + 44" text-anchor="end" class="axis-title">prompt length, tokens</text>
      </g>

      <!-- the ~320 token wall -->
      <line :x1="x(320)" :x2="x(320)" :y1="T" :y2="B" class="wall" />

      <!-- series -->
      <g v-for="(s, i) in data.series" :key="s.name">
        <path
          :d="path(s.values)"
          pathLength="1"
          class="line"
          :class="{ unstable: s.unstable }"
          :style="{ animationDelay: (i * 90) + 'ms' }"
        />
        <circle
          v-if="s.unstable"
          :cx="x(data.lengths[s.values.length - 1])"
          :cy="y(s.values[s.values.length - 1])"
          r="4.5"
          class="stop"
          :style="{ animationDelay: (900 + i * 90) + 'ms' }"
        />
      </g>

      <!-- end labels -->
      <g class="labels">
        <text v-for="lab in labels" :key="lab.text" :x="lab.x" :y="lab.y" :class="{ unstable: lab.unstable }">{{ lab.text }}</text>
      </g>
    </svg>

    <figcaption>
      Latency per token on a Jetson Xavier NX as prompts grow. The <span class="key">red</span> lines,
      models of 350M parameters and up, stop running reliably at about 320 tokens.
      <a href="#research">From my master's research.</a>
    </figcaption>
  </figure>
</template>

<script>
import { latency } from '../content/siteData'

const W = 600, H = 380
const L = 46, R = 450, T = 34, B = 320
const XMIN = 128, XMAX = 512, YMAX = 0.65

export default {
  name: 'LatencyChart',
  data () {
    return { data: latency, W, H, L, R, T, B, yTicks: [0, 0.2, 0.4, 0.6], xTicks: [128, 256, 384, 512] }
  },
  computed: {
    labels () {
      const last = s => ({ len: this.data.lengths[s.values.length - 1], v: s.values[s.values.length - 1] })
      const out = []
      // The two smallest models finish almost on top of each other, so they share a label.
      const small = this.data.series.filter(s => s.name.startsWith('DistilGPT2') || s.name.startsWith('OPT 125M'))
      const smallY = (last(small[0]).v + last(small[1]).v) / 2
      out.push({ text: 'DistilGPT2, OPT 125M', x: x(XMAX) + 10, y: y(smallY) + 4 })
      for (const s of this.data.series) {
        if (small.includes(s)) continue
        const p = last(s)
        out.push({ text: s.name, x: x(p.len) + 10, y: y(p.v) + 4, unstable: s.unstable })
      }
      return out
    }
  },
  methods: {
    x, y,
    path (values) {
      return values.map((v, i) => `${i ? 'L' : 'M'}${x(this.data.lengths[i]).toFixed(1)},${y(v).toFixed(1)}`).join(' ')
    }
  }
}

function x (len) { return L + (len - XMIN) / (XMAX - XMIN) * (R - L) }
function y (v) { return B - v / YMAX * (B - T) }
</script>

<style scoped>
.chart { margin: 0; }
svg { width: 100%; height: auto; display: block; overflow: visible; }

.axis text {
  font-size: 12px;
  fill: var(--muted);
  font-variant-numeric: tabular-nums;
}
.axis .axis-title { fill: var(--muted); font-size: 12px; }
.grid { stroke: var(--rule); stroke-width: 1; }
.wall { stroke: var(--red); stroke-width: 1; stroke-dasharray: 3 4; opacity: 0.45; }

.line {
  fill: none;
  stroke: var(--faint);
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: draw 1.1s cubic-bezier(.4, 0, .2, 1) forwards;
}
.line.unstable { stroke: var(--red); stroke-width: 2.25; }

.stop {
  fill: var(--paper);
  stroke: var(--red);
  stroke-width: 2;
  opacity: 0;
  animation: appear 0.3s ease forwards;
}

.labels text { font-size: 12.5px; fill: var(--muted); }
.labels text.unstable { fill: var(--red); }

/* The SVG scales down on small screens, so its text needs a larger size in
   SVG units to stay readable. */
@media (max-width: 560px) {
  .axis text, .axis .axis-title { font-size: 17px; }
  .labels text { font-size: 17px; }
}

@keyframes draw { to { stroke-dashoffset: 0; } }
@keyframes appear { to { opacity: 1; } }

@media (prefers-reduced-motion: reduce) {
  .line { animation: none; stroke-dashoffset: 0; }
  .stop { animation: none; opacity: 1; }
}

figcaption {
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.55;
  color: var(--muted);
  max-width: 52ch;
}
.key { color: var(--red); font-weight: 500; }
</style>
