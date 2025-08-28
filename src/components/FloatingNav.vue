<template>
  <nav class="float-nav">
    <ul>
      <li v-for="item in items" :key="item.id">
        <button
          type="button"
          class="pill"
          :class="{ active: activeId === item.id }"
          @click="scrollTo(item.id)"
          @keydown.enter.prevent="scrollTo(item.id)"
          @keydown.space.prevent="scrollTo(item.id)"
        >
          <span class="icon" aria-hidden="true">{{ item.icon }}</span>
          <span class="label">{{ item.label }}</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'FloatingNav',
  data() {
    return {
      activeId: 'home',
      items: [
        { id: 'home',       label: 'Home',       icon: '🏠' },
        { id: 'about',      label: 'About',      icon: '👤' },
        { id: 'highlights', label: 'Highlights', icon: '✨' },
        { id: 'experience', label: 'Experience', icon: '💼' },
        { id: 'skills',     label: 'Skills',     icon: '⚡' },
        { id: 'projects',   label: 'Projects',   icon: '📂' },
        { id: 'contact',    label: 'Contact',    icon: '📧' }
      ],
      obs: null,            // IntersectionObserver instance
      rafId: null,          // requestAnimationFrame id for scroll throttling
      onScrollHandler: null // bound scroll handler
    };
  },
  mounted() {
    // Observe sections so the correct pill is highlighted while scrolling
    const targets = this.items
      .map(i => document.getElementById(i.id))
      .filter(Boolean);

    this.obs = new IntersectionObserver(
      entries => {
        // choose most visible intersecting entry
        let best = null;
        let ratio = 0;
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio >= ratio) {
            best = e;
            ratio = e.intersectionRatio;
          }
        }
        if (best) this.activeId = best.target.id;
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-40% 0px -40% 0px' }
    );
    targets.forEach(t => this.obs.observe(t));

    // Top/bottom edge handling so Home/Contact highlight at limits
    const onScroll = () => {
      if (this.rafId) return;
      this.rafId = requestAnimationFrame(() => {
        this.rafId = null;
        const y =
          window.scrollY || document.documentElement.scrollTop || 0;
        const vh =
          window.innerHeight || document.documentElement.clientHeight;
        const doc = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        );
        if (y <= 2) this.activeId = 'home';
        if (y + vh >= doc - 2) this.activeId = 'contact';
      });
    };
    this.onScrollHandler = onScroll;
    window.addEventListener('scroll', onScroll, { passive: true });
  },
  beforeUnmount() {
    if (this.obs) this.obs.disconnect();
    if (this.onScrollHandler)
      window.removeEventListener('scroll', this.onScrollHandler);
    if (this.rafId) cancelAnimationFrame(this.rafId);
  },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id);
      if (!el) return;
      // optimistic highlight so it flips immediately
      this.activeId = id;
      el.scrollIntoView({
        behavior: 'smooth',
        block: id === 'contact' ? 'end' : 'start'
      });
    }
  }
};
</script>

<style scoped>
/* Always-expanded floating sidebar */
.float-nav{
  position: fixed;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  width: 240px;
  background: rgba(255,255,255,.96);
  backdrop-filter: blur(6px);
  border: 1px solid var(--border);
  border-radius: 22px;
  box-shadow: 0 18px 40px rgba(0,0,0,.12);
  z-index: 10000;         /* above everything */
  padding: 10px 8px;
  overflow: hidden;       /* nothing spills out and blocks clicks */
  pointer-events: auto;
}

ul{ list-style: none; margin: 0; padding: 0; }
li{ margin: 6px 0; }

.pill{
  width: 100%;
  display: flex; align-items: center; gap: 10px;
  border: 0; outline: 0; cursor: pointer;
  background: transparent; color: var(--text);
  border-radius: 14px;
  padding: 12px 14px;
  text-align: left;
  transition: background .12s ease, color .12s ease;
}

.pill:hover{ background: var(--surface-2); }
.pill.active{
  background: var(--arsenal-navy);
  color: #fff;
  box-shadow: 0 10px 22px rgba(4,30,66,.22);
}

.icon{ font-size: 1.2rem; line-height: 1; }
.label{ white-space: nowrap; }
</style>

<!-- Global anchor offsets so Home/Contact aren’t clipped at page edges -->
<style>
[id]{
  scroll-margin-top: 100px;
  scroll-margin-bottom: 100px;
}
</style>
