import { motion } from "framer-motion";
import { Code2, Lightbulb, Target, Zap } from "lucide-react";

const AboutSectionModern = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Foco em boas práticas, padrões e organização",
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-500/10 to-purple-500/10",
    },
    {
      icon: Target,
      title: "Entregas Reais",
      description: "Projetos funcionais e hospedados online",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
    },
    {
      icon: Lightbulb,
      title: "Aprendizado",
      description: "Laboratório para testar novas tecnologias",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-500/10 to-orange-500/10",
    },
  ];

  return (
    <section id="sobre" className="py-24 relative bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 text-white font-bold text-lg shadow-lg shadow-violet-500/30">
              01
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Sobre
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent" />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-violet-500 via-cyan-500 to-amber-500 rounded-full" />
                <div className="pl-6 space-y-6">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Meu foco principal é desenvolvimento de software com tecnologias 
                    modernas, aplicando{" "}
                    <span className="font-semibold text-violet-600">boas práticas</span>,
                    organização de código, padrões e{" "}
                    <span className="font-semibold text-cyan-600">entregas reais</span>.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Além disso, também realizo projetos de estudo para entender novas 
                    linguagens e comparar abordagens, sem a intenção de dizer que sou 
                    especialista em todas elas.
                  </p>
                </div>
              </div>

              {/* Quote Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-500/20 to-transparent rounded-bl-full" />
                <Zap className="w-8 h-8 text-amber-400 mb-3" />
                <p className="text-white leading-relaxed font-medium italic relative z-10">
                  "Eu acredito que só é possível avaliar uma tecnologia com clareza 
                  quando você realmente coloca a mão no código."
                </p>
              </motion.div>
            </motion.div>

            {/* Highlights Cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ x: 8 }}
                  className="group relative overflow-hidden bg-white border border-slate-200 hover:border-transparent rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <h3 className={`font-bold text-lg mb-1 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSectionModern;