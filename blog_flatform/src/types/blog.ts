export interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  thumbnail: string;
  date: string;
  author: Author;
  category: "React" | "Next.js" | "CSS" | "Tailwind" | "JavaScript" | "TypeScript" | "Web Development" | "Programming" | "Tech" | "Python" | "Django" | "Flask" | "Data Science" | "Machine Learning" | "AI" | "DevOps" | "Cloud Computing" | "Mobile Development" | "UI/UX Design" | "Cybersecurity" | "Blockchain" | "Game Development" | "Other";
  tags?: string[];
}

export interface Author {
  name: string;
  avatar: string;
  role: string;
}