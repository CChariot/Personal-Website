<template>
  <section id="projects" class="container" v-in-view>
    <h2>Projects</h2>

    <div class="grid">
      <article class="card project" v-for="p in projects" :key="p.name">
        <header class="header">
          <h3 class="title">{{ p.name }}</h3>
          <span v-if="p.period" class="period">{{ p.period }}</span>
        </header>

        <!-- Prefer bullets if present; otherwise render body/summary -->
        <ul v-if="p.bullets && p.bullets.length" class="bullets">
          <li v-for="(b,i) in p.bullets" :key="i">{{ b }}</li>
        </ul>
        <p v-else-if="p.body" class="body">{{ p.body }}</p>

        <div class="meta" v-if="(p.stack && p.stack.length) || p.link">
          <span class="chip" v-for="t in p.stack || []" :key="t">{{ t }}</span>
          <a v-if="p.link" :href="p.link" target="_blank" rel="noopener" class="btn btn-small">Repo</a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { projects } from '../../content/siteData'
export default {
  name: 'ProjectsSection',
  data () {
    return { projects }
  }
}
</script>

<style scoped>
.grid{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(340px,1fr));
  gap: 18px;
  margin-top: 14px;
}

.project{
  position:relative;
  overflow:hidden;
  border-left: 6px solid var(--arsenal-red);
}

.header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom: 8px;
}
.title{ margin:0; }
.period{
  font-weight:800; color:var(--arsenal-red);
  background:#fff3f3; border:1px solid var(--border);
  border-radius:10px; padding:4px 10px;
}

.bullets{
  margin:8px 0 14px;
  padding-left:18px;
  line-height:1.6;
}
.body{ margin: 6px 0 14px; line-height:1.6; }

.meta{
  display:flex; flex-wrap:wrap; gap:8px; align-items:center;
}
.chip{
  background: var(--surface-2);
  border:1px solid var(--border);
  color:#111;
  border-radius:9999px; padding:6px 10px; font-weight:700;
}
.btn-small{ padding:6px 12px; font-size:.9rem; }
</style>
