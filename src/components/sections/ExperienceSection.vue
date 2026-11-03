<template>
  <section id="work" class="section">
    <h2 class="section-title">Work</h2>
    <div class="section-body">
      <article v-for="job in jobs" :key="job.org" class="job">
        <header>
          <h3>{{ job.role }}</h3>
          <p class="org">{{ job.org }}, {{ job.place }}</p>
          <p class="years">{{ job.start }}–{{ job.end }}</p>
        </header>
        <ul class="list">
          <li v-for="(pt, i) in job.points" :key="i">{{ pt }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script>
import { jobs } from '../../content/siteData'
export default { name: 'ExperienceSection', data: () => ({ jobs }) }
</script>

<style scoped>
.job + .job { margin-top: 44px; }
header { margin-bottom: 16px; }
h3 { font-size: 21px; font-weight: 700; letter-spacing: -0.01em; }
.org { margin-top: 2px; }
.years { color: var(--muted); font-size: 15px; font-variant-numeric: tabular-nums; margin-top: 2px; }
</style>
