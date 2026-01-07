import type { Post } from "@/types/blog";

const AVATAR_URL = "/avatar/avatar.jpg";

const MOCK_POSTS: Post[] = [
  {
    id: "1",
    title: "A Complete Guide to Learning React in 2026",
    description: "Welcome to the ultimate guide for beginners to start their React journey effectively.",
    content: `
# Learning React in 2026

React is one of the most popular JavaScript libraries today for building user interfaces. 

### Why learn React?
- **Component-based:** Makes code reusable and manageable.
- **Large community:** Easy to find support and supplementary libraries (like Shadcn UI).
- **Job opportunities:** High demand for React developers.

#### Example of a simple Component:
\`\`\`jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}
\`\`\`

> "Start with the smallest things, and you will build great things."
    `,
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    date: "2026-01-05",
    category: "React",
    author: {
      name: "sungp2708",
      avatar: AVATAR_URL,
      role: "author"
    }
  },
  {
    id: "2",
    title: "The Power of Tailwind CSS v4",
    description: "Discover the latest features of Tailwind v4 and how it changes the way we write CSS.",
    content: `
# What's new in Tailwind CSS v4?

Version 4 brings ultra-fast build speeds and minimalist configuration directly in the CSS file.

### Notable changes:
1. **New engine:** Superior performance.
2. **Zero-config:** Automatic file detection.
3. **CSS-first:** Configure everything in the CSS file instead of JS.

You can easily create modern interfaces with just a few simple classes.
    `,
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
    date: "2026-01-07",
    category: "Tailwind",
    author: {
      name: "sungp2708",
      avatar: AVATAR_URL,
      role: "author"
    }
  },
  {
    id: "3",
    title: "Getting Started with Next.js 14",
    description: "Learn how to build fast and scalable web applications using Next.js 14.",
    content: `
# Next.js 14 Overview
Next.js 14 introduces several new features that enhance developer experience and application performance.
### Key Features:
- **Improved Routing:** New file-based routing system.
- **Enhanced SSR:** Better server-side rendering capabilities.
- **Built-in Analytics:** Monitor performance out of the box.
Here's a simple example of a Next.js page:
\`\`\`jsx
import React from 'react';
export default function HomePage() {
  return <div>Welcome to Next.js 14!</div>;
}
\`\`\`
    `,
    thumbnail: "https://images.viblo.asia/171ffa2b-6b95-4ec8-838e-f8d8eedbd229.png",
    date: "2026-01-10",
    category: "Next.js",
    author: {
      name: "sungp2708",
      avatar: AVATAR_URL,
      role: "author"
    }
  },
  {
    id: "4",
    title: "JavaScript ES2026: New Features to Look Out For",
    description: "An overview of the upcoming features in JavaScript ES2026 that will enhance your coding experience.",
    content: `
# JavaScript ES2026 Features
JavaScript ES2026 is set to introduce several exciting features that will make coding more efficient and enjoyable.
### Highlights:
- **Pattern Matching:** Simplifies complex conditional logic.
- **Temporal API:** New date and time handling.
- **Improved Modules:** Better support for modular programming.
Here's an example of pattern matching:
\`\`\`javascript
const result = match(value) {
  case { type: 'A' }: // handle type A
  case { type: 'B' }: // handle type B
};
\`\`\`
    `,
    thumbnail: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2026-01-12",
    category: "JavaScript",
    author: {
      name: "sungp2708",
      avatar: AVATAR_URL,
      role: "author"
    }
  },
  {
    id: "5",
    title: "Building Responsive UIs with CSS Grid and Flexbox",
    description: "Learn how to create responsive web designs using CSS Grid and Flexbox techniques.",
    content: `
# Responsive UIs with CSS Grid and Flexbox
Creating responsive user interfaces is crucial in modern web development. CSS Grid and Flexbox are powerful tools that help achieve this.
### CSS Grid Example:
\`\`\`css
.container {
  display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
}
\`\`\`

### Flexbox Example:
\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
    align-items: center;
}
\`\`\`
    `,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    date: "2026-01-15",
    category: "CSS",
    author: {
      name: "sungp2708",
      avatar: AVATAR_URL,
      role: "author"
    }
  },
  {
    id: "6",
    title: "TypeScript Tips and Tricks for 2026",
    description: "Enhance your TypeScript skills with these tips and tricks for better code quality and maintainability.",
    content: `
# TypeScript Tips for 2026
TypeScript continues to evolve, bringing new features that help developers write safer and more maintainable code.
### Tips:
1. **Use Utility Types:** Leverage built-in utility types like Partial, Readonly, and Record.
2. **Strict Null Checks:** Always enable strict null checks to avoid runtime errors.
3. **Type Guards:** Use type guards to refine types in conditional blocks.
\`\`\`typescript
function isString(value: any): value is string {
    return typeof value === 'string';
}
\`\`\`
    `,
    thumbnail: "https://images.unsplash.com/photo-1699885960867-56d5f5262d38?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2026-01-20",
    category: "TypeScript",
    author: {
      name: "sungp2708",
      avatar: AVATAR_URL,
      role: "author"
    }
  },
  /*Python cate*/
  {
    id: "7",
    title: "Data Science with Python: An Introduction",
    description: "Explore the fundamentals of data science using Python and its powerful libraries.",
    content: `
# Data Science with Python
Python is a leading language in data science due to its simplicity and the vast array of libraries available.
### Key Libraries:
- **Pandas:** Data manipulation and analysis.
- **NumPy:** Numerical computing.
- **Matplotlib:** Data visualization.
Here's a simple example of using Pandas:
\`\`\`python
import pandas as pd
data = pd.read_csv('data.csv')
print(data.head())
\`\`\`
    `,
    thumbnail: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2026-01-25",
    category: "Python",
    author: {
      name: "sungp2708",
      avatar: AVATAR_URL,
      role: "author"
    }
  },
  {
    id: "8",
    title: "Building Web Applications with Django",
    description: "Learn how to create robust web applications using the Django framework.",
    content: `
# Web Applications with Django
Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.
### Getting Started:
\`\`\`python
pip install django
django-admin startproject mysite
cd mysite
python manage.py runserver
\`\`\`
This will set up a basic Django project and start the development server.
    `,
    thumbnail: "https://interdata.vn/blog/wp-content/uploads/2025/07/Framework-Django.jpg",
    date: "2026-01-30",
    category: "Django",
    author: {
      name: "sungp2708",
      avatar: AVATAR_URL,
      role: "author"
    }
  },
    {
    id: "9",
    title: "Getting Started with Flask for Web Development",
    description: "A beginner's guide to building web applications using the Flask micro-framework.",
    content: `
# Getting Started with Flask
Flask is a lightweight WSGI web application framework in Python. It is designed to make getting started quick and easy.
];
### Basic Example:
\`\`\`python
from flask import Flask
app = Flask(__name__)
@app.route("/")
def home():
    return "Hello, Flask!"
if __name__ == "__main__":
    app.run(debug=True)
\`\`\`
This code sets up a simple web server that responds with "Hello, Flask!" when accessed.
    `,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUNUbZtZ5yWxWb7SPe82hFIve1AirK5aBQpw&s",
    date: "2026-02-05",
    category: "Flask",
    author: {
      name: "sungp2708",
      avatar: AVATAR_URL,
      role: "author"
    }
  },
  {
    id: "10",
    title: "Machine Learning Basics with Scikit-Learn",
    description: "An introduction to machine learning concepts using the Scikit-Learn library in Python.",
    content: `
# Machine Learning with Scikit-Learn
Scikit-Learn is a powerful library for machine learning in Python, providing simple and efficient tools for data mining and analysis.
### Simple Example:
\`\`\`python
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
iris = datasets.load_iris()
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.2)
clf = RandomForestClassifier()
clf.fit(X_train, y_train)
print(clf.score(X_test, y_test))
\`\`\`
This code loads the Iris dataset, splits it into training and testing sets, trains a Random Forest classifier, and evaluates its accuracy.
    `,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNsNsCUnCK9dU4ADTVmRc0fs0KpHJwWFNJjQ&s",
    date: "2026-02-10",
    category: "Data Science",
    author: {
      name: "sungp2708",
      avatar: AVATAR_URL,
      role: "author"
    }
  },
    {
    id: "11",
    title: "An Overview of Cloud Computing in 2026",
    description: "Understand the fundamentals of cloud computing and its impact on modern technology.",
    content: `
# Cloud Computing in 2026
Cloud computing has revolutionized the way we store, manage, and process data. It offers scalable resources and services over the internet.
### Key Concepts:
- **IaaS, PaaS, SaaS:** Different service models.
- **Public, Private, Hybrid Clouds:** Deployment models.
- **Benefits:** Scalability, cost-efficiency, and flexibility.
    `,
    thumbnail: "https://blog.nashtechglobal.com/wp-content/uploads/2024/01/1_ngkHgQq7ij1NBNr62er3zA.png",
    date: "2026-02-15",
    category: "Tech",
    author: {
      name: "sungp2708",
      avatar: AVATAR_URL,
      role: "author"
    }
  },
    {
    id: "12",
    title: "AI and Machine Learning Trends in 2026",
    description: "Explore the latest trends and advancements in AI and machine learning for the year 2026.",
    content: `
# AI and Machine Learning Trends in 2026
Artificial Intelligence (AI) and Machine Learning (ML) continue to evolve rapidly, impacting various industries and technologies.
### Emerging Trends:
- **Explainable AI:** Making AI decisions more transparent.
- **Edge AI:** Processing data closer to the source.
- **AI Ethics:** Addressing ethical concerns in AI development.
    `,
    thumbnail: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2026-02-20",
    category: "AI",
    author: {
      name: "sungp2708",
      avatar: AVATAR_URL,
      role: "author"
    }
  },
  {
    id: "13",
    title: "Deploying Applications with Docker and Kubernetes",
    description: "Learn how to containerize and deploy applications using Docker and Kubernetes.",
    content: `
# Deploying with Docker and Kubernetes
Docker and Kubernetes are powerful tools for containerization and orchestration of applications.
### Basic Dockerfile Example:
\`\`\`dockerfile
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]
\`\`\`

### Basic Kubernetes Deployment Example:
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
    name: my-app
spec:
    replicas: 3
    selector:
        matchLabels:
            app: my-app
    template:
        metadata:
            labels:
                app: my-app
        spec:
            containers:
            - name: my-app
              image: my-app-image:latest
              ports:
                - containerPort: 80
\`\`\`
    `,
    thumbnail: "https://images.viblo.asia/fad7cf1a-772f-43e4-9042-e96d5d903b2b.png",
    date: "2026-02-25",
    category: "DevOps",
    author: {
      name: "sungp2708",
      avatar: AVATAR_URL,
      role: "author"
    }
  }
];

export const getAllPosts = (): Post[] => {
  return MOCK_POSTS;
};

export const getPostById = (id: string | undefined): Post | undefined => {
  if (!id) return undefined;
  return MOCK_POSTS.find((post) => post.id === id);
};

export const getRelatedPosts = (currentId: string, category: string): Post[] => {
  return MOCK_POSTS.filter(
    (post) => post.category === category && post.id !== currentId
  ).slice(0, 3);
};