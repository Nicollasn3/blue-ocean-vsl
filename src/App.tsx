import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

const navItems = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-900 overflow-x-hidden relative">
      
      {/* High Ticket Lighting Effects & Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle Grid Background */}
        <div 
          className="absolute inset-0 bg-grid-white bg-[size:40px_40px] opacity-[0.06]" 
          style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}
        />
        
        {/* Primary Glows */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen" />
        
        {/* Overlay Gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/50 to-brand-900 pointer-events-none" />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-brand-900/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 cursor-pointer">
              <span className="text-2xl font-bold tracking-tighter text-white">
                Blue <span className="text-brand-accent">Ocean</span>
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-brand-accent"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all border border-white/10 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                Área do Cliente
              </button>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-panel mx-4 mt-2 rounded-2xl overflow-hidden mb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium border-b border-white/5 last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10">
        <Hero />
        <PainPoints />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}

export default App;