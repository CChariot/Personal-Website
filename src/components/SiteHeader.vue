<template>
  <header class="site-header">
    <div class="page bar">
      <a href="#top" class="home">Lihan Zhan</a>
      <nav aria-label="Sections">
        <a v-for="s in sections" :key="s.id" :href="'#' + s.id">{{ s.label }}</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  data: () => ({
    sections: [
      { id: 'work', label: 'Work' },
      { id: 'research', label: 'Research' },
      { id: 'skills', label: 'Skills' },
      { id: 'contact', label: 'Contact' }
    ]
  })
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(243, 245, 244, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--rule);
}
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 56px;
}
.home { font-weight: 700; text-decoration: none; white-space: nowrap; }
nav { display: flex; gap: 22px; }
nav a { font-size: 15px; color: var(--muted); text-decoration: none; }
nav a:hover { color: var(--red); }
@media (max-width: 520px) {
  nav { gap: 14px; }
  nav a { font-size: 14px; }
}
@media (max-width: 360px) {
  .bar { gap: 10px; }
  nav { gap: 9px; }
  nav a { font-size: 13px; }
}
</style>
