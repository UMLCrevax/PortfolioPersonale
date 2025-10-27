import { useTranslation } from 'react-i18next';
import { Download, ArrowDown } from 'lucide-react';

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
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <p className="text-neutral-600 text-lg mb-2">{t('hero.greeting')}</p>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <p className="text-2xl md:text-3xl text-neutral-700 mb-6 font-light">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={scrollToCV}
              className="group px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Download size={20} />
              <span className="font-medium">{t('hero.cta')}</span>
            </button>

            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-white text-neutral-900 rounded-full hover:bg-neutral-50 transition-all duration-300 border-2 border-neutral-200 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span className="font-medium">{t('hero.viewProjects')}</span>
            </button>
          </div>
        </div>

        <div className="mt-20 animate-bounce">
          <ArrowDown className="mx-auto text-neutral-400" size={32} />
        </div>
      </div>
    </section>
  );
}
