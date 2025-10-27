import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { supabase, type Experience } from '../lib/supabase';
import { Briefcase } from 'lucide-react';

export function ExperienceSection() {
  const { t, i18n } = useTranslation();
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const { data, error } = await supabase
        .from('experiences')
        .select('*')
        .order('period_start', { ascending: false });

      if (error) throw error;
      setExperiences(data || []);
    } catch (error) {
      console.error('Error fetching experiences:', error);
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
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('experience.title')}</h2>
            <p className="text-neutral-600 text-lg">{t('experience.subtitle')}</p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-900"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 px-6 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('experience.title')}</h2>
          <p className="text-neutral-600 text-lg">{t('experience.subtitle')}</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const title = i18n.language === 'it' ? exp.title_it : exp.title_en;
            const description = i18n.language === 'it' ? exp.description_it : exp.description_en;

            return (
              <div
                key={exp.id}
                className="group relative p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-neutral-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 p-4 bg-neutral-900 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Briefcase size={24} className="text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-2xl font-bold">{title}</h3>
                      <span className="text-sm text-neutral-500 mt-1 sm:mt-0">
                        {formatDate(exp.period_start)} - {formatDate(exp.period_end)}
                      </span>
                    </div>

                    <p className="text-lg text-neutral-600 mb-4 font-medium">{exp.company}</p>

                    {description && (
                      <p className="text-neutral-600 leading-relaxed">{description}</p>
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
