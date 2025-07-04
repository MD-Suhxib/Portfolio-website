import { BarChart3, Code, Brain, Cog } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: BarChart3,
      title: "Web Interfaces",
      description:
        "As a full-stack Enthuasist, I specialize in designing, coding, and maintaining websites and web apps. I work with languages like React, Necxt JS, Tailwind, and various backend technologies to create user-friendly and functional websites. I ensure that sites are responsive & optimized for performance.",
    },
    {
      icon: Code,
      title: "Data Analyst",
      description:
        "I have a keen interest in data analyzing, which involves inspecting, transforming, and modeling data to uncover valuable insights, draw conclusions, and support decision-making. ",
    },
    {
      icon: Brain,
      title: "AI & ML",
      description:
        "I'm passionate about AI/ML, developing algorithms for computers to learn from data and perform tasks like human intelligence. I explore neural networks, deep learning, and natural language processing to solve complex problems and enhance decision-making.",
    },
    {
      icon: Cog,
      title: "Automation",
      description:
        "I design intelligent systems for streamlined processes. My focus is on developing solutions that enhance efficiency and minimize manual intervention. I have worked with Micro-Controllers like Arduino and Raspberry Pi which helps in creating amazing projects and user-friendly with sensors.",
    },
  ];

  return (
    <section id="services" className="py-20 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-flow-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              "What I Do"
            </span>
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-flow-up"
            style={{ animationDelay: '0.2s' }}
          >
            I'm a passionate AI-driven full-stack developer and a final-year Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. With hands-on experience in LLMs, data analysis, and real-world problem-solving, I create impactful and scalable digital solutions that blend cutting-edge AI with intuitive user interfaces.
            My strengths lie in building and managing full-stack projects, conducting data-driven analysis, designing intelligent systems, and delivering seamless user experiences. I enjoy working across the stack using tools like Python, React.js, Next.js, Firebase, and various AI APIs including OpenAI and Gemini.
            Whether it's developing AI-powered platforms, leading tech teams, or visualizing insights through data — I thrive on using technology to solve real-world problems. I'm always exploring new challenges to grow as a builder, innovator, and lifelong learner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/95 to-gray-50/95 border border-gray-200 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 group hover:transform hover:scale-105 rounded-lg shadow-lg animate-flow-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-black/80 leading-relaxed text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}