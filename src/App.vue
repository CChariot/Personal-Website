<template>
  <SiteHeader />
  <main class="page">
    <HeroSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <EducationSection />
    <ContactSection />
  </main>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import ContactSection from './components/sections/ContactSection.vue'

export default {
  name: 'App',
  components: {
    SiteHeader, HeroSection, ExperienceSection, ProjectsSection,
    SkillsSection, EducationSection, ContactSection
  }
}
</script>
