import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Aumentamos nossa taxa de conversão em 3x focando nos leads certos.",
    author: "Carlos Silva",
    role: "CEO, TechSaaS"
  },
  {
    content: "Finalmente paramos de perder tempo com leads que nunca iriam comprar.",
    author: "Marina Santos",
    role: "Head of Growth, CloudCo"
  },
  {
    content: "O ROI apareceu no primeiro mês. Recomendo fortemente.",
    author: "Pedro Costa",
    role: "Founder, DataHub"
  }
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden bg-brand-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            O que nossos clientes <span className="text-gradient">dizem</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative"
            >
              <Quote className="w-10 h-10 text-brand-accent/20 mb-6 absolute top-6 right-6" />
              <p className="text-xl text-gray-200 mb-8 italic relative z-10">"{testimonial.content}"</p>
              <div className="mt-auto">
                <h4 className="text-white font-bold">{testimonial.author}</h4>
                <p className="text-brand-accent text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

