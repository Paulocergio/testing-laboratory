import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:text-slate-900 hover:bg-slate-100",
      shadow: "group-hover:shadow-slate-500/20",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/paulo-cergio-300926152/",
      label: "LinkedIn",
      color: "hover:text-cyan-600 hover:bg-cyan-50",
      shadow: "group-hover:shadow-cyan-500/20",
    },
    {
      icon: Mail,
      href: "mailto:juniorcergio@gmail.com",
      label: "Email",
      color: "hover:text-violet-600 hover:bg-violet-50",
      shadow: "group-hover:shadow-violet-500/20",
    },
  ];

  return (
    <footer className="py-16 border-t border-slate-200 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Message */}
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent"
          >
            Vamos conversar?
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 mb-10 leading-relaxed"
          >
            Meu portfólio está sempre evoluindo. Eu gosto de aprender 
            construindo, testando, errando e melhorando. Se quiser conversar 
            sobre algum projeto ou ideia, estou aberto a feedbacks e 
            oportunidades.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className={`p-3 rounded-xl bg-slate-100 border border-slate-200 ${social.color} transition-all duration-300 shadow-lg ${social.shadow}`}>
                  <social.icon className="w-5 h-5 text-slate-600 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs text-slate-600 group-hover:text-slate-900 transition-colors font-medium">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-violet-600 via-cyan-500 to-teal-500 rounded-full"
          />

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="space-y-3"
          >
            <p className="text-sm text-slate-600 font-mono flex items-center justify-center gap-2">
              Desenvolvido com 
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="text-violet-600"
              >
                💻
              </motion.span> 
              e 
              <motion.span 
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                className="text-amber-600"
              >
                ☕
              </motion.span>
            </p>
            
            {/* Color dots indicator */}
            <div className="flex justify-center gap-2">
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 shadow-lg shadow-violet-500/50"
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 shadow-lg shadow-cyan-500/50"
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-amber-500/50"
              />
            </div>

            {/* Optional: Year */}
            <p className="text-xs text-slate-500 font-mono">
              © 2024 • Todos os direitos reservados
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;