// All site copy lives here, so content updates never touch the components.

export const profile = {
  name: 'Lihan Zhan',
  location: 'Pittsburgh, PA',
  intro:
    'Software engineer. I build data platforms and LLM inference pipelines for edge devices, where memory is tight and the network drops.',
  email: 'Lihanzhan11@gmail.com',
  github: 'https://github.com/Cchariot',
  linkedin: 'https://www.linkedin.com/in/lihan-zhan-a07a6612b/'
}

export const jobs = [
  {
    role: 'Software Engineer II',
    org: 'Software Engineering Institute, Carnegie Mellon University',
    place: 'Pittsburgh, PA',
    start: '2022',
    end: 'Present',
    points: [
      'Built a self-service data platform on Apache NiFi. Non-technical operators connect data sources, chain containerized transformations, and send results to external systems, without waiting on engineers.',
      'Used NATS JetStream to buffer and replay data from edge devices through network outages. The platform runs on k3s behind Istio, with Keycloak sign-on and Kyverno admission policies.',
      'Built an agentic LLM pipeline (tool calling, retrieval) that turns model specifications into executable MLTE test suites, with grounding checks on what it generates.',
      'Cut LLM response latency by 40% on a Jetson Nano by moving inference to ONNX Runtime.',
      'Built an LLM-based pipeline that translates legacy Ada code to C++, increasing translation throughput 4x.',
      'Built a real-time facial recognition pipeline in PyTorch on AWS, with S3 for images and PostgreSQL for metadata.',
      'Wrote GPU-accelerated image processing (CUDA) in ROS pipelines on Jetson, and a container minimization tool that shrinks image tarballs by about 90%.'
    ]
  },
  {
    role: 'Software Engineer',
    org: 'Lockheed Martin',
    place: 'Moorestown, NJ',
    start: '2021',
    end: '2022',
    points: [
      'Set up CI/CD with Jenkins and Robot Framework, cutting average test run time by 30%.',
      'Improved Solid State Radar software performance in C++ and Python, and tracked down regressions with GDB on Linux.'
    ]
  }
]

export const research = {
  title: 'Small language models on edge devices',
  context: "CMU master's research, 2025",
  summary:
    'I stress-tested six small language models, from 82M to 360M parameters, on a Jetson Xavier NX (8 GB). Prompts grew from 128 to 512 tokens until a model timed out, ran out of memory, or crashed. At each length I measured latency per token, energy per token from tegrastats power traces, peak GPU memory, and failures.',
  findings: [
    'Models up to 125M parameters stayed interactive all the way to 512 tokens.',
    'Models of 350M and up became unstable past about 320 tokens.',
    'At 512 tokens, SmolLM-135M used about 4x the latency, energy, and memory of DistilGPT2.'
  ],
  takeaway:
    'The practical rule that came out of it: treat prompt length as a budget. For interactive work on this class of device, stay at or under 125M parameters, and shorten prompts or quantize before moving up to 360M.'
}

// Latency (seconds per token) read from the study's results chart.
// Each series stops where the model stopped running reliably.
export const latency = {
  lengths: [128, 192, 256, 320, 384, 448, 512],
  series: [
    { name: 'DistilGPT2 82M', values: [0.037, 0.042, 0.049, 0.049, 0.069, 0.079, 0.139] },
    { name: 'OPT 125M', values: [0.052, 0.065, 0.063, 0.077, 0.087, 0.112, 0.144] },
    { name: 'GPT-Neo 125M', values: [0.074, 0.076, 0.083, 0.108, 0.196, 0.219, 0.258] },
    { name: 'SmolLM 135M', values: [0.231, 0.244, 0.254, 0.273, 0.329, 0.457, 0.608] },
    { name: 'OPT 350M', values: [0.105, 0.134, 0.172, 0.434], unstable: true },
    { name: 'SmolLM 360M', values: [0.291, 0.380, 0.347, 0.533], unstable: true }
  ]
}

export const skills = [
  { group: 'Languages', items: ['Go', 'Python', 'C++', 'Java', 'SQL'] },
  { group: 'ML and inference', items: ['PyTorch', 'Hugging Face', 'ONNX Runtime', 'CUDA', 'OpenAI API'] },
  { group: 'Data and messaging', items: ['Apache NiFi', 'NATS JetStream', 'PostgreSQL'] },
  { group: 'Infrastructure', items: ['Kubernetes', 'k3s', 'Docker', 'Istio', 'AWS', 'Jenkins', 'Linux'] }
]

export const education = [
  { school: 'Carnegie Mellon University', degree: 'M.S. Software Engineering', years: '2024–2025' },
  { school: 'The City College of New York', degree: 'B.S. Computer Science', years: '2016–2021' }
]
