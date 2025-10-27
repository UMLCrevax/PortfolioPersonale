import { useTranslation } from 'react-i18next';
import { Building2, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Experience = {
  id: string;
  title_it: string;
  title_en: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'internship' | 'contract';
  period_start: string;
  period_end: string | null;
  description_it: string;
  description_en: string;
  technologies?: string[];
  icon?: LucideIcon;
};

const experienceData: Experience[] = [
  {
    id: '1',
    title_it: 'Sviluppatore Applicazioni',
    title_en: 'Application Developer',
    company: '4 Zeta srl',
    location: 'Novara, Piemonte, Italia',
    type: 'internship',
    period_start: '2025-03-01',
    period_end: '2025-05-31',
    description_it: 'Stage Curriculare Universitario come sviluppatore di applicazioni web e PWA. Principali attività:\n- Sviluppo di applicazioni web responsive\n- Implementazione di Progressive Web Apps (PWA)\n- Collaborazione con il team di sviluppo\n- Utilizzo di moderne tecnologie web',
    description_en: 'University Curricular Internship as a web and PWA application developer. Main activities:\n- Development of responsive web applications\n- Implementation of Progressive Web Apps (PWA)\n- Collaboration with the development team\n- Use of modern web technologies',
    technologies: ['React', 'Angular', 'TypeScript', 'PWA', 'REST API'],
    icon: Building2
  }
];

export function ExperienceSection() {
  const { t, i18n } = useTranslation();

  const formatDate = (date: string | null) => {
    if (!date) return t('experience.present');
    return new Date(date).toLocaleDateString(i18n.language, {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <section id="experience" className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-neutral-50">{t('experience.title')}</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">{t('experience.subtitle')}</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-700"></div>
          <div className="space-y-12">
            {experienceData.map((exp: Experience, index: number) => {
            const title = i18n.language === 'it' ? exp.title_it : exp.title_en;
            const description = i18n.language === 'it' ? exp.description_it : exp.description_en;
            const Icon = exp.icon || Briefcase;

            return (
              <div
                key={exp.id}
                className="relative pl-20 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute left-0 p-4 bg-neutral-900 dark:bg-neutral-50 rounded-xl group-hover:scale-110 transition-transform duration-300 z-10">
                  <Icon size={24} className="text-white dark:text-neutral-900" />
                </div>

                <div className="p-8 rounded-2xl bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all duration-300 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-lg">
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full mb-2">
                          {t(`experience.${exp.type}`)}
                        </span>
                        <h3 className="text-2xl font-bold dark:text-neutral-50">{title}</h3>
                      </div>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 sm:mt-0">
                        {formatDate(exp.period_start)} - {formatDate(exp.period_end)}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <p className="text-lg text-neutral-600 dark:text-neutral-300 font-medium">{exp.company}</p>
                      <p className="text-neutral-500 dark:text-neutral-400">{exp.location}</p>
                    </div>

                    <div className="prose prose-neutral dark:prose-invert">
                      {description.split('\n').map((paragraph, i) => (
                        <p key={i} className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs font-medium bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
