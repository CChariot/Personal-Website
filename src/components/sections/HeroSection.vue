<template>
  <section id="home" class="container hero" v-in-view>
    <ArsenalBanner />

    <div class="hero-inner">
      <h1>Hi, I’m <span class="accent">{{ name }}</span></h1>
      <p class="muted">{{ tagline }}</p>

      <div class="cta">
        <a :href="'mailto:'+email" class="btn">Email</a>
        <a :href="github" target="_blank" class="btn">GitHub</a>
        <a :href="linkedin" target="_blank" class="btn">LinkedIn</a>
      </div>
    </div>
  </section>
</template>

<script>
import { hero } from '../../content/siteData'
import ArsenalBanner from '../ArsenalBanner.vue'
export default {
  name:'HeroSection',
  components:{ ArsenalBanner },
  data(){ return { ...hero } }
}
</script>

<style scoped>
.hero{
  position:relative; overflow:hidden;
  padding-top: 84px;           /* tighter – banner sits above content */
  padding-bottom: 64px;
}
.hero-inner{
  background: #fff;
  border:1px solid var(--border);
  border-radius: 18px;
  padding: 32px 24px 28px;
  box-shadow: 0 12px 24px rgba(0,0,0,.06);
  max-width: 860px;
  margin: 0 auto;
}
.accent{ color: var(--arsenal-red); }
.cta{ display:flex; gap:10px; justify-content:center; margin-top: 10px; }
.aside{ margin-top: 10px; color:var(--muted); font-size:.95rem; }
</style>
