export default {
  mounted(el) {
    el.classList.add('reveal')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add('visible')
          obs.unobserve(el)
        }
      })
    }, { threshold: 0.15 })
    obs.observe(el)
  }
}
