import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  ArrowDown, 
  Sparkles,
  Code2,
} from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      {/* Animated background com nova paleta */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/30 to-purple-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-teal-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-400/20 to-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-md border border-violet-400/30 shadow-lg shadow-violet-500/20">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-white">
                Desenvolvedor Full Stack
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-6 leading-tight"
          >
            <span className="block text-white mb-2">Transformando</span>
            <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
              Ideias em Código
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-center text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Projetos reais com{" "}
            <span className="text-cyan-400 font-semibold">tecnologias modernas</span>
            {" "}e um laboratório de{" "}
            <span className="text-amber-400 font-semibold">experimentação contínua</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <button
              onClick={() => scrollToSection("projetos")}
              className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/60 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver Projetos
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button
              onClick={() => scrollToSection("laboratorio")}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 backdrop-blur-md border-2 border-cyan-400/30 text-white font-semibold rounded-xl hover:border-cyan-400/50 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20"
            >
              <span className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                Laboratório
                <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center gap-6"
          >
            {[
              { Icon: Github, href: "https://github.com", color: "hover:text-slate-200 hover:shadow-slate-500/20" },
              { Icon: Linkedin, href: "https://linkedin.com", color: "hover:text-cyan-400 hover:shadow-cyan-500/20" }
            ].map(({ Icon, href, color }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-slate-400 ${color} transition-all duration-300 hover:scale-110 hover:bg-white/10 shadow-lg`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection("sobre")}
            className="p-2 rounded-full bg-cyan-500/10 backdrop-blur-sm border border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors cursor-pointer shadow-lg shadow-cyan-500/20"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;