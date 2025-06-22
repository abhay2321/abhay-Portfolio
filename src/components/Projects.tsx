
import { ProjectCard3D } from "./ProjectCard3D";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured MERN stack shopping platform with user authentication, product management, and Razorpay payment integration.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      title: "Real-Time Collaborative Text Editor",
      description: "A Quill.js-powered text editor with real-time collaboration capabilities using Firebase and TypeScript for seamless team productivity.",
      tech: ["TypeScript", "Firebase", "Quill.js", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      title: "College Website",
      description: "A responsive, multi-page institutional website built with React, featuring smooth scrolling and secure form submissions via Web3form.",
      tech: ["React", "HTML/CSS", "react-scroll", "Web3form"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      demo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Subtle 3D background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development and modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="transform hover:scale-105 transition-transform duration-300">
              <ProjectCard3D {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
