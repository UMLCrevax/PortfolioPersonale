import { useTranslation } from 'react-i18next';
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCV = () => {
    const cvSection = document.getElementById('cv');
    cvSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-2">{t('hero.greeting')}</p>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <p className="text-2xl md:text-3xl text-neutral-700 dark:text-neutral-300 mb-6 font-light">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="space-y-8">
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={scrollToCV}
              className="group px-8 py-4 bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Download size={20} />
              <span className="font-medium">{t('hero.cta')}</span>
            </button>

            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all duration-300 border-2 border-neutral-200 dark:border-neutral-700 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span className="font-medium">{t('hero.viewProjects')}</span>
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/UMLCrevax" target="_blank" rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50 transition-colors duration-300">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/andrea-crevacore-8b686934a/" target="_blank" rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50 transition-colors duration-300">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:andreacrevacore@gmail.com"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50 transition-colors duration-300">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        </div>

        <div className="mt-20 animate-bounce">
          <ArrowDown className="mx-auto text-neutral-400" size={32} />
        </div>
      </div>
    </section>
  );
}
