import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Pare de comprar volume.
            <br />
            <span className="text-gradient">Comece a comprar clientes.</span>
          </h2>
          
          <div className="flex flex-col items-center gap-6">
            <button className="btn-primary text-xl px-12 py-5 group shadow-brand-accent/25">
              AGENDAR REUNIÃO
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                <span>Foco em SaaS B2B</span>
              </div>
              <div className="hidden md:block w-1 h-1 rounded-full bg-gray-700" />
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                <span>Sem lead gen genérico</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold text-white">
            Blue <span className="text-brand-accent">Ocean</span>
          </div>
          <p className="text-gray-600 text-sm">
            © 2025 Blue Ocean. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

