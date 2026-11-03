<template>
  <section id="research" class="section">
    <h2 class="section-title">Research</h2>
    <div class="section-body">
      <h3>{{ r.title }}</h3>
      <p class="context">{{ r.context }}</p>
      <p class="summary">{{ r.summary }}</p>
      <p class="sub">What I found</p>
      <ul class="list">
        <li v-for="(f, i) in r.findings" :key="i">{{ f }}</li>
      </ul>
      <p class="takeaway">{{ r.takeaway }}</p>
    </div>
  </section>
</template>

<script>
import { research } from '../../content/siteData'
export default { name: 'ProjectsSection', data: () => ({ r: research }) }
</script>

<style scoped>
h3 { font-size: 21px; font-weight: 700; letter-spacing: -0.01em; }
.context { color: var(--muted); font-size: 15px; margin-top: 2px; }
.summary { margin-top: 16px; }
.sub { margin: 22px 0 10px; font-weight: 700; }
.takeaway { margin-top: 20px; padding-left: 16px; border-left: 2px solid var(--red); }
</style>
