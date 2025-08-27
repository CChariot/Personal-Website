// Central place for content so your components stay lean.
export const hero = {
  name: 'Lihan Zhan',
  tagline: 'Software Engineer',
  email: 'Lihanzhan11@gmail.com',
  github: 'https://github.com/Cchariot',
  linkedin: 'https://linkedin.com/in/cg'
}

export const highlights = [
  {
    title: 'LLM & AI Engineering',
    body: 'Deployed LLM pipelines with Hugging Face + ONNX Runtime and CUDA; optimized Jetson edge inference (~40% latency reduction). Skilled with PyTorch and OpenAI API, prompt design, and integrating AI into production.'
  },
  {
    title: 'Full-Stack & Backend',
    body: 'Build scalable services in Python/Go and modern web apps (Vue.js/Node). Real-time, AI-driven features with PostgreSQL, AWS S3, and clean REST patterns.'
  },
  {
    title: 'Containerization & CI/CD',
    body: 'Reproducible Docker images, image minimization, and automated pipelines (Jenkins/Kubernetes/GitLab CI). Experience with image debugging and reproducibility analysis.'
  }
]

export const jobs = [
  {
    title: 'Software Engineer II',
    company: 'SEI, Carnegie Mellon University',
    dates: '05/2022 – Current',
    location: 'Pittsburgh, PA',
    points: [
      'Deployed edge-optimized LLM inference pipelines (Hugging Face + ONNX Runtime), reducing response latency by ~40% on Jetson Nano.',
      'Designed and implemented a real-time facial recognition pipeline using PyTorch; integrated AWS S3 for scalable image storage and PostgreSQL for metadata indexing.',
      'Implemented GPU-accelerated image processing (CUDA) in ROS pipelines on Jetson to automate drone missions.',
      'Created a container minimization tool, shrinking image output tar size by ~90%.',
      'Led research to assess GoF design patterns across 30 Apache projects, producing quantitative insights to inform architecture decisions.',
      'Developed a container reproducibility issue identification tool for dev/prod parity.'
    ],
    tech: ['PyTorch','OpenAI API','Hugging Face','ONNX Runtime','Docker','CUDA','ROS','AWS','PostgreSQL','Python','Go','Apache NiFi']
  },
  {
    title: 'Software Engineer',
    company: 'Lockheed Martin',
    dates: '07/2021 – 05/2022',
    location: 'Moorestown, NJ',
    points: [
      'Improved Solid State Radar performance and addressed client-specific needs using C++ and Python.',
      'Set up CI/CD with Jenkins & Robot Framework, reducing average test time by ~30%.',
      'Developed in Agile Scrum; used JIRA and Bitbucket for collaboration.',
      'Identified radar performance changes and errors using GDB; performed Linux system operations.'
    ],
    tech: ['C++','Python','Jenkins','Robot Framework','JIRA','Bitbucket','GDB','Linux']
  }
]


export const skills = {
  ai: ['PyTorch','Hugging Face','ONNX Runtime','CUDA','OpenAI API'],
  fullstack: ['Python','Java','Go','JavaScript','Vue.js','Node.js','PostgreSQL','AWS S3','REST'],
  devops: ['Docker','Kubernetes','Jenkins','GitLab CI','Git','Linux']
}

export const projects = [
  {
    name: 'Story Assistive Writer',
    period: '2024',
    stack: ['React', 'Vite', 'TypeScript', 'OpenAI API'],
    bullets: [
      'Guides GPT with a structured prompt pipeline (Template → Persona → Verifier) to keep story suggestions consistent and on-tone.',
      'Implements a rating/feedback loop that influences subsequent prompts and surfaces higher-quality continuations.',
      'Session state management with safety checks and draft export for later editing; clean component architecture for easy iteration.',
      'Deployed as a lightweight SPA; fast local dev with Vite and typed hooks with TypeScript.'
    ],
  },
  {
    name: 'Blackjack AI',
    period: '2023',
    stack: ['Python', 'Sockets', 'Jenkins', 'PyTest'],
    bullets: [
      'Applied multiple design patterns (Strategy, State, Observer) to separate game engine, policy modules, and I/O.',
      'Experimented with AI strategies for hit/stand logic; simulated policies to compare outcomes (≈40–60% win-rate range by policy).',
      'Client/server architecture with sockets; deterministic unit tests and CI via Jenkins.',
      'CLI tooling for reproducible runs; clear logs and metrics to analyze policy performance.'
    ],
  }
]
