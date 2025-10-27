import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { supabase, type Skill } from '../lib/supabase';
import * as Icons from 'lucide-react';

export function Skills() {
  const { t, i18n } = useTranslation();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setSkills(data || []);
    } catch (error) {
      console.error('Error fetching skills:', error);
    } finally {
      setLoading(false);
    }
  };

  const getIconComponent = (iconName: string) => {
    const Icon = (Icons as any)[iconName] || Icons.Code;
    return Icon;
  };

  if (loading) {
    return (
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('skills.title')}</h2>
            <p className="text-neutral-600 text-lg">{t('skills.subtitle')}</p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-900"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('skills.title')}</h2>
          <p className="text-neutral-600 text-lg">{t('skills.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = getIconComponent(skill.icon);
            const description = i18n.language === 'it' ? skill.description_it : skill.description_en;

            return (
              <div
                key={skill.id}
                className="group p-8 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-all duration-300 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 p-4 bg-white rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} className="text-neutral-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-neutral-600 leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
