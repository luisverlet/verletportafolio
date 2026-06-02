export interface SiteConfig {
  name: string;
  role: string;
  subtitle: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  navLinks: Array<{ name: string; url: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Luis Vergel",
  role: "Desarrollador Full Stack",
  subtitle: "Portafolio profesional",
  description: "Portafolio profesional de Luis Vergel, desarrollador Full Stack especializado en la creación de aplicaciones web modernas, robustas, escalables y con un diseño impecable.",
  email: "luisverlet@gmail.com",
  github: "https://github.com/luisverlet",
  linkedin: "https://linkedin.com/in/luisverlet",
  navLinks: [
    { name: "Home", url: "#inicio" },
    { name: "Proyectos", url: "#proyectos" },
    { name: "Sobre mi", url: "#sobre-mi" },
    { name: "Contacto", url: "#contacto" }
  ]
};
