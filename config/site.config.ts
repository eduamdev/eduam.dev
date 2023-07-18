interface SiteConfig {
  name: string;
  email: string;
  url: string;
  description: string;
  availableForWork: boolean;
  links: {
    twitter?: string;
    github: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Eduardo Ambriz",
  email: "eduardo.roamz@gmail.com",
  url: "https://eduardoambriz.com",
  description: "",
  availableForWork: true,
  links: {
    github: "https://github.com/edroamz",
  },
};
