import type { Journey } from "@/interfaces/shared";

export const introduction = `This is a little timeline of where I’ve been and what I’ve learned along
        the way. Each role brought new challenges, new people, and new
        perspectives that helped me grow`;

export const Journeys: Journey[] = [
  {
    date: "2025 - Present",
    job: "Senior Software Engineer",
    company: "Tsukiden Global Solutions Inc.",
    description: [
      "Conducted regular code reviews to enforce clean, readable, and maintainable code. Provided constructive feedback to peers, helping to reduce technical debt and decreasing time spent on bug fixes and feature updates. ",
      "Monitored web application vulnerabilities using Trivy, proactively identifying and addressing security issues to maintain a secure application environment.",
    ],
    technologies: [
      "Azure",
      "Azure DevOps",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Next.js",
      "HTML",
      "CSS",
      "Python",
      "Material UI",
      "Docker",
      "Trivy",
    ],
  },
  {
    date: "2023 - 2024",
    job: "Software Engineer",
    company: "Tsukiden Global Solutions Inc.",
    description: [
      "Full stack developer with a focus on WebGIS technologies to enchance data visualization capabilities. Responsibe for developing robust Python APIs for backend tasks. ",
      "Leverages Azure DevOps for efficient project management and CI/CD pipelines, ensuring seamless integration and delivery of software solutions.",
    ],
    technologies: [
      "AWS",
      "Azure",
      "Azure DevOps",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "MongoDB",
      "Python",
      "Docker",
      "Trivy",
      "C++",
      "C#",
    ],
  },
  {
    date: "2022",
    job: "Software Engineer Trainee",
    company: "Tsukiden Global Solutions Inc.",
    description: [
      "Focuses on front-end work, particularly with javascript and react. Involvement with WebGIS technologies involves bringing designs to life through enganging visualizations.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "C#",
      "ASP.NET MVC",
      ".NET Framework",
    ],
  },
  {
    date: "2021",
    job: "Internship ",
    company: "Indra Philippines",
    description: [
      "Assisted in creating and revising validation rules to ensure data accuracy and integrity.",
      "Testing and debugging through different edge cases, documented test cases and results to ensure software quality and reliability.",
    ],
    technologies: ["C#", "ASP.NET MVC", ".NET Framework", "JavaScript", "SQL"],
  },
];
