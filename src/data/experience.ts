import type { ExperienceContent } from "@/data/types";

export const experience: ExperienceContent = {
  summary:
    "Backend-focused software engineer working on APIs, data-intensive services, and AWS-based systems. The entries below are editable profile content and can be corrected or expanded at any time.",
  roles: [
    {
      id: "keyvalue",
      company: "Keyvalue Software Systems Pvt. Ltd.",
      role: "Software Engineer",
      period: "July 2022 – Present",
      location: "Kochi, India",
      description:
        "Building and maintaining backend services and APIs for fintech and data-intensive platforms using Go, Python, PostgreSQL, Elasticsearch, and AWS.",
      responsibilities: [
        "Design and maintain backend services and REST APIs.",
        "Work with PostgreSQL and Elasticsearch on data-intensive features.",
        "Collaborate on AWS-based infrastructure for service deployment.",
        "Improve reliability of request paths and background workflows.",
      ],
      technologies: [
        "Go",
        "Python",
        "PostgreSQL",
        "Elasticsearch",
        "AWS",
      ],
    },
    {
      id: "revertech",
      company: "ReverTech IT Solutions Pvt. Ltd.",
      role: "Product Development Intern",
      period: "July 2021 – December 2021",
      description:
        "Contributed to a chat application using React and Python Flask and collaborated with a small development team.",
      responsibilities: [
        "Implemented product features on a small engineering team.",
        "Worked across a React client and a Python Flask backend.",
        "Participated in reviews and day-to-day development discussions.",
      ],
      technologies: ["React", "Python", "Flask"],
    },
  ],
  education: [
    {
      id: "mace",
      degree: "B.Tech (Honors), Computer Science and Engineering",
      school: "Mar Athanasius College of Engineering",
      period: "January 2018 – January 2022",
      detail: "GPA: 9.26",
    },
  ],
  certifications: [
    { id: "aws-cp", title: "AWS Cloud Practitioner" },
    { id: "k8s", title: "Kubernetes Fundamentals" },
    {
      id: "rest-apis",
      title: "RESTful API Development with Go and Python",
    },
    { id: "cicd", title: "CI/CD with Git-based workflows" },
  ],
};
