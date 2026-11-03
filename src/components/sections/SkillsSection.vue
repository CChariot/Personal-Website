<template>
  <section id="skills" class="section">
    <h2 class="section-title">Skills</h2>
    <dl class="section-body skills">
      <div v-for="g in skills" :key="g.group" class="row">
        <dt>{{ g.group }}</dt>
        <dd>{{ g.items.join(', ') }}</dd>
      </div>
    </dl>
  </section>
</template>

<script>
import { skills } from '../../content/siteData'
export default { name: 'SkillsSection', data: () => ({ skills }) }
</script>

<style scoped>
.skills { margin: 0; display: grid; gap: 12px; }
.row { display: grid; grid-template-columns: 170px minmax(0, 1fr); gap: 16px; }
dt { font-weight: 700; }
dd { margin: 0; }
@media (max-width: 520px) { .row { grid-template-columns: 1fr; gap: 0; } }
</style>
