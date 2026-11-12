import { education, experience, interests, profile, projects, skills } from './data'

const navigation = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['education', 'Education'],
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.5 10h11m-4.5-4.5L15.5 10 11 14.5" />
    </svg>
  )
}

function SectionHeading({ eyebrow, children, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{children}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="Dinesh Kumar, home">
          <span className="brand-mark">DK</span>
          <span>Dinesh Kumar</span>
        </a>
        <nav aria-label="Main navigation">
          {navigation.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact">Contact <ArrowIcon /></a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Software developer · Indore, India</p>
          <h1>Building thoughtful<br /><span>web experiences.</span></h1>
          <p className="hero-lead">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowIcon /></a>
          </div>
          <div className="hero-facts" aria-label="Career highlights">
            <div><strong>4+</strong><span>Years building software</span></div>
            <div><strong>10+</strong><span>Projects delivered</span></div>
            <div><strong>3</strong><span>Organizations</span></div>
          </div>
        </div>
        <aside className="intro-card" aria-label="Professional profile">
          <div className="card-topline"><span>PROFILE</span><span>01 / 01</span></div>
          <div className="avatar" aria-hidden="true">DK<span>.</span></div>
          <p className="card-label">FULL-STACK DEVELOPER</p>
          <h2>Dinesh Kumar</h2>
          <p className="card-summary">Turning complex requirements into dependable web applications and APIs.</p>
          <div className="card-divider" />
          <div className="profile-detail"><span>Based in</span><strong>Indore, Madhya Pradesh</strong></div>
          <div className="profile-detail"><span>Focus</span><strong>Web apps · APIs · AWS</strong></div>
          <a className="card-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowIcon /></a>
          <a className="card-email profile-linkedin" href={profile.linkedIn} target="_blank" rel="noreferrer">
            LinkedIn profile <ArrowIcon />
          </a>
          <a className="card-email profile-linkedin" href={profile.github} target="_blank" rel="noreferrer">
            GitHub profile <ArrowIcon />
          </a>
        </aside>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading eyebrow="WHAT I WORK WITH" description="A practical toolkit for taking web products from interface to infrastructure.">
          Skills & technologies
        </SectionHeading>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map(item => <span className="tag" key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section section-muted" id="experience">
      <div className="container">
        <SectionHeading eyebrow="THE JOURNEY" description="Career progression across three development roles in Indore since 2021.">
          Work experience
        </SectionHeading>
        <div className="experience-list">
          {experience.map((job, index) => (
            <article className={`experience-card${job.current ? ' is-current' : ''}`} key={job.company}>
              <span className="experience-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className="experience-details">
                <div className="experience-meta">
                  <p className="experience-period">{job.period}</p>
                  {job.current && <span className="current-badge">Current</span>}
                </div>
                <h3>{job.title}</h3>
                <p className="experience-company">{job.company}</p>
                <ul className="experience-highlights">
                  {job.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
              <span className="experience-location">{job.location}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading eyebrow="SELECTED WORK" description="A selection of platforms and products I’ve helped design, build, and ship.">
          Major projects
        </SectionHeading>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className={`project-card${index === 0 ? ' project-featured' : ''}${project.description ? ' has-description' : ''}`} key={project.name}>
              <div className="project-topline">
                <span className="project-number">0{index + 1}</span>
                <span className="project-type">{project.type}</span>
              </div>
              <h3>{project.name}</h3>
              <p className="project-stack">{project.stack}</p>
              {project.description && <p className="project-description">{project.description}</p>}
              <ul>
                {project.points.map(point => <li key={point}>{point}</li>)}
              </ul>
              {project.url && (
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                  Visit website <ArrowIcon />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="section section-muted" id="education">
      <div className="container">
        <SectionHeading eyebrow="LEARNING & GROWTH">Education</SectionHeading>
        <div className="education-grid">
          {education.map(item => (
            <article className="education-card" key={item.title}>
              <span className="education-period">{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
              {item.grade && <span className="education-grade">{item.grade}</span>}
            </article>
          ))}
        </div>
        <div className="interests">
          <span>Outside of work</span>
          <p>{interests.join(' · ')}</p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>Let’s build something<br /><span>good together.</span></h2>
          <p className="contact-copy">I’m open to new opportunities and interesting projects. Feel free to get in touch.</p>
        </div>
        <div className="contact-links">
          <a className="contact-link" href={`mailto:${profile.email}`}>
            <span>Email me</span><strong>{profile.email}</strong><ArrowIcon />
          </a>
          <a className="contact-link" href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>
            <span>Call me</span><strong>{profile.phone}</strong><ArrowIcon />
          </a>
          <a className="contact-link" href={profile.linkedIn} target="_blank" rel="noreferrer">
            <span>LinkedIn</span><strong>Connect with me</strong><ArrowIcon />
          </a>
          <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
            <span>GitHub</span><strong>View my projects</strong><ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Dinesh Kumar</span>
          <span>Designed & built with care</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}
