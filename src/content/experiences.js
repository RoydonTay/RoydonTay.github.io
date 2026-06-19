import dsoLogo from "../assets/logos/dso.svg";
import shopeeLogo from "../assets/logos/shopee.svg";
import synapxeLogo from "../assets/logos/synapxe.svg";
import psaBdpLogo from "../assets/logos/psa-bdp.svg";

export const experiences = [
  {
    company: "DSO",
    role: "AI Researcher Intern",
    period: "May 2026 - Present",
    logo: dsoLogo,
    bullets: [
      "Researching a unified framework for LLM self-evolution loops in agentic harness engineering, combining adaptive population-based evolution with trace-based learning strategies.",
      "Engineered experimental pipelines and executed rigorous ablation studies to quantify the impact of agentic framework components, benchmarking performance across public datasets.",
    ],
    tags: ["LLM Agents", "Agentic AI", "Ablation Studies", "Research"],
  },
  {
    company: "Shopee",
    role: "Algorithm Engineer Intern",
    period: "Jan 2026 - May 2026",
    logo: shopeeLogo,
    bullets: [
      "Implemented and iterated upon cutting-edge recommendation model architectures from research papers for Shopee's customer service chatbot, delivering measurable gains in online A/B tests.",
      "Co-authored a CIKM 2026 Applied Research Track paper submission on AuGR, a Generative-Ranking Joint Training framework for chatbot intent recommendation.",
      "Performed data analysis on live traffic data to identify and resolve issues with online models.",
      "Experimented with RQ-VAE models for generating discrete semantic IDs from dense embeddings to better integrate diverse data streams into production models.",
    ],
    tags: ["Recommender Systems", "A/B Testing", "Chatbots", "RQ-VAE"],
  },
  {
    company: "Synapxe",
    role: "AI Engineer Intern",
    period: "Dec 2024 - Jul 2025",
    logo: synapxeLogo,
    bullets: [
      "Developed the HealthHub AI chatbot to streamline health-related inquiries, using RAG architecture to provide accurate multilingual assistance.",
      "Spearheaded the design and deployment of an agentic chatbot capable of vaccination eligibility checking and appointment booking, showcased at AI Accelerate 2025.",
      "Integrated automated evaluation pipelines and trace observability into LLM workflows to accelerate iterative prompt and context engineering.",
    ],
    tags: ["RAG", "Healthcare AI", "LLM Evaluation", "Observability"],
  },
  {
    company: "PSA BDP",
    role: "Data Science Intern",
    period: "May 2024 - Aug 2024",
    logo: psaBdpLogo,
    bullets: [
      "Developed a text-vector similarity retrieval and reranker-based search tool for Harmonized Tariff System classification.",
      "Identified roadblocks affecting classification accuracy and designed an LLM-powered data validation flow to improve input consistency and prediction recall.",
    ],
    tags: ["Semantic Search", "Reranking", "Data Validation", "Logistics"],
  },
];
