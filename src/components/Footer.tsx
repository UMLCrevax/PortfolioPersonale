import { useTranslation } from 'react-i18next';
import { Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/andrea-crevacore',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/andreacrevacore',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:andrea.crevacore@example.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="py-12 px-6 bg-neutral-900 dark:bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-white dark:text-neutral-50">Andrea Crevacore</h3>
            <p className="text-neutral-400 dark:text-neutral-500">
              © {new Date().getFullYear()} {t('footer.rights')}
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-neutral-800 dark:bg-neutral-800 rounded-full hover:bg-neutral-700 dark:hover:bg-neutral-700 transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
