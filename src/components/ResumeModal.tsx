import React from 'react';
import { X, Download, Printer, CheckCircle, Award, Briefcase, GraduationCap } from 'lucide-react';
import { DESIGNER_INFO, SERVICES_DATA, TOOLS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/formatted file download simulation
    const resumeText = `
${DESIGNER_INFO.name.toUpperCase()} - RESUME
${DESIGNER_INFO.title}
Email: ${DESIGNER_INFO.email} | Location: ${DESIGNER_INFO.location}

EXPERTISE:
${SERVICES_DATA.map((s) => `- ${s.title}: ${s.description}`).join('\n')}

TOOLS & SOFTWARE:
${TOOLS_DATA.map((t) => `- ${t.name} (${t.proficiency}): ${t.description}`).join('\n')}

EXPERIENCE:
- Lead Graphic Designer | Lumina Tech Studios (2023 - Present)
- Senior Visual Specialist | Pulse Creative Hub (2021 - 2023)
- Freelance Graphic Designer & Illustrator (2019 - 2021)
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${DESIGNER_INFO.name.replace(' ', '_')}_Resume.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#20284F]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl border border-[#FFE9E0] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#FFE9E0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FFE9E0] text-[#FF745A]">
              Official CV
            </span>
            <h2 className="font-display font-bold text-xl text-[#20284F]">
              {DESIGNER_INFO.name} — Resume
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close resume"
            className="p-2 rounded-xl bg-[#FFF9F6] border border-[#FFE9E0] text-[#20284F] hover:bg-[#FFE9E0] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume Sheet Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-[#20284F] font-body">
          
          {/* Header section */}
          <div className="border-b border-[#FFE9E0] pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="font-display font-bold text-3xl text-[#20284F]">
                {DESIGNER_INFO.name}
              </h1>
              <p className="text-sm font-semibold text-[#FF745A] mt-1">
                {DESIGNER_INFO.title}
              </p>
            </div>
            <div className="text-xs text-[#7E7A78] space-y-1 text-left sm:text-right">
              <div>{DESIGNER_INFO.email}</div>
              <div>{DESIGNER_INFO.location}</div>
              <div className="text-emerald-600 font-bold">{DESIGNER_INFO.availability}</div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="font-display font-bold text-lg text-[#20284F] mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#FF745A]" />
              <span>Professional Summary</span>
            </h3>
            <p className="text-sm text-[#7E7A78] leading-relaxed">
              {DESIGNER_INFO.bio}
            </p>
          </div>

          {/* Expertise Order */}
          <div>
            <h3 className="font-display font-bold text-lg text-[#20284F] mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#FF745A]" />
              <span>Core Expertise</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES_DATA.map((s) => (
                <div key={s.id} className="p-3.5 rounded-2xl bg-[#FFF9F6] border border-[#FFE9E0]">
                  <div className="font-display font-bold text-sm text-[#20284F]">{s.title}</div>
                  <div className="text-xs text-[#7E7A78] mt-1 line-clamp-2">{s.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-display font-bold text-lg text-[#20284F] mb-3">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {TOOLS_DATA.map((t) => (
                <span key={t.id} className="px-3 py-1.5 rounded-full bg-[#FFE9E0] text-[#20284F] text-xs font-bold">
                  {t.name} ({t.proficiency})
                </span>
              ))}
            </div>
          </div>

          {/* Work History */}
          <div>
            <h3 className="font-display font-bold text-lg text-[#20284F] mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#FF745A]" />
              <span>Work Experience</span>
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-[#FF745A] pl-4">
                <div className="font-bold text-base text-[#20284F]">Lead Graphic Designer & Visual Specialist</div>
                <div className="text-xs text-[#FF745A] font-semibold">Lumina Tech Studios • 2023 - Present</div>
                <p className="text-xs text-[#7E7A78] mt-1">
                  Directed mascot character design, digital ad campaigns, and branding guidelines for over 40 client launches.
                </p>
              </div>

              <div className="border-l-2 border-[#FFE9E0] pl-4">
                <div className="font-bold text-base text-[#20284F]">Senior Retoucher & UI Designer</div>
                <div className="text-xs text-[#7E7A78] font-semibold">Pulse Creative Hub • 2021 - 2023</div>
                <p className="text-xs text-[#7E7A78] mt-1">
                  Managed high-end editorial photo retouching and responsive Figma web design systems.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-display font-bold text-lg text-[#20284F] mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#FF745A]" />
              <span>Education</span>
            </h3>
            <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#FFE9E0] flex justify-between items-center">
              <div>
                <div className="font-bold text-sm text-[#20284F]">Bachelor of Fine Arts (BFA) in Graphic Design</div>
                <div className="text-xs text-[#7E7A78]">California College of the Arts</div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FFE9E0] text-[#FF745A]">
                Graduated Honors
              </span>
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-[#FFF9F6] border-t border-[#FFE9E0] flex items-center justify-between">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#FFE9E0] text-xs font-bold text-[#20284F] hover:bg-[#FFE9E0] transition-colors"
          >
            <Printer className="w-4 h-4 text-[#FF745A]" />
            <span>Print CV</span>
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF745A] hover:bg-[#FF947E] text-white font-display font-bold text-xs shadow-md transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Text CV</span>
          </button>
        </div>

      </div>
    </div>
  );
};
