import React, { useState } from 'react';
import { LanguageProvider } from './hooks/useLanguage.jsx';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <LanguageProvider>
      <div className="App">
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        
        <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <Header />
          <main>
            <Hero />
            <AboutMe />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
