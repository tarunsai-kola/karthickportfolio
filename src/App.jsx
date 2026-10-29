import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import AiiensBrand from './components/AiiensBrand';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { projects } from './data/portfolioData';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Setup intersection observer for scroll reveal animations
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', 'true');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const activeProject = selectedProjectId
    ? projects.find((p) => p.id === selectedProjectId)
    : null;

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sticky Top Header */}
      <Header />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <AiiensBrand />
        <Work onSelectProject={setSelectedProjectId} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Technical Project Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setSelectedProjectId(null)}
        />
      )}
    </div>
  );
}
