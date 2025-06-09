import './Projects.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projectData = [
  { 
    id: 1, 
    image: 'https://i.pinimg.com/736x/dd/1d/d3/dd1dd312bef5fe564e09f6b8dd2a5799.jpg', 
    title: 'NBPC UNISNU 2025', 
    description: 'A landing page for a National Business Plan Competition, with event info and registration.', 
    tech: ['React', 'Vite'],
    link: 'https://nbpc-unisnu.vercel.app/'
  },
  { 
    id: 2, 
    image: 'https://i.pinimg.com/736x/79/f4/b0/79f4b0d3ede728cd9a67c9aaf99de849.jpg', 
    title: 'MLBB x IKMATIF Tournament', 
    description: 'A tournament bracket and info site for a Mobile Legends competition.',
    tech: ['React', 'Vite'],
    link: 'https://mlbb-lac.vercel.app/'
  },
  { 
    id: 3, 
    image: 'https://i.pinimg.com/736x/f7/c3/ab/f7c3ab7931ba3dbac1b9825db2d64441.jpg', 
    title: 'Number System Converter', 
    description: 'A utility to convert numbers between binary, decimal, octal, and hexadecimal systems.', 
    tech: ['HTML', 'CSS', 'JS'],
    link: 'https://konversi-bilangan-two.vercel.app/'
  }
];

const Projects = () => {
  return (
    <div className="projects-section" id="featured-projects">
      <div className="projects-header">
        <div className="projects-title-section">
          <p className="projects-subtitle">Portfolio</p>
          <h2 className="projects-title">Featured Projects</h2>
        </div>
        <div className="projects-info">
          <p>A selection of my work. I'm always looking for new challenges and exciting projects.</p>
        </div>
        <div className="projects-nav">
          <button className="nav-arrow"><FaArrowLeft /></button>
          <button className="nav-arrow active"><FaArrowRight /></button>
        </div>
      </div>
      <div className="project-cards">
        {projectData.map(proj => (
          <div className="project-card" key={proj.id}>
            <div className="card-image-container">
              <img src={proj.image} alt={proj.title} />
            </div>
            <div className="card-info">
              <div className="card-header">
                <h3 className="project-card-title">{proj.title}</h3>
                <div className="card-tech">
                    {proj.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>
              <p className="project-card-description">{proj.description}</p>
            </div>
            <div className="project-links">
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="bid-now-btn">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 