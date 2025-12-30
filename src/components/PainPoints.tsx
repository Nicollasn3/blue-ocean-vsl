import React from 'react';
import { Target, Filter, UserCheck, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const points = [
  {
    icon: Target,
    title: "Sinal de compra",
    description: "O algoritmo aprende quem realmente compra."
  },
  {
    icon: Filter,
    title: "Filtro antes do SDR",
    description: "Turista não vira reunião."
  },
  {
    icon: UserCheck,
    title: "Decisor na call",
    description: "Menos no-show, mais oportunidade real."
  },
  {
    icon: RefreshCw,
    title: "Retenção conectada",
    description: "Você para de vender para quem não retém."
  }
];

export const PainPoints = () => {
  return (
    <section id="recursos" className="py-24 relative overflow-hidden">
      {/* Subtle Grid Background for section continuity */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Nunca mais perca tempo com <span className="text-brand-accent drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]">leads curiosos</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Converse apenas com quem tem perfil, timing e poder de decisão.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Card internal glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-14 h-14 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-brand-accent/20 relative z-10 shadow-[0_0_15px_rgba(14,165,233,0.1)]">
                <point.icon className="w-7 h-7 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{point.title}</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
