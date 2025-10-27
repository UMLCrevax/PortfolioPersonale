import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { supabase, type Education } from '../lib/supabase';
import { GraduationCap, Award } from 'lucide-react';

export function EducationSection() {
  const { t, i18n } = useTranslation();
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = async () => {
    try {
      const { data, error } = await supabase
        .from('education')
        .select('*')
        .order('period_start', { ascending: false });

      if (error) throw error;
      setEducation(data || []);
    } catch (error) {
      console.error('Error fetching education:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string | null) => {
    if (!date) return t('experience.present');
    return new Date(date).toLocaleDateString(i18n.language, {
      year: 'numeric',
      month: 'short'
    });
  };

  if (loading) {
    return (
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('education.title')}</h2>
            <p className="text-neutral-600 text-lg">{t('education.subtitle')}</p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-900"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('education.title')}</h2>
          <p className="text-neutral-600 text-lg">{t('education.subtitle')}</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-200"></div>

          <div className="space-y-12">
            {education.map((edu, index) => {
              const title = i18n.language === 'it' ? edu.title_it : edu.title_en;
              const description = i18n.language === 'it' ? edu.description_it : edu.description_en;
              const Icon = edu.type === 'degree' ? GraduationCap : Award;

              return (
                <div
                  key={edu.id}
                  className="relative pl-20 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute left-0 p-4 bg-neutral-900 rounded-xl group-hover:scale-110 transition-transform duration-300 z-10">
                    <Icon size={24} className="text-white" />
                  </div>

                  <div className="p-8 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-all duration-300 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-neutral-200 rounded-full mb-2">
                          {t(`education.${edu.type}`)}
                        </span>
                        <h3 className="text-2xl font-bold">{title}</h3>
                      </div>
                      <span className="text-sm text-neutral-500 mt-2 sm:mt-0">
                        {formatDate(edu.period_start)} - {formatDate(edu.period_end)}
                      </span>
                    </div>

                    <p className="text-lg text-neutral-600 mb-4 font-medium">{edu.institution}</p>

                    {description && (
                      <p className="text-neutral-600 leading-relaxed">{description}</p>
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
