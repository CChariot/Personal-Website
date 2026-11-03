<template>
  <section id="top" class="hero">
    <div class="text">
      <h1>{{ p.name }}</h1>
      <p class="intro">{{ p.intro }}</p>
      <p class="where">{{ p.location }}</p>
      <ul class="links">
        <li><a :href="'mailto:' + p.email">Email</a></li>
        <li><a :href="p.github" target="_blank" rel="noopener">GitHub</a></li>
        <li><a :href="p.linkedin" target="_blank" rel="noopener">LinkedIn</a></li>
      </ul>
    </div>
    <LatencyChart class="figure" />
  </section>
</template>

<script>
import { profile } from '../../content/siteData'
import LatencyChart from '../LatencyChart.vue'
export default {
  name: 'HeroSection',
  components: { LatencyChart },
  data: () => ({ p: profile })
}
</script>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 48px;
  align-items: center;
  padding: 72px 0 64px;
}
h1 {
  font-size: clamp(44px, 6.4vw, 76px);
  line-height: 0.98;
  font-weight: 700;
  letter-spacing: -0.03em;
}
.intro {
  margin-top: 22px;
  font-size: 20px;
  line-height: 1.5;
  max-width: 30ch;
}
.where { margin-top: 12px; color: var(--muted); font-size: 15px; }
.links {
  list-style: none;
  display: flex;
  gap: 22px;
  margin-top: 28px;
  font-weight: 500;
}
@media (max-width: 860px) {
  .hero { grid-template-columns: 1fr; gap: 40px; padding: 48px 0 40px; }
  .intro { max-width: 36ch; }
}
</style>
