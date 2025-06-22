
const About = () => {
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "TypeScript", level: 82 },
    { name: "MongoDB", level: 80 },
    { name: "TailwindCSS", level: 92 },
    { name: "Python", level: 75 },
    { name: "Java", level: 70 },
    { name: "UI/UX Design", level: 85 }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a final-year <span className="text-blue-400 font-semibold">B.Tech Computer Science Engineering</span> student at the 
              <span className="text-purple-400 font-semibold"> Institute of Engineering and Technology, Khandari Agra</span>, 
              graduating in 2026.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in <span className="text-blue-400 font-semibold">full stack web development</span> and love solving complex problems 
              through clean code and smart architecture. My passion lies in creating seamless user experiences with modern technologies.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {["MERN Stack", "TypeScript", "UI/UX", "DSA", "Problem Solving"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
