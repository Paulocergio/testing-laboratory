import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "TaskPlanner",
    description:
      "Sistema para organização de atividades por departamento, com gestão de clientes e relatórios detalhados.",
    status: "Em desenvolvimento" as const,
    technologies: ["C#", ".NET", "SQL Server", "React"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "E-Commerce API",
    description:
      "API RESTful completa para e-commerce com autenticação JWT, gestão de produtos e processamento de pedidos.",
    status: "Finalizado" as const,
    technologies: ["Node.js", "Express", "PostgreSQL", "TypeScript"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Painel de visualização de dados com gráficos interativos e relatórios em tempo real.",
    status: "Versão 1" as const,
    technologies: ["React", "TypeScript", "Recharts", "Tailwind"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

const ProjectsSection = () => {
  const projects = [
    {
      title: "TaskPlanner",
      description: "Sistema para organização de atividades por departamento, com gestão de clientes e relatórios detalhados.",
      status: "Em desenvolvimento",
      technologies: ["C#", ".NET", "SQL Server", "React"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "E-Commerce API",
      description: "API RESTful completa para e-commerce com autenticação JWT, gestão de produtos e processamento de pedidos.",
      status: "Finalizado",
      technologies: ["Node.js", "Express", "PostgreSQL", "TypeScript"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Dashboard Analytics",
      description: "Painel de visualização de dados com gráficos interativos e relatórios em tempo real.",
      status: "Versão 1",
      technologies: ["React", "TypeScript", "Recharts", "Tailwind"],
      demoUrl: "#",
      repoUrl: "#",
    },
  ];

  return (
    <section id="projetos" className="py-24 relative bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -right-32 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 -left-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-bold text-lg shadow-lg shadow-cyan-500/30">
              02
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Projetos
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent" />
          </div>

          <div className="max-w-2xl mb-12">
            <p className="text-slate-700 text-lg leading-relaxed">
              Nesta seção estão meus{" "}
              <span className="text-violet-600 font-bold">projetos principais</span>:
              aplicações que eu desenvolvi com foco em{" "}
              <span className="text-cyan-600 font-semibold">funcionalidade</span>,{" "}
              <span className="text-amber-600 font-semibold">organização</span> e{" "}
              <span className="text-purple-600 font-semibold">experiência real de uso</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default ProjectsSection;