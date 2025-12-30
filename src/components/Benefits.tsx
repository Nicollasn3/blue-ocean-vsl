import React from 'react';
import { CalendarCheck, TrendingUp, ArrowDownCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: CalendarCheck,
    title: "Mais reuniões confirmadas",
    description: "Menos agenda perdida, mais tempo vendendo."
  },
  {
    icon: TrendingUp,
    title: "Taxa de fechamento maior",
    description: "Leads qualificados convertem mais."
  },
  {
    icon: ArrowDownCircle,
    title: "CAC muito mais baixo",
    description: "Menos gasto para cada cliente novo."
  },
  {
    icon: Clock,
    title: "Mais tempo para vender",
    description: "Seu time foca no que importa."
  }
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 relative bg-brand-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              O que muda no seu <br/>
              <span className="text-gradient">crescimento</span>
            </h2>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20">
                      <benefit.icon className="w-6 h-6 text-brand-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-accent/20 blur-[100px] rounded-full" />
            <div className="glass-panel p-8 rounded-3xl relative border-white/10 bg-black/40">
              {/* Abstract visualization of growth */}
              <div className="space-y-6">
                <div className="flex justify-between items-end h-64 gap-4 px-4 pb-4 border-b border-white/10">
                   {[40, 65, 45, 80, 55, 95].map((h, i) => (
                     <div key={i} className="w-full bg-brand-accent/20 rounded-t-lg relative group overflow-hidden" style={{ height: `${h}%` }}>
                        <div className="absolute bottom-0 left-0 w-full bg-brand-accent transition-all duration-1000 group-hover:opacity-100 opacity-70" style={{ height: '100%' }} />
                     </div>
                   ))}
                </div>
                <div className="flex justify-between text-sm text-gray-500 font-mono">
                  <span>JAN</span>
                  <span>JUN</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

