import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      nav: {
        home: 'Home',
        about: 'Chi sono',
        experience: 'Esperienza',
        education: 'Formazione',
        projects: 'Progetti',
        cv: 'Curriculum',
        contact: 'Contatti',
      },
      hero: {
        greeting: 'Benvenuta/o, sono',
        title: 'Andrea Crevacore',
        subtitle: 'Sviluppatore Web & PWA Specialist',
        description: 'Appassionato di sviluppo web moderno, Progressive Web Apps, e cloud technologies. Specializzato in React, Angular e sempre alla ricerca di nuove sfide nel mondo DevOps e AWS.',
        cta: 'Scarica il CV',
        viewProjects: 'Vedi i Progetti',
      },
      skills: {
        title: 'Competenze',
        subtitle: 'Le tecnologie e gli strumenti con cui lavoro',
      },
      experience: {
        title: 'Esperienza Lavorativa',
        subtitle: 'Il mio percorso professionale',
        present: 'Presente',
        'full-time': 'Tempo Pieno',
        'part-time': 'Part-Time',
        'internship': 'Stage',
        'contract': 'Contratto',
      },
      education: {
        title: 'Formazione & Certificazioni',
        subtitle: 'Il mio percorso accademico e professionale',
        degree: 'Laurea',
        diploma: 'Diploma',
        certification: 'Certificazione',
      },
      projects: {
        title: 'Progetti',
        subtitle: 'Alcuni dei miei lavori recenti',
        viewLive: 'Vedi Live',
        technologies: 'Tecnologie',
      },
      cv: {
        title: 'Curriculum Vitae',
        subtitle: 'Scarica il mio CV o richiedilo via email',
        download: 'Scarica CV',
        sendEmail: 'Inviami via Email',
        emailPlaceholder: 'Il tuo indirizzo email',
        send: 'Invia',
        success: 'CV inviato con successo!',
        error: 'Errore durante l\'invio. Riprova.',
      },
      footer: {
        rights: 'Tutti i diritti riservati',
        contact: 'Contattami',
      },
      admin: {
        title: 'Pannello Amministrazione',
        login: 'Accedi',
        logout: 'Esci',
        experiences: 'Esperienze',
        education: 'Formazione',
        skills: 'Competenze',
        projects: 'Progetti',
        cvUpload: 'Carica CV',
        add: 'Aggiungi',
        edit: 'Modifica',
        delete: 'Elimina',
        save: 'Salva',
        cancel: 'Annulla',
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        projects: 'Projects',
        cv: 'Resume',
        contact: 'Contact',
      },
      hero: {
        greeting: 'Hi, I\'m',
        title: 'Andrea Crevacore',
        subtitle: 'Web Developer & PWA Specialist',
        description: 'Passionate about modern web development, Progressive Web Apps, and cloud technologies. Specialized in React, Angular, and always seeking new challenges in DevOps and AWS.',
        cta: 'Download CV',
        viewProjects: 'View Projects',
      },
      skills: {
        title: 'Skills',
        subtitle: 'Technologies and tools I work with',
      },
      experience: {
        title: 'Work Experience',
        subtitle: 'My professional journey',
        present: 'Present',
        'full-time': 'Full-Time',
        'part-time': 'Part-Time',
        'internship': 'Internship',
        'contract': 'Contract',
      },
      education: {
        title: 'Education & Certifications',
        subtitle: 'My academic and professional path',
        degree: 'Degree',
        diploma: 'Diploma',
        certification: 'Certification',
      },
      projects: {
        title: 'Projects',
        subtitle: 'Some of my recent work',
        viewLive: 'View Live',
        technologies: 'Technologies',
      },
      cv: {
        title: 'Resume',
        subtitle: 'Download my CV or request it via email',
        download: 'Download CV',
        sendEmail: 'Send via Email',
        emailPlaceholder: 'Your email address',
        send: 'Send',
        success: 'CV sent successfully!',
        error: 'Error sending. Please try again.',
      },
      footer: {
        rights: 'All rights reserved',
        contact: 'Contact me',
      },
      admin: {
        title: 'Admin Panel',
        login: 'Login',
        logout: 'Logout',
        experiences: 'Experiences',
        education: 'Education',
        skills: 'Skills',
        projects: 'Projects',
        cvUpload: 'Upload CV',
        add: 'Add',
        edit: 'Edit',
        delete: 'Delete',
        save: 'Save',
        cancel: 'Cancel',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'it',
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
