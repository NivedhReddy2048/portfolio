/**
 * Central portfolio data for Nivedh Reddy Pingili.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Project facts and numbers are taken from each repository's own README — nothing here is invented.
 * Lines marked TODO need a value from Nivedh (credential links, school names).
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Pingili Nivedh Reddy',
  displayName: 'Nivedh Reddy',
  firstName: 'NIVEDH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A PINGILI ORIGINAL',
  role: 'Full-Stack & GenAI Developer',
  tagline: ['Python & Django', 'GenAI / RAG', 'Data Engineering'],
  intro:
    'A 2026 B.Tech Computer Science (AI & ML) graduate building production-deployed Django platforms, multi-agent RAG systems, computer-vision pipelines and Azure / AWS data pipelines — seven of them live on the web.',
  location: 'Hyderabad, Telangana',
  email: 'nivedhreddypingili@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/nivedh-reddy-19074727a',
    github: 'https://github.com/NivedhReddy2048',
  },
  githubHandle: 'github.com/NivedhReddy2048',
  resumePdf: '/assets/Nivedh_Reddy_Resume.pdf',
  resumeFileName: 'Nivedh_Reddy_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Nivedh Reddy',
  },
  /** Short labels used by the hero, About and Play Intro. */
  degreeShort: 'B.Tech CSE · AI & ML',
  primaryLanguage: 'Python',
  primaryLanguageNote: 'with SQL, TypeScript, JavaScript',
  primaryStack: 'Python · Django · GenAI',
  interests: ['Data Engineering', 'AI Agents & RAG', 'Cloud (Azure & AWS)'],
};

export const education = [
  {
    school: 'SR University',
    place: 'Warangal',
    degree: 'Bachelor of Technology — Computer Science & Engineering (AI & ML)',
    period: '2022 – 2026',
    score: 'CGPA 7.99',
  },
  {
    school: 'Intermediate (12th)', // TODO: replace with your junior college name
    place: 'Telangana',
    degree: 'Intermediate — MPC',
    period: '2020 – 2022',
    score: '834 marks',
  },
  {
    school: 'SSC (10th)', // TODO: replace with your school name
    place: 'Hanamkonda',
    degree: 'Secondary School Certificate',
    period: '2020',
    score: 'GPA 9.8',
  },
];

/** No professional roles yet — sections that read this hide themselves when it is empty. */
export const experience: { company: string; role: string; place: string; period: string; points: string[] }[] = [];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  /** Live deployment, when there is one. Shows a "Live Demo" button. */
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const GH = 'https://github.com/NivedhReddy2048';

