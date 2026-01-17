import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolling, setIsScrolling] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      setTimeout(() => setIsScrolling(false), 150)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Navigation */}
      <nav className={`navbar ${isScrolling ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <span className="logo-text">NP</span>
          </div>
          <ul className="nav-menu">
            <li><a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
            >Home</a></li>
            <li><a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
            >About</a></li>
            <li><a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}
            >Skills</a></li>
            <li><a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}
            >Projects</a></li>
            <li><a 
              href="#education" 
              className={activeSection === 'education' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('education') }}
            >Education</a></li>
            <li><a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
            >Contact</a></li>
          </ul>
          <div className="theme-toggle-container">
            <span className="theme-icon sun-icon">☀️</span>
            <label className="theme-switch" aria-label="Toggle theme">
              <input type="checkbox" checked={!isDarkMode} onChange={toggleTheme} />
              <span className="slider"></span>
            </label>
            <span className="theme-icon moon-icon">🌙</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hello, I'm</span>
              <span className="name">Niraj Ashokbhai Patel</span>
            </h1>
            <p className="hero-subtitle">Gold Medallist | Python Developer | Aspiring ML Engineer</p>
            <p className="hero-description">
              A motivated fresh graduate with strong interest in Python-based development, 
              beginner-level experience in Flask, and foundational knowledge of Machine Learning concepts.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('projects')}>
                View Projects
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-icon">NP</div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Gold Medallist in Bachelor of Computer Applications (BCA) with the highest CGPA in the University. 
                I am a passionate developer with a strong foundation in programming and a keen interest in 
                exploring cutting-edge technologies.
              </p>
              <p>
                Proficient in Java, Python, SQL, and JavaScript, I am eager to apply my technical skills to 
                real-world projects and grow through industry mentorship. My journey includes building 
                full-stack applications, working with databases, and diving into the exciting world of 
                Machine Learning.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <div className="stat-number">9.93</div>
                  <div className="stat-label">CGPA</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">Gold</div>
                  <div className="stat-label">Medalist</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-content">
            <div className="skills-category">
              <h3 className="category-title">Technical Skills</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">💻</div>
                  <h4>Programming Languages</h4>
                  <p>Python, Java, C, C++</p>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🌐</div>
                  <h4>Web Development</h4>
                  <p>HTML5, CSS3, JavaScript</p>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🗄️</div>
                  <h4>Databases</h4>
                  <p>MySQL, MongoDB</p>
                </div>
              </div>
            </div>
            <div className="skills-category">
              <h3 className="category-title">Learning & Exploration</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">📊</div>
                  <h4>Data Science</h4>
                  <p>NumPy, Pandas (Beginner)</p>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🤖</div>
                  <h4>Machine Learning</h4>
                  <p>Scikit-learn (Beginner)</p>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">⚡</div>
                  <h4>Web Framework</h4>
                  <p>Flask (Beginner)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>Vintage Vision</h3>
                <span className="project-tag">E-commerce</span>
              </div>
              <p className="project-tech">PHP, MySQL, HTML5, CSS3, JavaScript</p>
              <p className="project-description">
                Designed and developed a complete online antique store with Admin and User modules. 
                Implemented secure authentication, product management, purchase workflows, and responsive UI. 
                Improved usability and data handling through structured database integration.
              </p>
              <ul className="project-features">
                <li>Secure authentication system</li>
                <li>Product management</li>
                <li>Purchase workflows</li>
                <li>Responsive UI design</li>
              </ul>
              <div className="project-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github-link">
                  <span>🔗</span> View on GitHub
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Fatecare Health</h3>
                <span className="project-tag">Desktop App</span>
              </div>
              <p className="project-tech">VB.NET, SQL Server 2008</p>
              <p className="project-description">
                Developed a multi-module desktop application for hospital operations including patient 
                registration, appointment scheduling, billing, and role-based access. Streamlined hospital 
                operations by centralizing data and automating core workflows.
              </p>
              <ul className="project-features">
                <li>Patient registration system</li>
                <li>Appointment scheduling</li>
                <li>Billing management</li>
                <li>Role-based access control</li>
              </ul>
              <div className="project-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github-link">
                  <span>🔗</span> View on GitHub
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Stellar Horizons</h3>
                <span className="project-tag">Web Application</span>
              </div>
              <p className="project-tech">ASP.NET, Microsoft SQL Server 2008</p>
              <p className="project-description">
                Built a full-scale academic management system with student records, fees, complaints, 
                and announcements. Enhanced administrative efficiency through structured reporting and 
                centralized data access.
              </p>
              <ul className="project-features">
                <li>Student records management</li>
                <li>Fee management system</li>
                <li>Complaint handling</li>
                <li>Announcement system</li>
              </ul>
              <div className="project-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github-link">
                  <span>🔗</span> View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education & Achievements</h2>
          <div className="education-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Bachelor of Computer Application (BCA)</h3>
                  <span className="timeline-date">June 2022 – April 2025</span>
                </div>
                <p className="timeline-institution">CVM University - Natubhai V. Patel College of Pure and Applied Sciences</p>
                <p className="timeline-location">Anand, India</p>
                <div className="timeline-achievements">
                  <span className="achievement-badge gold">CGPA: 9.93/10 (94.30%)</span>
                  <span className="achievement-badge gold">Gold Medalist – Highest CGPA in BCA</span>
                </div>
              </div>
            </div>

            {/*<div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Class XII</h3>
                  <span className="timeline-date">June 2020 – May 2021</span>
                </div>
                <p className="timeline-institution">Sarwa Mangal School</p>
                <p className="timeline-location">Anand, India</p>
                <p className="timeline-grade">Percentage: 75.57/100</p>
              </div>
            </div>/*}

            {/*<div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Class X</h3>
                  <span className="timeline-date">June 2018 – April 2019</span>
                </div>
                <p className="timeline-institution">Jay Ambe Vidyalaya</p>
                <p className="timeline-location">Vadodara, India</p>
                <p className="timeline-grade">Percentage: 77.16/100</p>
              </div>
            </div>*/}
          </div>

          <div className="certifications-section">
            <h3 className="certifications-title">Certifications & Achievements</h3>
            <div className="certifications-grid">
              <div className="cert-card">
                <div className="cert-icon">🎓</div>
                <h4>C, C++, Data Structures</h4>
                <p>Rajesh Patkar Institute of Software Engineering</p>
                <span className="cert-date">Nov 2021 – Feb 2022</span>
              </div>
              <div className="cert-card">
                <div className="cert-icon">☕</div>
                <h4>Java Technology</h4>
                <p>Rajesh Patkar Institute of Software Engineering</p>
                <span className="cert-date">Jul 2023 – Jan 2024</span>
              </div>
              <div className="cert-card">
                <div className="cert-icon">🗄️</div>
                <h4>The Ultimate MySQL Crash Course 2023</h4>
                <p>Udemy</p>
                <span className="cert-date">Jan 2023</span>
              </div>
              <div className="cert-card">
                <div className="cert-icon">🤖</div>
                <h4>Introduction to Artificial Intelligence (AI)</h4>
                <p>Coursera</p>
                <span className="cert-date">Jan 2025</span>
              </div>
              <div className="cert-card">
                <div className="cert-icon">🏆</div>
                <h4>Brain Tech 2024</h4>
                <p>Certificate of Eminence - Inter-college level</p>
                <span className="cert-date">2024</span>
              </div>
              <div className="cert-card">
                <div className="cert-icon">🎨</div>
                <h4>Web Page Designing Competition</h4>
                <p>Certificate of Excellence - 2nd Place</p>
                <span className="cert-date">College Event</span>
              </div>
              <div className="cert-card">
                <div className="cert-icon">🤖</div>
                <h4>STEAM Robotics Master Training</h4>
                <p>Knowledge Consortium of Gujarat</p>
                <span className="cert-date">Teerth Scheme</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p className="contact-description">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about technology and development.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Location</h4>
                    <p>Vadodara, India</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:patelniraj2710@gmail.com">patelniraj2710@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+916359646609">+91 6359646609</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">💼</div>
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Niraj Ashokbhai Patel. All rights reserved.</p>
          <p className="footer-note">Built with React & Vite</p>
        </div>
      </footer>
    </div>
  )
}

export default App
