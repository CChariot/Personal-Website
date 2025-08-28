<template>
  <section id="home" class="container hero" v-in-view>
    <ArsenalBanner />

    <div class="hero-inner">
      <h1>Hi, I’m <span class="accent">{{ name }}</span></h1>

      <!-- Bold gradient role -->
      <p class="role">Software Engineer</p>

      <!-- Specialties as attractive chips -->
      <ul class="specialties">
        <li v-for="(s,i) in specialties" :key="i" class="chip">{{ s }}</li>
      </ul>

      <div class="cta">
        <a :href="'mailto:'+email" class="btn">Email</a>
        <a :href="github" target="_blank" class="btn">GitHub</a>
        <a :href="linkedin" target="_blank" class="btn">LinkedIn</a>
      </div>

      <p class="aside">
        From the design of this website, you might have noticed I’m an <strong>Arsenal</strong> fan 🙂
      </p>
    </div>
  </section>
</template>

<script>
import { hero } from '../../content/siteData'
import ArsenalBanner from '../ArsenalBanner.vue'

export default {
  name:'HeroSection',
  components:{ ArsenalBanner },
  data(){
    return {
      ...hero,
      specialties: [
        'LLM & AI',
        'Edge Inference',
        'Full-Stack (Vue/Python)',
        'Containers & CI/CD'
      ]
    }
  }
}
</script>

<style scoped>
.hero{
  position:relative;
  overflow:hidden;
  padding-top: 84px;
  padding-bottom: 64px;
}

/* tidy card sitting under the banner */
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

/* Gradient, weighty role text so “Software Engineer” pops */
.role{
  margin: 2px 0 8px;
  font-family: 'Outfit', Inter, system-ui, sans-serif;
  font-weight: 800;
  font-size: clamp(1.1rem, 1.8vw, 1.45rem);
  letter-spacing: .2px;
  background: linear-gradient(90deg, var(--arsenal-navy), var(--arsenal-red));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.specialties{
  display:flex;
  flex-wrap: wrap;
  gap: 8px 10px;
  justify-content:center;
  margin: 6px 0 10px;
}

.chip{
  background: var(--surface-2);
  border:1px solid var(--border);
  border-radius: 9999px;
  padding: 6px 12px;
  font-weight: 700;
  color:#111;
  transition: border-color .15s ease, box-shadow .15s ease;
}
.chip:hover{
  border-color: var(--arsenal-red);
  box-shadow: 0 8px 18px rgba(239,1,7,.12);
}

.cta{
  display:flex;
  gap:10px;
  justify-content:center;
  margin-top: 8px;
}

.aside{ margin-top: 10px; color:var(--muted); font-size:.95rem; }
</style>
