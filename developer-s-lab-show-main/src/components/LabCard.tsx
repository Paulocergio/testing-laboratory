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
}: LabCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col h-full group relative overflow-hidden hover:border-[#158fa2]/50 hover:shadow-xl hover:shadow-[#158fa2]/10 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#158fa2]/10 to-transparent rounded-bl-3xl" />

      {/* Lab Badge */}
      <div className="absolute top-4 right-4 z-10">
        <Badge className="bg-[#158fa2]/10 text-[#158fa2] border-[#158fa2]/30 gap-1 font-semibold shadow-sm">
          <FlaskConical className="w-3 h-3" />
          LAB
        </Badge>
      </div>

      {/* Header */}
      <div className="mb-4 pr-16">
        <h3 className="text-xl font-bold text-[#722731] mb-2 group-hover:text-[#158fa2] transition-colors">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Objective */}
      <div className="bg-gradient-to-r from-[#158fa2]/5 to-[#158fa2]/10 border-l-4 border-[#158fa2] rounded-lg p-3 mb-4">
        <p className="text-xs font-bold text-[#158fa2] mb-1 uppercase tracking-wide">
          Objetivo:
        </p>
        <p className="text-sm text-gray-700 font-medium">{objective}</p>
      </div>

      {/* Learnings */}
      {learnings && learnings.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
            Aprendizado:
          </p>
          <div className="flex flex-wrap gap-2">
            {learnings.map((learning) => (
              <span
                key={learning}
                className="text-xs bg-[#e4b302]/10 text-[#e4b302] border border-[#e4b302]/20 px-2 py-1 rounded font-medium"
              >
                {learning}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Next Steps */}
      {nextSteps && (
        <div className="bg-[#de4f3a]/5 border border-[#de4f3a]/20 rounded-lg p-3 mb-4">
          <p className="text-xs text-gray-700">
            <span className="font-bold text-[#de4f3a]">Próximo passo:</span>{" "}
            {nextSteps}
          </p>
        </div>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6 flex-1">
        {technologies.map((tech, idx) => {
          const colors = [
            "bg-[#722731]/10 text-[#722731] border-[#722731]/20",
            "bg-[#bd1b43]/10 text-[#bd1b43] border-[#bd1b43]/20",
            "bg-[#de4f3a]/10 text-[#de4f3a] border-[#de4f3a]/20",
          ];
          const colorClass = colors[idx % colors.length];
          
          return (
            <span
              key={tech}
              className={`font-mono text-xs border px-2 py-1 rounded font-semibold ${colorClass}`}
            >
              {tech}
            </span>
          );
        })}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-gray-200">
        {demoUrl && (
          <Button
            asChild
            size="sm"
            className="flex-1 bg-[#158fa2] text-white hover:bg-[#158fa2]/90 shadow-md shadow-[#158fa2]/20 hover:shadow-lg hover:shadow-[#158fa2]/30 transition-all font-semibold"
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
            className="text-gray-600 hover:text-[#722731] hover:bg-[#722731]/5 transition-all"
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