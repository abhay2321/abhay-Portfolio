import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-slate-800 to-gray-900 py-10 px-4 text-white">
      <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transform transition duration-500 hover:scale-[1.01]">
        <h1 className="text-4xl font-extrabold text-center text-white drop-shadow mb-6 tracking-wide">
          Abhay Chaurasia
        </h1>

        <div className="text-center text-sm text-gray-300 mb-8 space-y-1">
          <p>
            Email:{" "}
            <a
              href="mailto:abhaychaurasia122004@gmail.com"
              className="text-blue-400 hover:underline"
            >
              abhaychaurasia122004@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+919305505053"
              className="text-blue-400 hover:underline"
            >
              +91 9305505053
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/abhay-chaurasia-292a82255"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>{" "}
            |
            <a
              href="https://github.com/abhay2321"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>

        {/* Section Card */}
        <Section title="Skills">
          <ul className="list-disc pl-5 space-y-1 text-gray-200">
            <li>
              <strong>Languages:</strong> JavaScript, Java, C, TypeScript,
              Python, SQL, HTML, CSS
            </li>
            <li>
              <strong>Frontend:</strong> React.js, Next.js, Bootstrap, Tailwind
              CSS
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js, MongoDB, Firebase
            </li>
            <li>
              <strong>Tools:</strong> Git, VS Code, Webpack, Chrome DevTools
            </li>
            <li>
              <strong>Full Stack:</strong> MERN Stack, Auth, Razorpay
              Integration
            </li>
          </ul>
        </Section>

        <Section title="Projects">
          <Project
            title="E-Commerce Website"
            link="https://mern-e-commerce-front-end-chi.vercel.app/"
            items={[
              "MERN stack with Razorpay, cart & checkout.",
              "Built with React, Node.js, Tailwind, MongoDB.",
            ]}
          />
          <Project
            title="Real-time Collaborative Text Editor"
            link="https://github.com/abhay2321/abhay-chaurasia-wasserstoff-FrontEndInternTasks"
            items={[
              "Live editing with Firebase, Quill.js, Auth.",
              "Built with TypeScript, Tailwind.",
            ]}
          />
          <Project
            title="College Website"
            link="https://iet-collage-website-by-abhay.netlify.app/"
            repo="https://github.com/abhay2321/Collage-Website"
            items={[
              "Responsive UI, form integration (Web3form).",
              "Built using React + custom CSS.",
            ]}
          />
          <Project
            title="Portfolio Website"
            link="https://portfolio-of-abhay-mauve.vercel.app/"
            items={[
              "Animated, modern portfolio with React + Tailwind.",
              "Form submission & project showcase.",
            ]}
          />
        </Section>

        <Section title="Achievements & Certificates">
          <ul className="list-disc pl-5 space-y-1 text-gray-200">
            <li>Frontend Internship – IIT Kanpur</li>
            <li>Udemy & LinkedIn Learning – HTML, CSS, JS, Python, Java, AI</li>
            <li>Code Social Learn Tube – React.js, Node.js</li>
          </ul>
        </Section>

        {/* Education */}
        <Section title="Education">
          <div className="text-gray-200 space-y-1">
            <p className="font-medium text-white">
              Dr. Bhimrao Ambedkar University, Agra
            </p>
            <p>B.E. in Computer Science Engineering (2022–2026)</p>
            <p>Courses: DSA, CN, OS, DBMS</p>
            <p>
              <strong className="text-white">CGPA (Till 3rd Year):</strong>{" "}
              7.530
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Resume;

// ---------- Section Component ----------
interface SectionProps {
  title: string;
  children: React.ReactNode;
}
const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className="mb-10 bg-white/5 p-6 rounded-xl shadow-inner border border-white/10 hover:shadow-xl transition-shadow">
    <h2 className="text-xl font-semibold text-cyan-400 mb-3">{title}</h2>
    {children}
  </section>
);

// ---------- Project Component ----------
interface ProjectProps {
  title: string;
  link: string;
  repo?: string;
  items: string[];
}
const Project: React.FC<ProjectProps> = ({ title, link, repo, items }) => (
  <div className="mb-5">
    <h3 className="font-semibold text-lg text-white">
      {title} –
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline ml-1"
      >
        Live
      </a>
      {repo && (
        <>
          <span className="text-gray-300"> | </span>
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </>
      )}
    </h3>
    <ul className="list-disc pl-6 mt-1 text-gray-300 space-y-1">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);
