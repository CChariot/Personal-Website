<template>
  <section id="highlights" class="container" v-in-view>
    <h2>Highlights</h2>
    <div class="grid">
      <article class="card" v-for="h in items" :key="h.title">
        <h3 style="margin:0;color:var(--secondary)">{{ h.title }}</h3>
        <p style="margin:8px 0 0">{{ h.body }}</p>
      </article>
    </div>
  </section>
</template>

<script>
import { highlights } from '../../content/siteData'
export default {
  name:'HighlightsSection',
  data(){ return { items: highlights } }
}
</script>

<style scoped>
.grid{
  display:grid;
  grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
  gap:18px; margin-top:14px;
}
</style>
