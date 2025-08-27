<template>
  <section id="contact" class="container" v-in-view>
    <h2>Contact</h2>
    <p>Email: <a :href="'mailto:'+email">{{ email }}</a></p>
    <div style="margin-top:10px">
      <a :href="github" target="_blank" class="btn">GitHub</a>
      <a :href="linkedin" target="_blank" class="btn">LinkedIn</a>
    </div>
  </section>
</template>

<script>
import { hero } from '../../content/siteData'
export default { name:'ContactSection', data(){return {...hero}} }
</script>
