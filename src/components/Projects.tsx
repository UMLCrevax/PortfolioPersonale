import { useTranslation } from 'react-i18next';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description_it: string;
  description_en: string;
  technologies: string[];
  github_url: string;
  live_url?: string;
  image_url?: string;
  is_private: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Personale',
    description_it: 'Portfolio professionale sviluppato con React, TypeScript e Tailwind CSS. Include dark mode, internazionalizzazione e animazioni fluide.',
    description_en: 'Professional portfolio developed with React, TypeScript and Tailwind CSS. Features dark mode, internationalization and smooth animations.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'i18n'],
    github_url: 'https://github.com/UMLCrevax/PortfolioPersonale',
    live_url: 'https://andreacrevacore.com',
    image_url: './images/projects/portfolio-preview.png',
    is_private: false
  },
  {
    id: 2,
    title: 'RideRevolution',
    description_it: 'Applicazione web per la vendita di moto usate e social per motociclisti. RideRevolution è un applicazione basata su Node.js che utilizza il framework Express.js. Include funzionalità come autenticazione con Passport.js, caricamento di file tramite Multer e gestione dei dati tramite un database SQLite.',
    description_en: 'A web application for selling used motorcycles and social media for motorcyclists. RideRevolution is a Node.js-based application that uses the Express.js framework. It includes features such as authentication with Passport.js, file uploading via Multer, and data management via an SQLite database.',
    technologies: ['HTML', 'Node.js', 'SQLite', 'Express.js','JavaScript','Bootstrap'],
    github_url: 'https://github.com/UMLCrevax/RideRevolution',
    image_url: './images/projects/project2-preview.png',
    is_private: false
  },
  {
    id: 3,
    title: 'Sviluppo Full-Stack di una Progressive Web Application aziendale modulare',
    description_it: 'Progetto sviluppato durante lo stage universitario presso un\'azienda IT. Ho creato una PWA standard modulare come base per i clienti e successivamente sviluppato una versione personalizzata per un cliente specifico. Per motivi di riservatezza aziendale, i dettagli specifici non possono essere condivisi.',
    description_en: 'Project developed during university internship at an IT company. I created a modular standard PWA as a base for clients and subsequently developed a customized version for a specific client. Due to company confidentiality, specific details cannot be shared.',
    technologies: ['Angular','Ionic', 'Node.js', 'PostgreSQL', 'PWA', 'TypeScript'],
    github_url: '#',
    image_url: './images/projects/pwa-preview.png',
    is_private: true
  }
];

export function Projects() {
  const { t, i18n } = useTranslation();

  return (
    <section id="projects" className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-neutral-50">
            {t('projects.title')}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const description = i18n.language === 'it' 
              ? project.description_it 
              : project.description_en;

            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-white dark:bg-neutral-800 overflow-hidden hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {project.image_url && (
                  <div 
                    className={`aspect-video bg-neutral-100 overflow-hidden ${
                      project.is_private ? 'filter blur-sm' : ''
                    }`}
                  >
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 dark:text-neutral-50">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    {description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-2">
                      {t('projects.technologies')}:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {!project.is_private && project.github_url !== '#' && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-50 font-medium hover:gap-3 transition-all duration-200"
                      >
                        <Github size={20} />
                        {t('projects.viewCode')}
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-50 font-medium hover:gap-3 transition-all duration-200"
                      >
                        <ExternalLink size={20} />
                        {t('projects.viewLive')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}