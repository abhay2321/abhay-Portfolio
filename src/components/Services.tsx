
const Services = () => {
  const services = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with modern design principles and user-centered approach.",
      features: ["Responsive Design", "User Research", "Prototyping", "Design Systems"]
    },
    {
      icon: "⚡",
      title: "Frontend Development",
      description: "Building fast, interactive, and responsive web applications using cutting-edge frontend technologies.",
      features: ["React & TypeScript", "TailwindCSS", "Performance Optimization", "Modern JavaScript"]
    },
    {
      icon: "🔧",
      title: "Backend Development",
      description: "Developing robust server-side applications with secure APIs and efficient database management.",
      features: ["Node.js & Express", "Database Design", "API Development", "Authentication"]
    },
    {
      icon: "🚀",
      title: "Full Stack Solutions",
      description: "Complete end-to-end web development from beautiful UI/UX to scalable backend infrastructure.",
      features: ["MERN Stack", "Database Integration", "Deployment", "Maintenance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to start your project?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's discuss how I can help bring your vision to life with modern web technologies.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
