const roots = {
  skills: document.getElementById('skills-root'),
  aboutLinks: document.getElementById('about-links-root'),
  projects: document.getElementById('projects-root'),
  certifications: document.getElementById('certifications-root'),
  contacts: document.getElementById('contact-links-root')
};

const openInNewTab = (href) => href && href !== '#';

function SkillsList() {
  return (
    <>
      {window.portfolioData.skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </>
  );
}

function AboutLinks() {
  return (
    <>
      {window.portfolioData.aboutLinks.map((link) => (
        <a className="cert-badge" href={link.href} target="_blank" rel="noreferrer" key={link.label}>
          <i className={link.iconClass}></i> {link.label}
        </a>
      ))}
    </>
  );
}

function ProjectsGrid() {
  return (
    <>
      {window.portfolioData.projects.map((project) => (
        <div className="project-card" key={project.title}>
          <div className="project-top">
            <div className="project-icon-wrap"><i className={project.iconClass}></i></div>
            <div className="project-links">
              <a
                href={project.href}
                title="View project"
                target={openInNewTab(project.href) ? '_blank' : undefined}
                rel={openInNewTab(project.href) ? 'noreferrer' : undefined}
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={`${project.title}-${tag}`}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function CertificationsGrid() {
  return (
    <>
      {window.portfolioData.certifications.map((cert) => (
        <a className="cert-card" href={cert.href} target="_blank" rel="noreferrer" key={cert.title}>
          <div className="cert-icon"><i className={cert.iconClass}></i></div>
          <div className="cert-card-info">
            <h4>{cert.title}</h4>
            <span>{cert.organization} · {cert.date}</span>
          </div>
        </a>
      ))}
    </>
  );
}

function ContactLinks() {
  return (
    <>
      {window.portfolioData.contacts.map((contact) => {
        if (contact.type === 'static') {
          return (
            <div className="contact-item" style={{ cursor: 'default' }} key={contact.label}>
              <i className={`${contact.iconClass} contact-icon`}></i>
              <div className="contact-info">
                <span className="contact-label">{contact.label}</span>
                <span className="contact-value">{contact.value}</span>
              </div>
            </div>
          );
        }

        return (
          <a
            className="contact-item"
            href={contact.href}
            key={contact.label}
            target={contact.href.startsWith('http') ? '_blank' : undefined}
            rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <i className={`${contact.iconClass} contact-icon`}></i>
            <div className="contact-info">
              <span className="contact-label">{contact.label}</span>
              <span className="contact-value">{contact.value}</span>
            </div>
          </a>
        );
      })}
    </>
  );
}

ReactDOM.createRoot(roots.skills).render(<SkillsList />);
ReactDOM.createRoot(roots.aboutLinks).render(<AboutLinks />);
ReactDOM.createRoot(roots.projects).render(<ProjectsGrid />);
ReactDOM.createRoot(roots.certifications).render(<CertificationsGrid />);
ReactDOM.createRoot(roots.contacts).render(<ContactLinks />);

if (window.initializeVanillaInteractions) {
  window.initializeVanillaInteractions();
}
