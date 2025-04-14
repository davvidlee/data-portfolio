export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "David Lee Portfolio",
  description: "CHANGE THIS TO A DESCRIPTION",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Me",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Resume",
      href: "/resume",
    },
  ],
  links: {
    github: "https://github.com/davvidlee/",
    linkedin: "https://linkedin.com/in/david-lee-305b9422b/",
  },
};