export const projects: Project[] = [
  {
    id: 'ekip',
    title: 'EKIP — Multi-Agent RAG',
    year: '2026',
    genre: 'GenAI • Multi-Agent • RAG',
    logline: 'An evidence-driven, multi-agent learning platform that answers from cited sources instead of guessing.',
    stack: ['Python', 'LangGraph', 'LangChain', 'ChromaDB', 'BM25', 'Groq', 'Gemini', 'Streamlit', 'Docker', 'GitHub Actions'],
    build: [
      'Orchestrated a 12-node LangGraph StateGraph with a rule-based knowledge planner that routes each query to 9 specialised knowledge-source agents.',
      'Built a hybrid RAG engine (ChromaDB dense search + BM25) so answers carry citations to the passages they came from.',
      'Added a multi-LLM router (Groq → Gemini → Mistral → Cohere) with circuit breakers, so an outage at one provider fails over automatically.',
      'Shipped with pytest suites, a GitHub Actions CI/CD pipeline and a Dockerfile; deployed on Streamlit Community Cloud.',
    ],
    features: [
      'Document Q&A with source citations',
      'Adaptive study mode: notes, flashcards, practice quizzes',
      'Research mode with paper surveys',
      'Provider failover across four LLMs',
      'Live system-status dashboard',
    ],
    metrics: [
      { value: '12', label: 'node LangGraph pipeline' },
      { value: '9', label: 'knowledge-source agents' },
      { value: '4', label: 'LLM providers with failover' },
      { value: 'CI/CD', label: 'GitHub Actions + pytest' },
    ],
    github: `${GH}/multi-agent-rag`,
    live: 'https://multi-agent-rag-rt8hvjr5qbuysvqgqtuj4x.streamlit.app/',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'carebridge',
    title: 'CareBridge',
    year: '2026',
    genre: 'Full-Stack • HealthTech • Django',
    logline: 'A healthcare and telemedicine platform — booking, video consults, records, billing and AI symptom insights.',
    stack: ['Django', 'DRF', 'Django Channels', 'Celery', 'Redis', 'PostgreSQL', 'Gemini API', 'Razorpay', 'Docker', 'Render'],
    build: [
      'Built as part of a 5-person team: a modular Django platform with patient, doctor, staff and admin roles on a custom user model.',
      'Real-time video consultation signalling with Django Channels, Daphne and WebRTC over WebSockets.',
      'Tesseract OCR extraction for uploaded lab reports, and a Gemini-powered symptom analyser offloaded to Celery workers.',
      'Razorpay payments with server-side signature verification and webhooks; containerised and deployed on Render.',
    ],
    features: [
      'Doctor discovery and slot booking without double-booking',
      'WebRTC telemedicine with session audit logs',
      'EHR uploads with OCR text extraction',
      'Razorpay billing and webhooks',
      'Gemini AI symptom insights',
    ],
    metrics: [
      { value: '4', label: 'user roles' },
      { value: '5', label: 'person team' },
      { value: 'WebRTC', label: 'real-time consults' },
      { value: 'Live', label: 'on Render' },
    ],
    github: `${GH}/CareBridge`,
    live: 'https://carebridge-ugeq.onrender.com',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
  {
    id: 'enterprise-doc-intel',
    title: 'Enterprise Document Intelligence',
    year: '2026',
    genre: 'GenAI • Hybrid RAG • Search',
    logline: 'A hybrid-retrieval RAG platform that answers questions about large PDFs with grounded, cited evidence.',
    stack: ['Python', 'Gemini 2.5 Flash', 'BGE Embeddings', 'BM25', 'Cross-Encoder', 'ChromaDB', 'Hugging Face'],
    build: [
      'Combined dense semantic search (BAAI bge-large) with BM25 keyword search, then re-ranked candidates with a cross-encoder.',
      'Recursive semantic chunking with parent-child context, plus OCR for scanned PDFs.',
      'Grounded prompting with Gemini 2.5 Flash — every answer is citation-aware with a confidence estimate.',
      'Enterprise dashboard for document registry, query analytics, latency and an evidence viewer; live on Hugging Face Spaces.',
    ],
    features: [
      'Hybrid dense + sparse retrieval',
      'Cross-encoder re-ranking',
      'Citation-backed answers with confidence scores',
      'OCR for scanned documents',
      'Query analytics and health dashboard',
    ],
    metrics: [
      { value: '2', label: 'retrievers fused (dense + BM25)' },
      { value: 'Re-rank', label: 'cross-encoder stage' },
      { value: 'Cited', label: 'grounded answers' },
      { value: 'Live', label: 'on Hugging Face' },
    ],
    github: `${GH}/enterprise-document-intelligence-platform`,
    live: 'https://huggingface.co/spaces/NivedhReddy/enterprise-rag-platform',
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'smart-placement',
    title: 'Smart Placement Platform',
    year: '2026',
    genre: 'Full-Stack • AI • Careers',
    logline: 'A placement-prep platform for students, recruiters and mentors — resume analysis, job matching and hiring tools.',
    stack: ['Django', 'DRF', 'Simple JWT', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Vercel', 'Render'],
    build: [
      'Built solo: a Django REST backend split into 11 modular apps behind JWT authentication.',
      'AI resume analyser and job-match recommender that extract skills and score resumes against job descriptions.',
      'Next.js 15 + TypeScript frontend with student, recruiter and admin experiences.',
      'Frontend deployed on Vercel, backend and Jazzmin admin on Render.',
    ],
    features: [
      'AI resume analysis and job matching',
      'Mock interview preparation',
      'Recruiter job posts, filtering and hiring analytics',
      'Messaging, notifications and community discussions',
      'Mentor support',
    ],
    metrics: [
      { value: '11', label: 'modular Django apps' },
      { value: '3', label: 'audiences: students, recruiters, mentors' },
      { value: 'Solo', label: 'build' },
      { value: 'Live', label: 'Vercel + Render' },
    ],
    github: `${GH}/smart-placement-platform`,
    live: 'https://smart-placement-platform-im9a.vercel.app/login',
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'realtime-fraud',
    title: 'Real-Time Fraud Detection',
    year: '2026',
    genre: 'Data Engineering • Streaming • Azure',
    logline: 'A streaming lakehouse that scores live card transactions against five fraud rules — and measures how good each rule really is.',
    stack: ['Azure Event Hubs', 'Azure Databricks', 'Structured Streaming', 'Delta Lake', 'Unity Catalog', 'ADLS Gen2', 'PySpark', 'Power BI'],
    build: [
      'Streamed card transactions from a Python producer through Azure Event Hubs into Databricks Structured Streaming.',
      'Delta Lake medallion layers with watermarking, two-level deduplication, checkpointing and idempotent MERGE writes.',
      'A 13-rule data-quality gate that quarantines bad records with a reason instead of dropping them.',
      'Evaluated all 5 fraud rules for precision and recall — found one rule produced 65% of alerts at 5.3% precision.',
    ],
    features: [
      'Event-time windowing with late-data tolerance',
      'Exactly-once style processing via checkpoints + MERGE',
      'Data-quality quarantine',
      'Rule scorecard: precision, recall, false positives',
      'Star-schema Power BI report',
    ],
    metrics: [
      { value: '10.28M', label: 'transactions in Silver' },
      { value: '283K', label: 'events streamed live' },
      { value: '227K', label: 'fraud alerts evaluated' },
      { value: '5', label: 'rules scored on precision / recall' },
    ],
    github: `${GH}/RealTime-Fraud-Detection_DataEngineering`,
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'opshub',
    title: 'OpsHub',
    year: '2026',
    genre: 'Full-Stack • SaaS • Operations',
    logline: 'An operations platform for tickets, tasks, projects and teams — one dashboard for the whole workflow.',
    stack: ['Django', 'DRF', 'Simple JWT', 'PostgreSQL', 'Next.js 16', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Render'],
    build: [
      'Built solo: 8 modules covering tickets, tasks, projects, teams, analytics, notifications and audit logs.',
      'JWT authentication with role-based access control across a multi-organization workspace.',
      'Ticket workflows with priorities and SLA monitoring; sprint tasks with overdue detection.',
      'Next.js 16 frontend on Vercel, Django REST API with live Swagger docs on Render.',
    ],
    features: [
      'Multi-organization workspaces',
      'RBAC with JWT',
      'Ticket SLA monitoring',
      'Sprint task tracking',
      'Operational analytics and audit logging',
    ],
    metrics: [
      { value: '8', label: 'modules' },
      { value: 'RBAC', label: 'JWT role-based access' },
      { value: 'Solo', label: 'build' },
      { value: 'Live', label: 'Vercel + Render' },
    ],
    github: `${GH}/OpsHub`,
    live: 'https://ops-hub-livid.vercel.app/login',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'tenants',
  },
  {
    id: 'smart-city-traffic',
    title: 'Smart City Traffic Enforcement',
    year: '2026',
    genre: 'Computer Vision • Tracking • OCR',
    logline: 'A CV pipeline that spots red-light runners, estimates speed, classifies vehicles and reads their plates.',
    stack: ['Python', 'YOLOv8', 'ByteTrack', 'Supervision', 'EasyOCR', 'OpenCV', 'Gradio'],
    build: [
      'YOLOv8 vehicle detection with ByteTrack multi-object tracking to keep stable IDs across frames.',
      'Virtual tripwire line-zones to flag violations, and pixel-distance-over-time speed estimates.',
      'Crops each offender and runs EasyOCR on the plate; a ticketed-vehicle cache processes each car once, cutting compute by 90%.',
      'Thread-locked for limited-core containers and deployed as a Gradio dashboard on Hugging Face Spaces.',
    ],
    features: [
      'Red-light violation detection',
      'Speed estimation',
      'Vehicle-type classification',
      'License-plate OCR on offenders',
      'Documented limitations and production fixes',
    ],
    metrics: [
      { value: '90%', label: 'less compute via per-vehicle caching' },
      { value: 'YOLOv8', label: '+ ByteTrack tracking' },
      { value: 'Live', label: 'on Hugging Face' },
    ],
    github: `${GH}/smart-city-traffic-enforcement`,
    live: 'https://huggingface.co/spaces/NivedhReddy/Smart-City-Traffic-Enforcement',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'semantic-video-search',
    title: 'Semantic Video Search',
    year: '2026',
    genre: 'Multimodal AI • Vector Search',
    logline: 'Upload any video and find a moment by describing it — no manual tagging.',
    stack: ['Python', 'OpenAI CLIP', 'Qdrant', 'PyTorch', 'OpenCV', 'Gradio'],
    build: [
      'Extracts frames at 1 FPS with OpenCV and embeds them with CLIP into a shared 512-dimensional space.',
      'Indexes vectors with timestamps in Qdrant and answers text queries by cosine similarity.',
      'Confidence threshold (score < 0.22) stops the engine returning moments that are not in the video.',
      'Returns the exact matching frame; live as a Gradio app on Hugging Face Spaces.',
    ],
    features: ['Natural-language video search', 'On-the-fly indexing of any .mp4', 'Hallucination guard via thresholding', 'Matching frame preview'],
    metrics: [
      { value: '512-d', label: 'CLIP embedding space' },
      { value: '1 FPS', label: 'frame sampling' },
      { value: '0', label: 'manual tags needed' },
      { value: 'Live', label: 'on Hugging Face' },
    ],
    github: `${GH}/semantic-video-search-engine`,
    live: 'https://huggingface.co/spaces/NivedhReddy/semantic-video-search',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
  {
    id: 'enterprise-sales-analytics',
    title: 'Enterprise Sales Analytics',
    year: '2026',
    genre: 'Data Engineering • Azure • Lakehouse',
    logline: 'An end-to-end Azure lakehouse that turns raw sales transactions into an executive Power BI dashboard.',
    stack: ['Azure Data Factory', 'ADLS Gen2', 'Azure Databricks', 'PySpark', 'SQL', 'Delta Tables', 'Power BI'],
    build: [
      'Ingested raw transactional data with Azure Data Factory into ADLS Gen2.',
      'Transformed it in Azure Databricks with PySpark through Bronze → Silver → Gold medallion layers.',
      'Cleaned duplicates, missing values and inconsistent formats in Silver; built business KPIs in Gold.',
      'Gold layer powers an interactive executive Power BI dashboard.',
    ],
    features: ['Medallion architecture (Bronze / Silver / Gold)', 'ADF ingestion pipelines', 'Delta tables', 'Executive KPI dashboard'],
    metrics: [
      { value: '3', label: 'medallion layers' },
      { value: 'ADF → Databricks', label: 'ingestion to transformation' },
      { value: 'Power BI', label: 'executive dashboard' },
    ],
    github: `${GH}/Enterprise-Sales-Analytics_DataEngineering`,
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'aws-pyspark-etl',
    title: 'AWS PySpark ETL Pipeline',
    year: '2026',
    genre: 'Data Engineering • AWS • Spark',
    logline: 'A Glue + PySpark pipeline that moves a data lake from a raw landing zone to a clean, query-ready layer.',
    stack: ['AWS Glue', 'PySpark', 'Amazon S3', 'Apache Parquet', 'Amazon Athena', 'IAM'],
    build: [
      'Distributed PySpark transformations in an AWS Glue interactive session over raw sales CSVs in S3.',
      'Standardised categories, enforced schema types and merged fragmented records.',
      'Wrote Snappy-compressed Parquet to S3 and mapped it in Athena for fast, cheaper columnar queries.',
      'Diagnosed and fixed IAM PassRole and S3 permission errors during Glue execution.',
    ],
    features: ['Raw → cleaned layer ETL', 'Schema enforcement', 'Columnar Parquet storage', 'Athena SQL catalog'],
    metrics: [
      { value: 'CSV → Parquet', label: 'columnar storage' },
      { value: 'Glue', label: 'serverless Spark' },
      { value: 'Athena', label: 'SQL on S3' },
    ],
    github: `${GH}/AWS-PySpark-ETL-Pipeline`,
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'cloud-analytics-bi',
    title: 'Cloud Analytics BI Dashboard',
    year: '2026',
    genre: 'Analytics • SQL • Power BI',
    logline: 'Diagnostic and strategic analytics on sales data — from Python EDA to Athena SQL to an executive Power BI report.',
    stack: ['Python', 'Pandas', 'Seaborn', 'Plotly', 'Amazon Athena', 'SQL', 'Power BI'],
    build: [
      'Pareto analysis showing 20% of products drive 80% of revenue, plus price-elasticity and profit-drain studies.',
      'An Athena SQL view with window functions (LAG, OVER) to pre-compute month-over-month growth.',
      'Interactive Power BI dashboard with KPIs, regional drill-downs and slicers by salesperson and category.',
    ],
    features: ['Pareto (80/20) analysis', 'Price elasticity', 'MoM growth via window functions', 'Executive Power BI dashboard'],
    metrics: [
      { value: '80/20', label: 'Pareto revenue split found' },
      { value: 'LAG / OVER', label: 'SQL window functions' },
      { value: 'Power BI', label: 'interactive report' },
    ],
    github: `${GH}/Cloud-Analytics-BI-Dashboard`,
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'tenants',
  },
  {
    id: 'license-plate-recognition',
    title: 'License Plate Recognition',
    year: '2025',
    genre: 'Computer Vision • Deep Learning',
    logline: 'Detects and reads license plates from images and video with a fine-tuned YOLOv8 model and OCR.',
    stack: ['Python', 'YOLOv8', 'EasyOCR', 'Tesseract', 'OpenCV', 'PyTorch'],
    build: [
      'Fine-tuned YOLOv8 on a custom license-plate dataset for 50 epochs at 640 px.',
      'Preprocessed plate crops before OCR with EasyOCR and Tesseract.',
      'Bounding-box visualisation of detected plates.',
    ],
    features: ['Plate detection', 'OCR text reading', 'Preprocessing pipeline', 'Bounding-box visualisation'],
    metrics: [
      { value: '50', label: 'training epochs' },
      { value: '2', label: 'OCR engines compared' },
    ],
    github: `${GH}/Automated-License-Plate-Detection-and-Recognition-Using-YOLO-and-OCR-`,
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'walmart-sales',
    title: 'Walmart Sales Analysis',
    year: '2025',
    genre: 'Data Analysis • EDA',
    logline: 'Exploring Walmart weekly sales for trends, seasonality and the economic factors behind them.',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    build: [
      'Cleaned the data and engineered month and year features from dates.',
      'Analysed seasonal trends and holiday effects across stores and departments.',
      'Correlated weekly sales with temperature, fuel price, CPI and unemployment.',
    ],
    features: ['Seasonality and holiday analysis', 'Store / department comparisons', 'Outlier detection', 'Economic-factor correlations'],
    metrics: [
      { value: '4', label: 'economic factors correlated' },
      { value: 'EDA', label: 'trend & seasonality study' },
    ],
    github: `${GH}/Walmart_Sales_Forecasting`,
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'codesage',
    title: 'CodeSage',
    year: '2026',
    genre: 'In Production • AI Code Review',
    logline: 'Coming soon: multi-agent code review for GitHub pull requests, grounded in the repository’s own code.',
    stack: ['Django', 'DRF', 'Django Channels', 'LangGraph', 'pgvector', 'PostgreSQL', 'Redis', 'Next.js', 'TypeScript'],
    build: [
      'Being built now — currently at the scaffold stage.',
      'A six-agent LangGraph pipeline reviews each pull request.',
      'Hybrid retrieval (pgvector dense + Postgres full-text) so findings cite real files and lines.',
    ],
    features: ['PR-level AI review', 'File-and-line citations', 'Hybrid retrieval over the repo'],
    metrics: [
      { value: '6', label: 'review agents planned' },
      { value: 'WIP', label: 'in active development' },
    ],
    github: `${GH}/CodeSage`,
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'live-deployments',
    title: '7 Live Deployments',
    org: 'Streamlit • Hugging Face • Vercel • Render',
    detail: 'EKIP, CareBridge, Smart Placement, OpsHub, Document Intelligence, Semantic Video Search and Traffic Enforcement — all running on the web.',
    laurel: 'Shipped to Production',
  },
  {
    id: 'az-900',
    title: 'Azure Fundamentals',
    org: 'Microsoft • AZ-900',
    detail: 'Passed the AZ-900 exam on 4 October 2026 with a score of 747.',
    laurel: 'Microsoft Certified',
  },
  {
    id: 'streaming-scale',
    title: '10M+ Rows Streamed',
    org: 'Real-Time Fraud Detection',
    detail: '10.28 million transactions processed through a Delta Lake medallion pipeline, with every fraud rule scored on precision and recall.',
    laurel: 'Data at Scale',
  },
  {
    id: 'multi-agent',
    title: '12-Node Agent Graph',
    org: 'EKIP • LangGraph',
    detail: 'A multi-agent RAG system with 9 knowledge-source agents, 4-provider LLM failover and CI/CD.',
    laurel: 'Best Work',
  },
  {
    id: 'ssc',
    title: '9.8 GPA',
    org: 'SSC (10th Grade)',
    detail: 'Secondary School Certificate with a 9.8 GPA; Intermediate with 834 marks.',
    laurel: 'Academic',
  },
];

/** `link` is optional — cards without one are shown but not clickable. */
export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Microsoft', name: 'Microsoft Certified: Azure Fundamentals (AZ-900)' }, // TODO: add Credly / Microsoft Learn link
  { issuer: 'AWS', name: 'AWS Academy Graduate – Cloud Foundations' }, // TODO: add Credly link
  { issuer: 'AWS', name: 'AWS Academy Graduate – Machine Learning Foundations' }, // TODO: add Credly link
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python is the primary language',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Django all the way down',
    skills: [
      { name: 'Django', mono: 'Dj' },
      { name: 'Django REST Framework', mono: 'Dr' },
      { name: 'Django Channels', mono: 'Ch' },
      { name: 'Celery', mono: 'Ce' },
      { name: 'Redis', mono: 'Rd' },
      { name: 'JWT / RBAC', mono: 'Jw' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & dashboards',
    skills: [
      { name: 'Next.js', mono: 'Nx' },
      { name: 'React', mono: 'Re' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Streamlit', mono: 'St' },
      { name: 'Gradio', mono: 'Gr' },
    ],
  },
  {
    id: 'genai',
    title: 'GenAI & ML',
    subtitle: 'Agents • RAG • Vision',
    skills: [
      { name: 'LangGraph', mono: 'Lg' },
      { name: 'LangChain', mono: 'Lc' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'Gemini API', mono: 'Gm' },
      { name: 'Vector DBs', mono: 'Vd' },
      { name: 'YOLOv8', mono: 'Yo' },
      { name: 'OpenCV', mono: 'Cv' },
      { name: 'CLIP', mono: 'Cl' },
    ],
  },
  {
    id: 'data',
    title: 'Data Engineering',
    subtitle: 'Batch & streaming pipelines',
    skills: [
      { name: 'PySpark', mono: 'Ps' },
      { name: 'Azure Databricks', mono: 'Ad' },
      { name: 'Azure Data Factory', mono: 'Df' },
      { name: 'Delta Lake', mono: 'Dl' },
      { name: 'Azure Event Hubs', mono: 'Eh' },
      { name: 'AWS Glue', mono: 'Gl' },
      { name: 'Amazon Athena', mono: 'At' },
      { name: 'Power BI', mono: 'Bi' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Databases',
    subtitle: 'Shipping & storage',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'GitHub Actions', mono: 'Ga' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'AWS S3', mono: 'S3' },
      { name: 'Vercel / Render', mono: 'Vr' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'Data Engineering', mono: 'De' },
      { name: 'AI Agents & RAG', mono: 'Ag' },
      { name: 'Cloud (Azure & AWS)', mono: 'Cl' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects and certifications.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['EKIP', 'Document Intelligence', 'Semantic Video Search', 'Traffic Enforcement'],
  SQL: ['Cloud Analytics BI Dashboard', 'Enterprise Sales Analytics'],
  TypeScript: ['Smart Placement Platform', 'OpsHub'],
  Django: ['CareBridge', 'Smart Placement Platform', 'OpsHub', 'CodeSage'],
  'Django REST Framework': ['CareBridge', 'Smart Placement Platform', 'OpsHub'],
  'Django Channels': ['CareBridge (WebRTC signalling)', 'CodeSage'],
  Celery: ['CareBridge (async AI pipelines)'],
  Redis: ['CareBridge', 'CodeSage'],
  'JWT / RBAC': ['OpsHub', 'Smart Placement Platform', 'CareBridge'],
  'Next.js': ['Smart Placement Platform', 'OpsHub', 'CodeSage'],
  React: ['Smart Placement Platform', 'OpsHub'],
  'Tailwind CSS': ['Smart Placement Platform', 'OpsHub'],
  Streamlit: ['EKIP'],
  Gradio: ['Semantic Video Search', 'Traffic Enforcement'],
  LangGraph: ['EKIP (12-node graph)', 'CodeSage'],
  LangChain: ['EKIP'],
  RAG: ['EKIP', 'Document Intelligence', 'CodeSage'],
  'Gemini API': ['Document Intelligence', 'EKIP', 'CareBridge', 'Smart Placement Platform'],
  'Vector DBs': ['ChromaDB — EKIP, Document Intelligence', 'Qdrant — Semantic Video Search', 'pgvector — CodeSage'],
  YOLOv8: ['Traffic Enforcement', 'License Plate Recognition'],
  OpenCV: ['Traffic Enforcement', 'Semantic Video Search', 'License Plate Recognition'],
  CLIP: ['Semantic Video Search'],
  PySpark: ['Real-Time Fraud Detection', 'Enterprise Sales Analytics', 'AWS PySpark ETL'],
  'Azure Databricks': ['Real-Time Fraud Detection', 'Enterprise Sales Analytics'],
  'Azure Data Factory': ['Enterprise Sales Analytics'],
  'Delta Lake': ['Real-Time Fraud Detection', 'Enterprise Sales Analytics'],
  'Azure Event Hubs': ['Real-Time Fraud Detection'],
  'AWS Glue': ['AWS PySpark ETL'],
  'Amazon Athena': ['AWS PySpark ETL', 'Cloud Analytics BI Dashboard'],
  'Power BI': ['Real-Time Fraud Detection', 'Enterprise Sales Analytics', 'Cloud Analytics BI Dashboard'],
  PostgreSQL: ['CareBridge', 'OpsHub', 'CodeSage'],
  Docker: ['CareBridge', 'EKIP'],
  'GitHub Actions': ['EKIP (CI/CD)'],
  'AWS S3': ['CareBridge (record storage)', 'AWS PySpark ETL', 'AWS Academy Cloud Foundations'],
  'Vercel / Render': ['Smart Placement Platform', 'OpsHub', 'CareBridge'],
  'Cloud (Azure & AWS)': ['Microsoft AZ-900', 'AWS Academy Cloud Foundations', 'AWS Academy ML Foundations'],
  'Data Engineering': ['Real-Time Fraud Detection', 'Enterprise Sales Analytics', 'AWS PySpark ETL'],
  'AI Agents & RAG': ['EKIP', 'CodeSage'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2020 – 2022',
    synopsis: 'School in Hanamkonda and Intermediate in Telangana — the foundations.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Secondary School Certificate with a 9.8 GPA, then Intermediate with 834 marks.',
        tags: ['SSC 9.8', 'Inter 834'],
        runtime: '2020 – 2022',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI & ML',
    period: '2022 – 2026',
    synopsis: 'B.Tech in Computer Science & Engineering (AI & ML) at SR University, Warangal.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'B.Tech CSE (AI & ML) at SR University, Warangal — graduated in 2026 with a CGPA of 7.99.',
        tags: ['B.Tech', 'AI & ML', 'CGPA 7.99'],
        runtime: '2022 – 2026',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The First Model',
        description: 'Fine-tuned YOLOv8 for license-plate recognition and explored Walmart sales data — the first computer-vision and data projects.',
        tags: ['YOLOv8', 'OCR', 'EDA'],
        runtime: '2025',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning to Ship',
    period: '2026',
    synopsis: 'Three full-stack Django platforms, built and deployed to the web.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Team Player',
        description: 'CareBridge with a 5-person team — telemedicine over WebRTC, OCR records, Razorpay billing and Gemini insights.',
        tags: ['Django', 'Channels', 'Celery', 'Razorpay'],
        runtime: 'Live on Render',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'The Solo Builds',
        description: 'Smart Placement Platform (11 Django apps) and OpsHub (8 modules) — Django REST APIs with Next.js frontends.',
        tags: ['DRF', 'Next.js', 'JWT', 'RBAC'],
        runtime: 'Live on Vercel',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'The GenAI Arc',
    period: '2026',
    synopsis: 'From vector search to multi-agent systems — four AI apps, all live.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Vision',
        description: 'Semantic Video Search with CLIP + Qdrant, and Smart City Traffic Enforcement with YOLOv8, ByteTrack and EasyOCR.',
        tags: ['CLIP', 'Qdrant', 'YOLOv8', 'ByteTrack'],
        runtime: 'Hugging Face',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The Retriever',
        description: 'Enterprise Document Intelligence — hybrid BM25 + dense retrieval, cross-encoder re-ranking and cited answers.',
        tags: ['RAG', 'BM25', 'Gemini'],
        runtime: 'Hugging Face',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'The Orchestrator',
        description: 'EKIP — a 12-node LangGraph pipeline with 9 agents, 4-provider LLM failover and CI/CD.',
        tags: ['LangGraph', 'Multi-Agent', 'CI/CD'],
        runtime: 'Streamlit Cloud',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: 'The Data Arc',
    period: '2026',
    synopsis: 'Lakehouses on Azure and AWS — from batch ETL to real-time streaming.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Pipeline',
        description: 'AWS Glue + PySpark ETL to Parquet, Athena SQL analytics and a Power BI executive dashboard.',
        tags: ['AWS Glue', 'Athena', 'Power BI'],
        runtime: 'AWS',
        palette: amber,
      },
      {
        code: 'S05 E02',
        title: 'The Lakehouse',
        description: 'Enterprise Sales Analytics — ADF, ADLS Gen2 and Databricks through Bronze, Silver and Gold layers.',
        tags: ['ADF', 'Databricks', 'Medallion'],
        runtime: 'Azure',
        palette: ocean,
      },
      {
        code: 'S05 E03',
        title: 'The Stream',
        description: 'Real-Time Fraud Detection — 10.28M transactions through Event Hubs and Structured Streaming, every rule measured.',
        tags: ['Event Hubs', 'Delta Lake', 'Streaming'],
        runtime: 'Azure',
        palette: jade,
      },
      {
        code: 'S05 E04',
        title: 'The Certified',
        description: 'Microsoft Certified: Azure Fundamentals (AZ-900), passed with 747 — alongside AWS Cloud and ML Foundations.',
        tags: ['AZ-900', 'AWS'],
        runtime: 'Oct 2026',
        palette: violet,
      },
    ],
  },
  {
    number: 6,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The next arc is already in production.',
    episodes: [
      {
        code: 'S06 E01',
        title: 'The Next Chapter',
        description: 'Building CodeSage — multi-agent code review for GitHub pull requests — and going deeper into data engineering and AI agents.',
        tags: ['CodeSage', 'Data Engineering', 'AI Agents'],
        runtime: 'In production',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Best work', title: 'EKIP', detail: '12-node agent graph • 9 agents', palette: violet },
  { label: 'Primary stack', title: 'Python & Django', detail: 'Behind 4 of the platforms', palette: amber },
  { label: 'Shipped', title: '7 Live Apps', detail: 'Streamlit • Hugging Face • Vercel • Render', palette: jade },
  { label: 'Biggest dataset', title: '10.28M Rows', detail: 'Real-time fraud lakehouse on Azure', palette: ocean },
  { label: 'Cloud credential', title: 'AZ-900', detail: 'Microsoft Certified • score 747', palette: crimson },
  { label: 'Team build', title: 'CareBridge', detail: 'Telemedicine with a 5-person team', palette: jade },
  { label: 'Computer vision', title: 'Traffic Enforcement', detail: 'YOLOv8 • ByteTrack • EasyOCR', palette: amber },
  { label: 'Retrieval', title: 'Hybrid RAG', detail: 'BM25 + dense + cross-encoder', palette: crimson },
  { label: 'Data arc', title: 'Medallion', detail: 'Bronze → Silver → Gold on Azure & AWS', palette: ocean },
  { label: 'Now building', title: 'CodeSage', detail: 'Multi-agent PR review', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · AI & ML',
    lines: ['SR University, Warangal', 'Computer Science & Engineering (AI & ML) · 2022 – 2026'],
    chips: ['CGPA 7.99', 'Class of 2026'],
  },
  {
    kicker: 'Skills',
    title: 'Python first.',
    lines: ['Django, DRF, Channels, Celery · Next.js, React', 'LangGraph, RAG, Gemini · PySpark, Databricks, Power BI'],
    chips: ['Python', 'Django', 'LangGraph', 'Next.js', 'PySpark', 'Docker'],
  },
  {
    kicker: 'Full-stack',
    title: 'Learning to Ship',
    lines: ['CareBridge — telemedicine, built with a 5-person team', 'Smart Placement — 11 Django apps, solo', 'OpsHub — 8 modules, solo'],
  },
  {
    kicker: 'GenAI',
    title: 'The AI Originals',
    lines: ['EKIP — 12-node multi-agent RAG', 'Document Intelligence — hybrid retrieval with citations', 'Semantic Video Search · Traffic Enforcement'],
  },
  {
    kicker: 'Data',
    title: 'The Data Arc',
    lines: ['Real-time fraud detection — 10.28M transactions', 'Azure lakehouse · AWS Glue ETL · Power BI'],
  },
  {
    kicker: 'Certified',
    title: `${certifications.length} Certifications`,
    lines: ['Microsoft AZ-900 — score 747', 'AWS Academy Cloud & ML Foundations'],
  },
  {
    kicker: 'Current mission',
    title: 'Now building',
    lines: ['CodeSage · Data Engineering · AI Agents'],
  },
];

export type ProfileId = 'nivedh' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'nivedh',
    name: 'Nivedh',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

const projectYears = Array.from(new Set(projects.map((p) => p.year))).sort();
export const projectYearRange = projectYears.length > 1 ? `${projectYears[0]} – ${projectYears[projectYears.length - 1]}` : projectYears[0];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & focus', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • ${projectYearRange}`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the portfolio', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
