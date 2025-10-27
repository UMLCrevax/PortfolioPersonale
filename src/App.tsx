import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { ExperienceSection } from './components/Experience';
import { EducationSection } from './components/Education';
import { Projects } from './components/Projects';
import { CV } from './components/CV';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/AdminPanel';

function HomePage() {
  return (
    <div id="home" className="min-h-screen bg-white dark:bg-neutral-900">
      <Navigation />
      <Hero />
      <Skills />
      <ExperienceSection />
      <EducationSection />
      <Projects />
      <CV />
      <Footer />
    </div>
  );
}

function App() {
  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
