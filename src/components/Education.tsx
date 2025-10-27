import { useTranslation } from 'react-i18next';
import { GraduationCap, Award } from 'lucide-react';

type Education = {
  id: string;
  type: 'degree' | 'certification' | 'diploma';
  title_it: string;
  title_en: string;
  institution: string;
  period_start: string;
  period_end: string | null;
  description_it: string;
  description_en: string;
};

const educationData: Education[] = [
  {
    id: '1',
    type: 'degree',
    title_it: 'Laurea triennale in Scienze e Tecnologie Informatiche',
    title_en: 'Bachelor\'s Degree in Computer Science',
    institution: 'Università degli Studi del Piemonte Orientale',
    period_start: '2021-10-01',
    period_end: '2025-10-01',
    description_it: 'Laurea triennale in Informatica conseguita con votazione 95/110',
    description_en: 'Bachelor\'s Degree in Computer Science with final grade 95/110'
  },
  {
    id: '2',
    type: 'diploma',
    title_it: 'Diploma in Informatica',
    title_en: 'High School Diploma in Computer Science',
    institution: 'Istituto Tecnico Tecnologico "Giacomo Fauser"',
    period_start: '2016-09-01',
    period_end: '2020-06-30',
    description_it: 'Diploma di Istituto Tecnico Tecnologico indirizzo Informatica conseguito con votazione 86/100',
    description_en: 'Technical High School Diploma in Computer Science with final grade 86/100'
  },
  {
    id: '3',
    type: 'certification',
    title_it: 'Certificazione Responsive Web Design',
    title_en: 'Responsive Web Design Certification',
    institution: 'freeCodeCamp',
    period_start: '2021-09-01',
    period_end: '2021-09-01',
    description_it: 'Certificazione in Sviluppo Web e HTML, con focus su design responsivo',
    description_en: 'Web Development and HTML Certification, focusing on responsive design'
  }
];

export function EducationSection() {
  const { t, i18n } = useTranslation();

  const formatDate = (date: string | null) => {
    if (!date) return t('experience.present');
    return new Date(date).toLocaleDateString(i18n.language, {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <section id="education" className="py-20 px-6 bg-white dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-neutral-50">{t('education.title')}</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">{t('education.subtitle')}</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-700"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => {
              const title = i18n.language === 'it' ? edu.title_it : edu.title_en;
              const description = i18n.language === 'it' ? edu.description_it : edu.description_en;
              const Icon = edu.type === 'certification' ? Award : GraduationCap;

              return (
                <div
                  key={edu.id}
                  className="relative pl-20 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute left-0 p-4 bg-neutral-900 dark:bg-neutral-50 rounded-xl group-hover:scale-110 transition-transform duration-300 z-10">
                    <Icon size={24} className="text-white dark:text-neutral-900" />
                  </div>

                  <div className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-300 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full mb-2">
                          {t(`education.${edu.type}`)}
                        </span>
                        <h3 className="text-2xl font-bold dark:text-neutral-50">{title}</h3>
                      </div>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 sm:mt-0">
                        {formatDate(edu.period_start)} - {formatDate(edu.period_end)}
                      </span>
                    </div>

                    <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-4 font-medium">{edu.institution}</p>

                    {description && (
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{description}</p>
                    )}
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
