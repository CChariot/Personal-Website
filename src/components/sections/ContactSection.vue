<template>
  <section id="contact" class="section contact">
    <h2 class="section-title">Contact</h2>
    <div class="section-body">
      <p class="lead">The fastest way to reach me is email.</p>
      <p class="email"><a :href="'mailto:' + p.email">{{ p.email }}</a></p>
      <ul class="links">
        <li><a :href="p.github" target="_blank" rel="noopener">GitHub</a></li>
        <li><a :href="p.linkedin" target="_blank" rel="noopener">LinkedIn</a></li>
      </ul>
      <p class="aside">Off the clock, I'm usually watching Arsenal.</p>
    </div>
  </section>
</template>

<script>
import { profile } from '../../content/siteData'
export default { name: 'ContactSection', data: () => ({ p: profile }) }
</script>

<style scoped>
.contact { padding-bottom: 88px; }
.email { margin-top: 8px; font-size: clamp(22px, 3vw, 30px); font-weight: 700; letter-spacing: -0.01em; }
.links { list-style: none; display: flex; gap: 22px; margin-top: 16px; font-weight: 500; }
.aside { margin-top: 40px; color: var(--muted); font-size: 15px; }
</style>
