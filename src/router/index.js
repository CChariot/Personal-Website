import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import ProfilePage from '../components/ProfilePage.vue'
import ExperiencePage from '../components/ExperiencePage.vue'
import ProjectsPage from '../components/ProjectsPage.vue'
import SkillsPage from '../components/SkillsPage.vue'
import ContactPage from '../components/ContactPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: ProfilePage },
  { path: '/experience', component: ExperiencePage },
  { path: '/projects', component: ProjectsPage },
  { path: '/skills', component: SkillsPage },
  { path: '/contact', component: ContactPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
