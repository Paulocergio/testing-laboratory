import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2, Clock, Wrench, Rocket } from "lucide-react";
const ProjectCardModern = ({ title, description, status, technologies, demoUrl, repoUrl, index }: any) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "Finalizado":
        return {
          Icon: CheckCircle2,
          gradient: "from-emerald-500 to-green-500",
          bgGradient: "from-emerald-500/10 to-green-500/10",
          border: "border-emerald-500/30",
          text: "text-emerald-600",
        };
      case "Em desenvolvimento":
        return {
          Icon: Clock,
          gradient: "from-amber-500 to-orange-500",
          bgGradient: "from-amber-500/10 to-orange-500/10",
          border: "border-amber-500/30",
          text: "text-amber-600",
        };
      case "Refatorando":
        return {
          Icon: Wrench,
          gradient: "from-blue-500 to-cyan-500",
          bgGradient: "from-blue-500/10 to-cyan-500/10",
          border: "border-blue-500/30",
          text: "text-blue-600",
        };
      case "Versão 1":
        return {
          Icon: Rocket,
          gradient: "from-violet-500 to-purple-500",
          bgGradient: "from-violet-500/10 to-purple-500/10",
          border: "border-violet-500/30",
          text: "text-violet-600",
        };
      default:
        return {
          Icon: Clock,
          gradient: "from-slate-500 to-gray-500",
          bgGradient: "from-slate-500/10 to-gray-500/10",
          border: "border-slate-500/30",
          text: "text-slate-600",
        };
    }
  };

  const config = getStatusConfig(status);
  const StatusIcon = config.Icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
      <div className="absolute inset-[1px] bg-white rounded-2xl" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-violet-600 group-hover:to-cyan-600 transition-all">
              {title}
            </h3>
            
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${config.border} bg-gradient-to-br ${config.bgGradient} shadow-sm`}>
              <StatusIcon className={`w-3.5 h-3.5 ${config.text}`} />
              <span className={`text-xs font-semibold ${config.text}`}>
                {status}
              </span>
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 flex-1">
          {technologies.map((tech: string, idx: number) => {
            const gradients = [
              "from-violet-500/10 to-purple-500/10 border-violet-500/20 text-violet-700",
              "from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-cyan-700",
              "from-amber-500/10 to-orange-500/10 border-amber-500/20 text-amber-700",
              "from-pink-500/10 to-rose-500/10 border-pink-500/20 text-pink-700",
            ];
            const gradientClass = gradients[idx % gradients.length];
            
            return (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className={`font-mono text-xs font-semibold border rounded-lg px-3 py-1.5 bg-gradient-to-br ${gradientClass}`}
              >
                {tech}
              </motion.span>
            );
          })}
        </div>

        <div className="flex gap-3 pt-4 border-t border-slate-200">
          {demoUrl && (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r ${config.gradient} text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all`}
            >
              <ExternalLink className="w-4 h-4" />
              Ver Projeto
            </motion.a>
          )}
          {repoUrl && (
            <motion.a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${config.bgGradient} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </motion.div>
  );
};

export default ProjectCardModern;