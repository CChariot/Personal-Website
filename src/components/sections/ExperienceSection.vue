<template>
  <section id="experience" class="container" v-in-view>
    <h2>Experience</h2>

    <article class="job card" v-for="(job,i) in jobs" :key="i">
      <div class="grid">
        <!-- Meta (left) -->
        <div class="meta">
          <h3 class="role">{{ job.title }}</h3>
          <div class="company">{{ job.company }}</div>
          <div class="date">{{ job.dates }} — {{ job.location }}</div>

          <div v-if="job.tech?.length" class="tech">
            <span class="chip" v-for="t in job.tech" :key="t">{{ t }}</span>
          </div>
        </div>

        <!-- Bullets (right) -->
        <ul class="bullets">
          <li v-for="(p,idx) in filtered(job.points)" :key="idx">{{ p }}</li>
        </ul>
      </div>
    </article>
  </section>
</template>

<script>
import { jobs } from '../../content/siteData'
export default {
  name:'ExperienceSection',
  data(){ return { jobs } },
  methods:{
    filtered(arr){ return (arr || []).filter(Boolean) } // remove accidental blanks
  }
}
</script>

<style scoped>
.job{ margin: var(--space-4) 0; }

.grid{
  display:grid;
  grid-template-columns: 320px 1fr;
  gap: var(--space-4);
  align-items:start;
}
@media (max-width: 900px){
  .grid{ grid-template-columns: 1fr; }
}

/* left column */
.role{
  margin:0;
  color: var(--arsenal-red);
  font-weight:800;
  letter-spacing:.2px;
  font-family: 'Outfit', Inter, system-ui, sans-serif;
}
.company{ font-weight:800; margin-top:4px; }
.date{ color:var(--muted); font-style:italic; margin-top:4px; }

.tech{ display:flex; flex-wrap:wrap; gap:8px; margin-top: var(--space-3); }

/* right column */
.bullets{
  margin:0;
  padding-left: 18px;
  line-height: 1.6;
}
.bullets li{ margin-bottom: 8px; }
</style>
