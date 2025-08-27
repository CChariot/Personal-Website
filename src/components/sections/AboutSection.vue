<template>
  <section id="about" class="container" v-in-view>
    <h2>About Me</h2>

    <p class="lead">
      I earned my <strong>Bachelor’s in Computer Science</strong> from
      <strong>The City College of New York, Grove School of Engineering</strong> 
      and I’m currently pursuing a <strong>Master of Software Engineering</strong> at
      <strong>Carnegie Mellon University</strong>.
    </p>

    <p class="lead">
      I love building reliable, efficient, and scalable systems. Recently that’s meant
      LLM & AI work—deploying Hugging Face models with ONNX Runtime,
      optimizing edge inference on Jetson with CUDA, and integrating PyTorch and
      OpenAI APIs into production pipelines. I also build full-stack software with
      Python/Go and modern web (Vue/Node), backed by PostgreSQL and AWS services. On the
      platform side, I focus on containers and CI/CD: reproducible, minimized Docker
      images and automated pipelines (Jenkins/Kubernetes) that keep delivery fast and safe.
    </p>
  </section>
</template>

<script>
export default { name:'AboutSection' }
</script>

<style scoped>
.lead{ max-width: 900px; margin: 0 auto 14px; line-height: 1.75; }
</style>
