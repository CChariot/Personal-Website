<template>
  <div>
    <FloatingNav />

    <HeroSection />
    <AboutSection />
    <HighlightsSection />
    <ExperienceSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>

<script>
import FloatingNav from './components/FloatingNav.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import HighlightsSection from './components/sections/HighlightsSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'

export default {
  name:'App',
  components:{
    FloatingNav, HeroSection, AboutSection, HighlightsSection,
    ExperienceSection, SkillsSection, ProjectsSection, ContactSection
  }
}
</script>
