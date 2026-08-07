import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Vector Illustration',
    budget: '$3k - $5k',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const projectOptions = [
    'Vector Illustration',
    'Photo Editing',
    'Social Media Design',
    'Logo Design',
    'Web Design',
    'Other / Custom Project',
  ];

  const budgetOptions = [
    'Under $1,000',
    '$1,000 - $3,000',
    '$3,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please enter a brief description of your project.');
      return;
    }

    setStatus('submitting');

    // Simulate server submission API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        projectType: 'Vector Illustration',
        budget: '$3k - $5k',
        message: '',
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#FFF9F6]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Form Container */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl sm:rounded-[40px] border border-[#FFE9E0] shadow-xl">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#FF745A] uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#20284F] mt-1">
              Start Your Project
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#7E7A78] font-body">
              Fill out the form below and I will get back to you within 24 business hours.
            </p>
          </div>

          {/* Success Notification Alert */}
          {status === 'success' && (
            <div className="mb-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 animate-in fade-in duration-300">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-base">Message Sent Successfully!</h4>
                <p className="text-sm mt-1">
                  Thank you for reaching out. I’ve received your inquiry and will review your project details promptly.
                </p>
              </div>
            </div>
          )}

          {/* Error Alert */}
          {status === 'error' && (
            <div className="mb-8 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span className="text-sm font-semibold">{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#20284F]">
                  Full Name <span className="text-[#FF745A]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F6] border border-[#FFE9E0] text-[#20284F] placeholder-[#AAA4A1] text-sm font-medium focus:outline-none focus:border-[#FF745A] focus:ring-2 focus:ring-[#FF745A]/20 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#20284F]">
                  Email Address <span className="text-[#FF745A]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. sarah@example.com"
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F6] border border-[#FFE9E0] text-[#20284F] placeholder-[#AAA4A1] text-sm font-medium focus:outline-none focus:border-[#FF745A] focus:ring-2 focus:ring-[#FF745A]/20 transition-all"
                />
              </div>

            </div>

            {/* Project Type & Budget Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-[#20284F]">
                  Project Service
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F6] border border-[#FFE9E0] text-[#20284F] text-sm font-medium focus:outline-none focus:border-[#FF745A] focus:ring-2 focus:ring-[#FF745A]/20 transition-all cursor-pointer"
                >
                  {projectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-[#20284F]">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F6] border border-[#FFE9E0] text-[#20284F] text-sm font-medium focus:outline-none focus:border-[#FF745A] focus:ring-2 focus:ring-[#FF745A]/20 transition-all cursor-pointer"
                >
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#20284F]">
                Project Description & Goals <span className="text-[#FF745A]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a bit about your project goals, timelines, or specific design deliverables needed..."
                className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF9F6] border border-[#FFE9E0] text-[#20284F] placeholder-[#AAA4A1] text-sm font-medium focus:outline-none focus:border-[#FF745A] focus:ring-2 focus:ring-[#FF745A]/20 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 rounded-2xl bg-[#FF745A] hover:bg-[#FF947E] text-white font-display font-bold text-base shadow-lg shadow-coral-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending Inquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit Project Inquiry</span>
                </>
              )}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};
