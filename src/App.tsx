import React, { Suspense, lazy, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ToolsSection } from './components/ToolsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactBanner } from './components/ContactBanner';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Project } from './data/portfolioData';

const ProjectModal = lazy(() =>
  import('./components/ProjectModal').then((module) => ({ default: module.ProjectModal })),
);

const ResumeModal = lazy(() =>
  import('./components/ResumeModal').then((module) => ({ default: module.ResumeModal })),
);

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  const handleScrollToForm = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F6] text-[#20284F] font-body relative overflow-x-hidden">
      
      {/* 1. First-Screen Viewport (Navbar + Hero Section strictly locked to view height) */}
      <div className="first-screen">
        <Navbar onOpenResume={() => setResumeOpen(true)} />
        <HeroSection />
      </div>

      {/* Main Page Content */}
      <main>
        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Services and Expertise Section */}
        <ExpertiseSection />

        {/* 4. Creative Tools Section */}
        <ToolsSection />

        {/* 5. Selected Projects Section */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Design Process Section */}
        <ProcessSection />

        {/* 7. Contact Banner CTA */}
        <ContactBanner onScrollToForm={handleScrollToForm} />

        {/* 8. Contact Form Section */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals are code-split and downloaded only when opened. */}
      <Suspense fallback={null}>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {resumeOpen && (
          <ResumeModal
            isOpen={resumeOpen}
            onClose={() => setResumeOpen(false)}
          />
        )}
      </Suspense>

      {/* Floating WhatsApp Contact Button */}
      <WhatsAppButton />

    </div>
  );
}

