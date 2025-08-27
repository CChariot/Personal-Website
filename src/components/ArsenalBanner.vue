<template>
  <div class="arsenal-banner" aria-hidden="true">
    <div class="scarf"></div>
    <div class="crest">
      <img :src="logo" alt="Arsenal crest" class="crest-img" loading="eager" />
    </div>
  </div>
</template>

<script>
import logo from '@/assets/arsenal-logo.png' // change to .svg if you saved SVG
export default {
  name: 'ArsenalBanner',
  data: () => ({ logo })
}
</script>

<style scoped>
.arsenal-banner{
  position:absolute;
  inset: 0 0 auto 0;
  height: 64px;
  pointer-events:none;
}

/* red scarf bar with subtle navy stitch */
.scarf{
  position:absolute; top:16px; left:0; right:0; height:16px; border-radius:10px;
  background: #ffe5e5;
  border:1px solid var(--border);
  box-shadow: inset 0 1px 0 #fff, 0 6px 16px rgba(0,0,0,.06);
}
.scarf::after{
  content:''; position:absolute; inset:0; width:96%; margin:0 auto; top:6px; height:2px;
  background: linear-gradient(90deg, var(--arsenal-navy), transparent);
  opacity:.35;
}

/* crest floats gently */
.crest{
  position:absolute; left:24px; top:-10px;
  width:62px; height:72px;
  filter: drop-shadow(0 6px 14px rgba(0,0,0,.12));
  animation: bob 1.8s ease-in-out infinite alternate;
}
.crest-img{ width:100%; height:100%; object-fit: contain; display:block; }

@keyframes bob{ from{ transform: translateY(0);} to{ transform: translateY(2px);} }

@media (prefers-reduced-motion: reduce){ .crest{ animation:none; } }
</style>
