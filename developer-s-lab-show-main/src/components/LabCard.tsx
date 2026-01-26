import { motion } from "framer-motion";
import { ExternalLink, Github, FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface LabCardProps {
  title: string;
  description: string;
  objective: string;
  technologies: string[];
  learnings?: string[];
  nextSteps?: string;
  demoUrl?: string;
  repoUrl?: string;
  index: number;
  biggestDifficulties?: string[];
}

const LabCard = ({
  title,
  description,
  objective,
  technologies,
  learnings,
  nextSteps,
  demoUrl,
  repoUrl,
  index,
  biggestDifficulties,
}: LabCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col h-full group relative overflow-hidden hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-3xl" />

      {/* Lab Badge */}
      <div className="absolute top-4 right-4 z-10">
        <Badge className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 border-cyan-500/30 gap-1 font-semibold shadow-sm shadow-cyan-500/20">
          <FlaskConical className="w-3 h-3" />
          LAB
        </Badge>
      </div>

      {/* Header */}
      <div className="mb-4 pr-16">
        <h3 className="text-xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Objective */}
      <div className="bg-gradient-to-r from-cyan-500/5 to-teal-500/10 border-l-4 border-cyan-500 rounded-lg p-3 mb-4 shadow-sm">
        <p className="text-xs font-bold text-cyan-700 mb-1 uppercase tracking-wide">
          Objetivo:
        </p>
        <p className="text-sm text-slate-700 font-medium">{objective}</p>
      </div>

      {/* Learnings */}
      {learnings && learnings.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
            Aprendizado:
          </p>
          <div className="flex flex-wrap gap-2">
            {learnings.map((learning) => (
              <span
                key={learning}
                className="text-xs bg-gradient-to-r from-violet-500/10 to-purple-500/10 text-violet-700 border border-violet-500/20 px-2 py-1 rounded-lg font-medium shadow-sm"
              >
                {learning}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Biggest Difficulties */}
      {biggestDifficulties && biggestDifficulties.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
            Maiores Dificuldades:
          </p>
          <ul className="space-y-1.5">
            {biggestDifficulties.map((difficulty, idx) => (
              <li key={idx} className="text-xs text-slate-600 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-amber-500">
                {difficulty}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Next Steps */}
      {nextSteps && (
        <div className="bg-gradient-to-r from-amber-500/5 to-orange-500/10 border border-amber-500/20 rounded-lg p-3 mb-4 shadow-sm">
          <p className="text-xs text-slate-700">
            <span className="font-bold text-amber-600">Próximo passo:</span>{" "}
            {nextSteps}
          </p>
        </div>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6 flex-1">
        {technologies.map((tech, idx) => {
          const colors = [
            "bg-gradient-to-r from-violet-500/10 to-purple-500/10 text-violet-700 border-violet-500/20",
            "bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-700 border-cyan-500/20",
            "bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 border-amber-500/20",
          ];
          const colorClass = colors[idx % colors.length];
          
          return (
            <span
              key={tech}
              className={`font-mono text-xs border px-2.5 py-1 rounded-lg font-semibold ${colorClass} shadow-sm`}
            >
              {tech}
            </span>
          );
        })}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-slate-200">
        {demoUrl && (
          <Button
            asChild
            size="sm"
            className="flex-1 bg-gradient-to-r from-cyan-500 to-teal-600 text-white hover:from-cyan-600 hover:to-teal-700 shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all font-semibold"
          >
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Abrir Demo
            </a>
          </Button>
        )}
        {repoUrl && (
          <Button
            asChild
            size="sm"
            variant="ghost"
            className="text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all"
          >
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default LabCard;