import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/paulo-cergio-300926152/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:juniorcergio@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-16 border-t border-border">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Message */}
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Vamos conversar?
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Meu portfólio está sempre evoluindo. Eu gosto de aprender 
            construindo, testando, errando e melhorando. Se quiser conversar 
            sobre algum projeto ou ideia, estou aberto a feedbacks e 
            oportunidades.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
              >
                <div className="p-3 rounded-lg bg-secondary hover:bg-primary/10 transition-colors duration-300">
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono">
            Desenvolvido com 💻 e ☕
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;