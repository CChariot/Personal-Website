<template>
  <section id="skills" class="container" v-in-view>
    <h2>Skills</h2>

    <div class="group" v-for="g in groups" :key="g.title">
      <h3>{{ g.title }}</h3>
      <div class="badges">
        <span
          v-for="(s, i) in g.items"
          :key="s"
          class="badge"
          :style="{ transitionDelay: (i * 40) + 'ms' }"
        >
          {{ s }}
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import { skills } from '../../content/siteData'

export default {
  name: 'SkillsSection',
  computed: {
    groups () {
      return [
        { title: 'LLM & AI',           items: skills.ai },
        { title: 'Full-Stack',         items: skills.fullstack },
        { title: 'Containers & CI/CD', items: skills.devops }
      ]
    }
  }
}
</script>

<style scoped>
/* Section heading is themed globally; these are just layout & chips */
.group { margin: 18px 0 26px; }
h3 { margin: 0 0 10px; color: var(--text); font-weight: 800; }

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

/* Light, high-contrast chip */
.badge {
  background: #fff;
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 8px 14px;
  font-weight: 700;
  box-shadow: 0 6px 14px rgba(0,0,0,.05);
  /* Stagger-in animation ties to the section's .reveal/.visible state */
  transform: translateY(6px);
  opacity: 0;
  transition: transform .35s ease, opacity .35s ease, box-shadow .25s ease, border-color .25s ease;
}

/* When the section becomes visible (from v-in-view), pop the chips in */
.reveal.visible .badge {
  transform: translateY(0);
  opacity: 1;
}

/* Hover accent = Ferrari red outline + subtle lift */
.badge:hover {
  border-color: var(--ferrari-red);
  box-shadow: 0 10px 22px rgba(220,0,0,.18);
}
</style>
