import { Instagram, MessageSquare, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Início", href: "/#home" },
    { name: "Portfólio", href: "/portfolio" },
    { name: "Dimensões", href: "/#dimensions" },
    { name: "Contato", href: "/#contact" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold font-montserrat text-foreground mb-4">
              <span className="text-neon-pink">3D</span>
              <span className="text-neon-cyan">imension</span>
              <span className="text-blue-violet">Labs</span>
            </div>
            <p className="text-xl font-bold font-montserrat text-foreground italic mb-6">
              "A dimensão sem limites para a criatividade."
            </p>
            <p className="text-muted-foreground font-montserrat max-w-md">
              Transformamos ideias em realidade por meio de impressão 3D de precisão, design inovador
              e criatividade sem limites. Qualidade sob controle, inovação sem fronteiras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold font-montserrat text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-neon-pink transition-colors duration-300 font-montserrat"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold font-montserrat text-foreground mb-4">Conecte-se</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Instagram className="text-neon-pink" size={20} />
                <span className="text-muted-foreground font-montserrat">@3dimensionlabs</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="text-neon-cyan" size={20} />
                <span className="text-muted-foreground font-montserrat">@3dimensionlabs</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-violet" size={20} />
                <span className="text-muted-foreground font-montserrat">hello@3dimensionlabs.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground font-montserrat text-sm">
              © 2025 Lapix Lazuli inc
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-neon-pink transition-colors font-montserrat text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors font-montserrat text-sm">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;