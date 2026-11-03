<template>
  <section id="education" class="section">
    <h2 class="section-title">Education</h2>
    <div class="section-body edu">
      <div v-for="e in education" :key="e.school" class="row">
        <div>
          <p class="degree">{{ e.degree }}</p>
          <p>{{ e.school }}</p>
        </div>
        <p class="years">{{ e.years }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { education } from '../../content/siteData'
export default { name: 'EducationSection', data: () => ({ education }) }
</script>

<style scoped>
.edu { display: grid; gap: 18px; }
.row { display: flex; justify-content: space-between; gap: 16px; align-items: baseline; }
.degree { font-weight: 700; }
.years { color: var(--muted); font-size: 15px; font-variant-numeric: tabular-nums; white-space: nowrap; }
</style>
