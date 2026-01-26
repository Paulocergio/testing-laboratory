import { motion } from "framer-motion";
import LabCard from "./LabCard";
import { FlaskConical, Sparkles } from "lucide-react";

const labProjects = [
  {
    title: "CRUD em Java",
    description:
      "Projeto simples para aprender estrutura de API, controllers e rotas com Java.",
    objective: "Conhecer sintaxe e boas práticas básicas do ecossistema Java",
    technologies: ["Java", "Spring Boot", "Maven"],
    learnings: ["Rotas", "DTO", "Validação"],
    nextSteps: "Adicionar autenticação JWT",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "API REST com Go",
    description:
      "Estudo de Go para criação de APIs performáticas e concorrentes.",
    objective: "Entender a sintaxe e o modelo de concorrência do Go",
    technologies: ["Go", "Gin", "PostgreSQL"],
    learnings: ["Goroutines", "Handlers", "Middleware"],
    nextSteps: "Implementar testes unitários",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Todo List em Python",
    description:
      "Aplicação simples com FastAPI para entender o ecossistema Python.",
    objective: "Explorar FastAPI e tipagem com Pydantic",
    technologies: ["Python", "FastAPI", "SQLite"],
    learnings: ["Decorators", "Pydantic", "CRUD"],
    nextSteps: "Migrar para PostgreSQL",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "CLI em Rust",
    description:
      "Ferramenta de linha de comando para manipulação de arquivos.",
    objective: "Aprender ownership, borrowing e tipos do Rust",
    technologies: ["Rust", "Clap", "Tokio"],
    learnings: ["Ownership", "Pattern Matching", "Error Handling"],
    nextSteps: "Adicionar async I/O",
    repoUrl: "#",
  },
  {
    title: "Servidor caseiro (Home Server) com Ubuntu Server 24.04 LTS",
    description:
      "Montei e configurei um servidor caseiro para hospedar serviços (Docker, Portainer, PostgreSQL e apps internos), com acesso remoto e monitoramento básico.",
    objective:
      "Aprender administração Linux na prática (rede, storage, segurança) e padronizar deploy de serviços com Docker.",
    technologies: [
      "Ubuntu Server 24.04 LTS",
      "Docker",
      "Docker Compose",
      "Portainer",
      "Nginx (reverse proxy)",
      "UFW",
      "SSH",
      "Fail2ban",
      "Certbot (Let's Encrypt)",
      "DDNS (opcional)"
    ],
    learnings: [
      "Users/Groups e permissões (sudo, docker group)",
      "Gerenciamento de serviços (systemd)",
      "Rede: IP fixo, gateway, DNS, NAT e port-forwarding",
      "Hardening básico: firewall, SSH keys, bloquear brute force",
      "Logs e troubleshooting (journalctl, netstat/ss, ufw, docker logs)",
      "Backup e persistência de volumes Docker"
    ],
    biggestDifficulties: [
      "Acesso externo: NAT/port forwarding no roteador, diferença entre IP interno vs. IP público e CGNAT",
      "Certificado SSL e domínio: apontamento DNS/DDNS + reverse proxy até ficar estável",
      "Conflitos de portas entre serviços (ex.: 80/443/9090/9443) e ajuste de proxies",
      "Permissões em volumes (UID/GID) causando erros em containers",
      "Garantir persistência/backup (volumes, dump do banco, restauração testada)",
      "Segurança mínima sem complicar demais (UFW + Fail2ban + SSH por chave)"
    ],
    nextSteps:
      "Adicionar monitoramento completo (Prometheus + Grafana), backups automáticos (restic/rclone) e CI/CD simples (GitHub Actions) para deploy via Docker.",
    repoUrl: "#"
  },
];

const LabSection = () => {
  return (
    <section id="laboratorio" className="py-24 relative bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white font-bold text-lg shadow-lg shadow-amber-500/30">
              03
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-cyan-700 to-slate-900 bg-clip-text text-transparent">
              Laboratório
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent" />
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            >
              <FlaskConical className="w-8 h-8 text-cyan-500" />
            </motion.div>
          </div>

          {/* Section Description */}
          <div className="max-w-3xl mb-12 space-y-4">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-700 text-lg leading-relaxed"
            >
              Esta seção é meu{" "}
              <span className="text-cyan-600 font-bold">laboratório de estudos</span>.
              Aqui eu publico mini-projetos e CRUDs criados com o objetivo de{" "}
              <span className="text-violet-600 font-semibold">
                aprender a sintaxe e entender como a linguagem funciona na prática
              </span>.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-slate-600 leading-relaxed"
            >
              Não são projetos comerciais nem feitos para produção — são 
              experiências controladas para{" "}
              <span className="text-amber-600 font-semibold">comparar tecnologias</span>,
              testar padrões e evoluir como desenvolvedor.
            </motion.p>
            
            {/* Quote box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-cyan-500/10 border-l-4 border-cyan-500 rounded-r-xl p-5 mt-6 shadow-lg shadow-cyan-500/10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-bl-3xl" />
              <div className="relative flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium italic flex items-start gap-2">
                  <span className="text-cyan-500 text-3xl leading-none font-serif">"</span>
                  <span className="flex-1">
                    Eu acredito que não faz sentido criticar uma linguagem sem ter 
                    testado de verdade.
                  </span>
                  <span className="text-cyan-500 text-3xl leading-none self-end font-serif">"</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Lab Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {labProjects.map((project, index) => (
              <LabCard key={project.title} {...project} index={index} />
            ))}
          </div>

          {/* Bottom decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-4 bg-white border-2 border-slate-200 rounded-2xl px-8 py-4 shadow-xl hover:shadow-2xl hover:border-cyan-300 transition-all duration-300 group">
              <div className="flex -space-x-2">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 shadow-lg shadow-violet-500/50 border-2 border-white"
                />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg shadow-cyan-500/50 border-2 border-white"
                />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                  className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/50 border-2 border-white"
                />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg shadow-pink-500/50 border-2 border-white"
                />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
                  className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 shadow-lg shadow-emerald-500/50 border-2 border-white"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono text-slate-700 font-semibold group-hover:text-cyan-600 transition-colors">
                  Experimentos em andamento
                </span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <FlaskConical className="w-4 h-4 text-cyan-500" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LabSection;