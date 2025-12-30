import React from 'react';
import { Play, ChevronRight, TrendingUp, Users, DollarSign, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements removed from here as they are now global */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-sm font-medium backdrop-blur-sm shadow-[0_0_20px_rgba(14,165,233,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            Otimização de Leads para SaaS B2B
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-tight drop-shadow-lg"
        >
          Você não tem um problema de <span className="text-white/40 line-through decoration-brand-accent/50 decoration-4">leads</span>.
          <br />
          Você tem um problema de <span className="text-gradient drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">otimização</span>.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10 leading-relaxed"
        >
          Se você vende SaaS B2B por demo ou trial, escalar verba sem a otimização certa só gera volume ruim.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button className="btn-primary group text-lg px-10 py-4 shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]">
            AGENDAR REUNIÃO
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-500 max-w-xs text-left hidden sm:block">
            Donos de SaaS B2B podem vender até 10x mais em MRR com o mesmo investimento.
          </p>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative max-w-4xl mx-auto rounded-2xl p-0.5 bg-gradient-to-b from-brand-accent/20 to-transparent backdrop-blur-sm mb-24"
        >
          <div className="relative aspect-video bg-black/50 rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
             <iframe 
                id="panda-f9db10ec-7e3a-44f4-b4da-fd4b73ac5d68" 
                src="https://player-vz-16affdf7-47d.tv.pandavideo.com.br/embed/?v=f9db10ec-7e3a-44f4-b4da-fd4b73ac5d68" 
                style={{ border: 'none' }} 
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
                allowFullScreen={true} 
                className="w-full h-full absolute inset-0"
                // @ts-ignore
                fetchPriority="high"
             />
          </div>
        </motion.div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border border-white/5 bg-white/[0.02] backdrop-blur-md py-12 px-6 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
          {[
            { icon: Users, value: "348+", label: "Clientes turbinados" },
            { icon: DollarSign, value: "R$225MI+", label: "Faturamento gerado" },
            { icon: TrendingUp, value: "R$41MI+", label: "Investido em mídias" },
            { icon: BarChart3, value: "7134+", label: "Criativos produzidos" },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center relative z-10"
            >
              <stat.icon className="w-8 h-8 text-brand-accent mb-4 opacity-80 drop-shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{stat.value}</h3>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
