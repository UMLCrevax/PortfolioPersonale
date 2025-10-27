import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <div id="home" className="min-h-screen bg-white">
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
