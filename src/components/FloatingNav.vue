<template>
  <nav
    class="float-nav"
    :class="{ expanded: hovering }"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <ul>
      <li v-for="item in items" :key="item.id" :class="{ active: activeId === item.id }">
        <a :href="'#' + item.id" class="pill">
          <span class="icon" aria-hidden="true">{{ item.icon }}</span>
          <span class="label">{{ item.label }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'FloatingNav',
  data() {
    return {
      hovering: false,
      activeId: 'home',
      items: [
        { id: 'home',       label: 'Home',       icon: '🏠' },
        { id: 'about',      label: 'About',      icon: '👤' },
        { id: 'highlights', label: 'Highlights', icon: '✨' },
        { id: 'experience', label: 'Experience', icon: '💼' },
        { id: 'skills',     label: 'Skills',     icon: '⚡' },
        { id: 'projects',   label: 'Projects',   icon: '📂' },
        { id: 'contact',    label: 'Contact',    icon: '📧' }
      ]
    }
  },
  mounted() {
    // highlight current section as you scroll
    const sections = this.items
      .map(i => document.getElementById(i.id))
      .filter(Boolean)

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) this.activeId = e.target.id })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0.01 }
    )
    sections.forEach(s => obs.observe(s))
  }
}
</script>

<style scoped>
:root{
  /* in case you want to tweak later */
  --nav-active: var(--arsenal-navy);
  --nav-hover: var(--surface-2);
}

/* container */
.float-nav{
  position: fixed;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  width: 76px;                 /* collapsed */
  background: rgba(255,255,255,.92);
  backdrop-filter: blur(6px);
  border:1px solid var(--border);
  border-radius: 26px;
  box-shadow: 0 18px 40px rgba(0,0,0,.12);
  transition: width .25s ease;
  z-index: 2000;
  padding: 12px 8px;
  overflow:hidden;              /* nothing can spill out */
}
.float-nav.expanded{ width: 230px; }

ul{ list-style:none; margin:0; padding:0; }
li{ margin: 8px 0; }

/* pill — COLLAPSED defaults to a centered circle */
.pill{
  display:flex; align-items:center; justify-content:center;
  width: 44px; height: 44px;              /* circle size */
  padding: 0;
  margin: 0 auto;                          /* centered in narrow nav */
  border-radius: 50%;
  color: var(--text);
  text-decoration:none; font-weight:700;
  transition: background .2s, color .2s, transform .2s, width .2s, border-radius .2s, padding .2s, height .2s;
}
.pill:hover{ background: var(--nav-hover); }

/* EXPANDED: becomes a full capsule with icon + label */
.float-nav.expanded .pill{
  width: 100%;
  height: auto;
  padding: 10px 14px;
  border-radius: 9999px;
  justify-content: flex-start;
}

/* icon + label visibility */
.icon{ font-size:1.25rem; }
.label{ display:none; white-space:nowrap; margin-left:10px; }
.float-nav.expanded .label{ display:inline; }

/* ACTIVE state — solid navy, no gradient */
li.active .pill{
  background: var(--nav-active);
  color:#fff;
  box-shadow: 0 10px 22px rgba(4,30,66,.22);
}

/* subtle hover for expanded items */
.float-nav.expanded .pill:hover{
  background: color-mix(in oklab, var(--nav-active) 10%, white);
  color: var(--text);
}
</style>

