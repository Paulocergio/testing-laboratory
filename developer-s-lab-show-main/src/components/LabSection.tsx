import { motion } from "framer-motion";
import LabCard from "./LabCard";

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
    <section id="laboratorio" className="py-24 relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#158fa2]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#e4b302]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#de4f3a]/3 rounded-full blur-3xl" />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[#158fa2] text-sm font-bold">
              03.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#158fa2] to-[#722731] bg-clip-text text-transparent">
              Laboratório
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#158fa2]/30 to-transparent" />
          </div>

          {/* Section Description */}
          <div className="max-w-3xl mb-12 space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Esta seção é meu{" "}
              <span className="text-[#158fa2] font-bold">laboratório de estudos</span>.
              Aqui eu publico mini-projetos e CRUDs criados com o objetivo de{" "}
              <span className="text-[#722731] font-semibold">
                aprender a sintaxe e entender como a linguagem funciona na prática
              </span>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Não são projetos comerciais nem feitos para produção — são 
              experiências controladas para{" "}
              <span className="text-[#de4f3a] font-semibold">comparar tecnologias</span>,
              testar padrões e evoluir como desenvolvedor.
            </p>
            
            {/* Quote box */}
            <div className="bg-gradient-to-r from-[#158fa2]/10 to-[#158fa2]/5 border-l-4 border-[#158fa2] rounded-r-lg p-4 mt-6">
              <p className="text-sm text-[#722731] font-medium italic flex items-start gap-2">
                <span className="text-[#158fa2] text-2xl leading-none">"</span>
                <span>
                  Eu acredito que não faz sentido criticar uma linguagem sem ter 
                  testado de verdade.
                </span>
                <span className="text-[#158fa2] text-2xl leading-none self-end">"</span>
              </p>
            </div>
          </div>

          {/* Lab Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {labProjects.map((project, index) => (
              <LabCard key={project.title} {...project} index={index} />
            ))}
          </div>

          {/* Bottom decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-white border-2 border-[#158fa2]/20 rounded-full px-6 py-3 shadow-lg">
              <div className="flex -space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#722731]" />
                <div className="w-3 h-3 rounded-full bg-[#bd1b43]" />
                <div className="w-3 h-3 rounded-full bg-[#de4f3a]" />
                <div className="w-3 h-3 rounded-full bg-[#158fa2]" />
                <div className="w-3 h-3 rounded-full bg-[#e4b302]" />
              </div>
              <span className="text-sm font-mono text-gray-600">
                Experimentos em andamento
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LabSection;