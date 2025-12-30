import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Analisamos sua operação atual e identificamos os gargalos de conversão."
  },
  {
    number: "02",
    title: "Sistema sob medida",
    description: "Criamos uma estratégia personalizada para seu SaaS B2B."
  },
  {
    number: "03",
    title: "Execução e otimização",
    description: "Implementamos e otimizamos continuamente os resultados."
  }
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 relative bg-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Como <span className="text-brand-accent">funciona</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent -translate-y-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className="glass-panel p-8 rounded-2xl h-full border-t-4 border-t-brand-accent/50 hover:border-t-brand-accent transition-colors duration-300">
                <div className="text-5xl font-bold text-brand-accent/20 mb-6 font-mono">{step.number}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

