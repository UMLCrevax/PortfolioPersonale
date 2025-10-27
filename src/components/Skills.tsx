import { useTranslation } from 'react-i18next';
import {
  Code,
  Database,
  GitBranch,
  Globe,
  Server,
  Terminal,
  Layout,
  Layers,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Skill = {
  id: string;
  name: string;
  description_it: string;
  description_en: string;
  icon: LucideIcon;
  category: string;
  image?: string;
  technologies?: string[];
};

const skillsData: Skill[] = [
  // Linguaggi di Programmazione
  {
    id: '1',
    name: 'JavaScript/TypeScript',
    description_it: 'Sviluppo full-stack con JavaScript moderno, TypeScript e Node.js',
    description_en: 'Full-stack development with modern JavaScript, TypeScript and Node.js',
    icon: Code,
    category: 'programming_languages',
    image: '/images/skills/javascript.png',
    technologies: ['JavaScript ES6+', 'TypeScript', 'Node.js', 'Express.js', 'npm/yarn', 'WebSocket']
  },
  {
    id: '2',
    name: 'Java',
    description_it: 'Sviluppo di applicazioni enterprise, desktop e Android',
    description_en: 'Enterprise, desktop and Android application development',
    icon: Code,
    category: 'programming_languages',
    image: '/images/skills/java.png',
    technologies: ['Java SE', 'Spring Boot', 'JUnit', 'Gradle/Maven', 'JPA/Hibernate', 'Android SDK']
  },
  {
    id: '3',
    name: 'C/C#/.NET',
    description_it: 'Sviluppo di applicazioni desktop, sistemi e giochi',
    description_en: 'Desktop applications, systems and game development',
    icon: Terminal,
    category: 'programming_languages',
    image: '/images/skills/csharp.png',
    technologies: ['C#', '.NET Core', 'ASP.NET', 'Entity Framework', 'LINQ', 'WPF/WinForms']
  },
  {
    id: '4',
    name: 'Python',
    description_it: 'Sviluppo backend, scripting, automazione e data science',
    description_en: 'Backend development, scripting, automation and data science',
    icon: Code,
    category: 'programming_languages',
    image: '/images/skills/python.png',
    technologies: ['Python 3', 'Django', 'Flask', 'FastAPI', 'Pandas', 'Pytest']
  },
  {
    id: '5',
    name: 'SQL & Query Languages',
    description_it: 'Linguaggi di interrogazione e manipolazione dati',
    description_en: 'Data query and manipulation languages',
    icon: Database,
    category: 'programming_languages',
    image: '/images/skills/database.png',
    technologies: ['SQL', 'PostgreSQL', 'MySQL', 'T-SQL', 'PL/SQL', 'NoSQL']
  },
   {
    id: '8',
    name: 'Backend Development',
    description_it: 'Sviluppo di API RESTful e architetture server',
    description_en: 'RESTful API and server architecture development',
    icon: Server,
    category: 'programming_languages',
    image: '/images/skills/backend.png',
    technologies: ['REST API', 'Node.js', 'Express', 'Spring Boot']
  },
  
  // Tecnologie Web
  {
    id: '5',
    name: 'HTML/CSS',
    description_it: 'Sviluppo frontend responsive e accessibile con framework CSS moderni',
    description_en: 'Responsive and accessible frontend development with modern CSS frameworks',
    icon: Layout,
    category: 'web_technologies',
    image: '/images/skills/html-css.png',
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Sass', 'Responsive Design']
  },
  {
    id: '6',
    name: 'React',
    description_it: 'Sviluppo di applicazioni web moderne con React e il suo ecosistema',
    description_en: 'Modern web application development with React and its ecosystem',
    icon: Globe,
    category: 'web_technologies',
    image: '/images/skills/react.png',
    technologies: ['React', 'Next.js', 'Redux', 'React Query', 'Vite', 'React Router']
  },
  {
    id: '7',
    name: 'Angular',
    description_it: 'Sviluppo di applicazioni web enterprise con Angular',
    description_en: 'Enterprise web application development with Angular',
    icon: Globe,
    category: 'web_technologies',
    image: '/images/skills/angular.png',
    technologies: ['Angular', 'RxJS', 'NgRx', 'Material Design', 'Angular CLI']
  },
 
  
  
  // DevOps & Tools
  {
    id: '9',
    name: 'Git',
    description_it: 'Controllo versione e collaborazione con Git',
    description_en: 'Version control and collaboration with Git',
    icon: GitBranch,
    category: 'devops',
    image: '/images/skills/git.png',
    technologies: ['Git', 'GitHub', 'GitLab']
  },
  {
    id: '10',
    name: 'Software Architecture',
    description_it: 'Progettazione di architetture software scalabili',
    description_en: 'Scalable software architecture design',
    icon: Layers,
    category: 'devops',
    image: '/images/skills/architecture.png',
    technologies: ['Microservices', 'REST', 'MVC', 'Clean Architecture']
  }
];

export function Skills() {
  const { t, i18n } = useTranslation();

  const categories = {
    programming_languages: {
      title_it: 'Linguaggi di Programmazione',
      title_en: 'Programming Languages'
    },
    web_technologies: {
      title_it: 'Tecnologie Web',
      title_en: 'Web Technologies'
    },
    backend: {
      title_it: 'Backend & Database',
      title_en: 'Backend & Database'
    },
    devops: {
      title_it: 'DevOps & Architettura',
      title_en: 'DevOps & Architecture'
    }
  };

  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-neutral-50">{t('skills.title')}</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">{t('skills.subtitle')}</p>
        </div>

        <div className="space-y-16">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-8 text-center dark:text-neutral-50">
                {i18n.language === 'it' 
                  ? categories[category as keyof typeof categories].title_it 
                  : categories[category as keyof typeof categories].title_en}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  const description = i18n.language === 'it' ? skill.description_it : skill.description_en;

                  return (
                    <div
                      key={skill.id}
                      className="group p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-300 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-lg transform hover:-translate-y-1"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-white dark:bg-neutral-700 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                          <Icon size={32} className="text-neutral-900 dark:text-neutral-50" />
                        </div>
                        {skill.image && (
                          <div className="w-16 h-16 overflow-hidden rounded-lg border border-neutral-200">
                            <img
                              src={skill.image}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 dark:text-neutral-50">{skill.name}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">{description}</p>
                      {skill.technologies && skill.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {skill.technologies.map((tech, techIndex) => (
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
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
