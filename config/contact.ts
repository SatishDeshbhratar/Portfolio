export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
}

export interface Contact {
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  site: 'satishdeshbhratar.com',
  calendly: 'https://calendly.com/satishdeshbhratar',
  links: {
    github: 'https://github.com/SatishDeshbhratar',
    linkedin: 'https://www.linkedin.com/in/satish-deshbhratar/',
    email: 'mailto:satishdeshbhratar@gmail.com',
    buymeacoffee: 'https://www.buymeacoffee.com/satishdeshbhratar',
  },
};
