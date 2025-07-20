import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Code, Database, Server, Globe, Award, Calendar, ExternalLink, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation for "Python Developer"
    const timer = setTimeout(() => {
      setTitleVisible(true);
    }, 1000); // 1 second delay

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Python', icon: '🐍', category: 'Backend' },
    { name: 'Django', icon: '🎯', category: 'Backend' },
    { name: 'FastAPI', icon: '⚡', category: 'Backend' },
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'JavaScript', icon: '📜', category: 'Frontend' },
    { name: 'CSS', icon: '🎨', category: 'Frontend' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'Redis', icon: '🔴', category: 'Database' },
    { name: 'Git/GitHub', icon: '📦', category: 'Tools' },
    { name: 'AWS EC2', icon: '☁️', category: 'Cloud' },
    { name: 'JWT', icon: '🔐', category: 'Security' }
  ];

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Brototype, Kochi",
      period: "October 2024 – June 2025",
      type: "Internship",
      projects: [
        {
          name: "Uniform Shop eCommerce Application",
          technologies: ["Django", "React", "PostgreSQL", "AWS EC2", "Razorpay"],
          achievements: [
            "Developed RESTful APIs using Django REST Framework",
            "Implemented OAuth integration with Google authentication",
            "Built order management and payment processing features",
            "Deployed on AWS EC2 and Vercel for scalability"
          ]
        },
        {
          name: "Aetherium eLearning Platform",
          technologies: ["React", "FastAPI", "Celery", "Redis", "JWT"],
          achievements: [
            "Built full-stack platform with role-based access control",
            "Implemented separate dashboards for Students, Instructors, and Admins",
            "Integrated secure payment processing with Razorpay",
            "Used Celery and Redis for asynchronous task management"
          ]
        }
      ]
    },
    {
      title: "System Engineer",
      company: "Ebla Computer Consultancy, Kuwait",
      period: "October 2017 – September 2024",
      type: "Full-time",
      projects: [
        {
          name: "KNPC EDMS Implementation",
          technologies: ["Python", "IBM FileNet", "Business Analysis"],
          achievements: [
            "Mapped complex document lifecycle workflows in oil & gas industry",
            "Collaborated with stakeholders to translate requirements into technical solutions",
            "Implemented critical business logic for operational efficiency",
            "Used Python for data validation and migration processes"
          ]
        },
        {
          name: "KOC ECM Project",
          technologies: ["FileNet", "IBM Datacap", "WebSphere", "Postman"],
          achievements: [
            "Led data migration and analysis activities",
            "Executed rigorous application testing, formulated test cases, and flagged issues for prompt resolution.",
            "Crafted comprehensive reports and presentations",
            "Created comprehensive technical documentation"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-white to-stone-150 text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
              Niketh Dileep Kumar
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-amber-700 transition-colors font-medium ${
                    activeSection === item ? 'text-amber-700 border-b-2 border-amber-700' : 'text-stone-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-stone-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-stone-200">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize py-2 px-4 hover:bg-stone-100 rounded transition-colors font-medium text-stone-700"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 via-white/50 to-stone-200/30"></div>
        {/* Luxury geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-amber-400 rotate-45"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 border border-stone-400 rotate-12"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-amber-200 opacity-30 rounded-full"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* <div className="mb-8 relative">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center text-4xl font-bold shadow-xl border-4 border-white overflow-hidden relative">
  <span className="absolute text-amber-900">NDK</span>
  <img
    src="/images/niketh.jpg"
    alt="NDK"
    className="w-full h-full object-cover"
    onError={(e) => (e.target.style.display = 'none')}
  />
</div>

</div> */}

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-800 via-stone-700 to-amber-900 bg-clip-text text-transparent">
            Niketh Dileep Kumar
          </h1>
          
          {/* Animated Python Developer title */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <p className={`text-xl md:text-2xl font-semibold text-stone-700 transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {/* Python Developer & Business Analyst */}
              Python Developer
            </p>
          </div>
          
          <p className="text-lg text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building robust, scalable backend systems with a focus on translating complex business requirements into clean, maintainable code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="border-2 border-stone-300 hover:border-amber-600 hover:bg-amber-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 text-stone-700"
            >
              View My Work
            </button>
          </div>
        </div>
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-stone-500" />
        </div> */}
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-stone-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-amber-700">Professional Summary</h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                Python Developer with a solid foundation in business analysis and a strong focus on building robust, 
                scalable backend systems. Proficient in Python, Django, REST APIs, FastAPI, PostgreSQL, and experienced 
                in integrating front-end technologies like JavaScript and CSS.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Known for effectively translating complex business requirements into clean, maintainable code. 
                Passionate about writing efficient backend logic, improving application performance, and contributing 
                to collaborative, user-centric development environments.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/80 rounded-lg backdrop-blur-sm shadow-sm border border-stone-200">
                <Phone className="w-6 h-6 text-amber-600" />
                <span className="text-stone-700">+91 96331 34666</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/80 rounded-lg backdrop-blur-sm shadow-sm border border-stone-200">
                <Mail className="w-6 h-6 text-amber-600" />
                <span className="text-stone-700">nikethofficial@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/80 rounded-lg backdrop-blur-sm shadow-sm border border-stone-200">
                <MapPin className="w-6 h-6 text-amber-600" />
                <span className="text-stone-700">Kerala, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="p-6 bg-white/80 rounded-lg backdrop-blur-sm border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-stone-800 mb-1">{skill.name}</h3>
                <p className="text-sm text-stone-500">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-stone-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-white/80 rounded-lg p-8 backdrop-blur-sm border border-stone-200 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-amber-700 mb-2">{exp.title}</h3>
                      <p className="text-xl text-stone-700">{exp.company}</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm mb-2 font-medium">
                        {exp.type}
                      </span>
                      <p className="text-stone-500 flex items-center gap-2 justify-end">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    {exp.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="border-l-2 border-amber-300 pl-6">
                        <h4 className="text-lg font-semibold text-stone-800 mb-3">{project.name}</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-stone-600 flex items-start gap-2">
                              <span className="text-amber-600 mt-2 font-bold">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 rounded-lg p-8 backdrop-blur-sm border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-stone-800">Uniform Shop eCommerce</h3>
                <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-amber-600 transition-colors" />
              </div>
              <p className="text-stone-600 mb-4">
                Full-featured eCommerce application with user authentication, order management, and payment processing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Django', 'React', 'PostgreSQL', 'AWS EC2', 'Razorpay'].map((tech) => (
                  <span key={tech} className="bg-amber-50 text-amber-800 px-2 py-1 rounded text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="text-stone-500 text-sm space-y-1">
                <li>• RESTful API development</li>
                <li>• OAuth integration</li>
                <li>• Payment gateway integration</li>
                <li>• Cloud deployment</li>
              </ul>
            </div>

            <div className="bg-white/80 rounded-lg p-8 backdrop-blur-sm border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-stone-800">Aetherium eLearning Platform</h3>
                <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-amber-600 transition-colors" />
              </div>
              <p className="text-stone-600 mb-4">
                Comprehensive learning management system with role-based access and secure payment processing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'FastAPI', 'Celery', 'Redis', 'JWT'].map((tech) => (
                  <span key={tech} className="bg-amber-50 text-amber-800 px-2 py-1 rounded text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="text-stone-500 text-sm space-y-1">
                <li>• Role-based access control</li>
                <li>• Asynchronous task processing</li>
                <li>• Secure authentication</li>
                <li>• Multi-dashboard system</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-stone-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-amber-700 mb-6">Education</h3>
              
              <div className="bg-white/80 rounded-lg p-6 backdrop-blur-sm border border-stone-200 shadow-sm">
                <h4 className="font-semibold text-stone-800 mb-2">Data Science and Business Analytics</h4>
                <p className="text-amber-700 mb-2 font-medium">University of Texas at Austin</p>
                <p className="text-stone-500 text-sm">2022–2023</p>
              </div>

              <div className="bg-white/80 rounded-lg p-6 backdrop-blur-sm border border-stone-200 shadow-sm">
                <h4 className="font-semibold text-stone-800 mb-2">Bachelor of Engineering (B.E.)</h4>
                <p className="text-amber-700 mb-2 font-medium">Anna University, Tamil Nadu</p>
                <p className="text-stone-600 text-sm mb-2">Aeronautical Engineering</p>
                <p className="text-stone-500 text-sm">2011–2015</p>
              </div>

              <div className="bg-white/80 rounded-lg p-6 backdrop-blur-sm border border-stone-200 shadow-sm">
                <h4 className="font-semibold text-stone-800 mb-2">Higher Secondary Education (HSE)</h4>
                <p className="text-amber-700 mb-2 font-medium">Chinmaya Vidyalaya, Kerala</p>
                <p className="text-stone-600 text-sm mb-2">Computer Science-Mathematics</p>
                <p className="text-stone-500 text-sm">2009–2011</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-amber-700 mb-6">Certifications</h3>
              
              <div className="space-y-4">
                <div className="bg-white/80 rounded-lg p-6 backdrop-blur-sm border border-stone-200 shadow-sm">
                  <div className="flex items-center gap-4">
                    <Award className="w-8 h-8 text-amber-500" />
                    <div>
                      <h4 className="font-semibold text-stone-800">CCNA (Cisco Certified Network Associate)</h4>
                      <p className="text-stone-500 text-sm">Network Infrastructure & Security</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 rounded-lg p-6 backdrop-blur-sm border border-stone-200 shadow-sm">
                  <div className="flex items-center gap-4">
                    <Award className="w-8 h-8 text-amber-500" />
                    <div>
                      <h4 className="font-semibold text-stone-800">MCSE (Microsoft Certified Systems Engineer)</h4>
                      <p className="text-stone-500 text-sm">Microsoft Server Technologies</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-stone-50 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-700 mb-3">Continuous Learning</h4>
                <p className="text-stone-600 text-sm">
                  Committed to staying updated with the latest technologies and best practices in software development, 
                  cloud computing, and system engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-amber-700 to-stone-700 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-stone-600 mb-12">
            Ready to bring your ideas to life? I'm always interested in discussing new opportunities and challenging projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <a
              href="mailto:nikethofficial@gmail.com"
              className="flex items-center gap-3 bg-white/80 hover:bg-white hover:shadow-lg px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-stone-200"
            >
              <Mail className="w-6 h-6 text-amber-600" />
              <span className="text-stone-700">nikethofficial@gmail.com</span>
            </a>
            <a
              href="tel:+919633134666"
              className="flex items-center gap-3 bg-white/80 hover:bg-white hover:shadow-lg px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-stone-200"
            >
              <Phone className="w-6 h-6 text-amber-600" />
              <span className="text-stone-700">+91 96331 34666</span>
            </a>
          </div>

          <div className="flex justify-center gap-6">
  <a
    href="https://github.com/NikethNDK"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-stone-200 hover:shadow-lg"
  >
    <Github className="w-6 h-6 text-stone-500 group-hover:text-stone-800" />
  </a>
  <a
    href="https://www.linkedin.com/in/nikethdileepkumar/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-stone-200 hover:shadow-lg"
  >
    <Linkedin className="w-6 h-6 text-stone-500 group-hover:text-amber-600" />
  </a>
</div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-stone-100 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-stone-500">
            © 2025 Niketh Dileep Kumar
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;