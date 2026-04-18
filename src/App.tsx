import { useState, useRef } from 'react';
import StarCanvas from './components/StarCanvas';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Card from './components/Card';
import About from './components/tabs/About';
import Skills from './components/tabs/Skills';
import Experience from './components/tabs/Experience';
import Docs from './components/tabs/Docs';
import Footer from './components/Footer';

type Tab = 'about' | 'skills' | 'exp' | 'docs';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('about');
  const navRef = useRef<HTMLDivElement>(null);

  const handleTabSelect = (tab: Tab) => {
    setActiveTab(tab);
    if (navRef.current) {
      window.scrollTo({ top: navRef.current.offsetTop - 20, behavior: 'smooth' });
    }
  };

  const tabContent: Record<Tab, JSX.Element> = {
    about: <About />,
    skills: <Skills />,
    exp: <Experience />,
    docs: <Docs />,
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        backgroundColor: '#020406',
        color: '#e0e0e0',
        margin: 0,
        overflowX: 'hidden',
        minHeight: '100vh',
      }}
    >
      <StarCanvas />
      <div style={{ maxWidth: 900, margin: 'auto', padding: 20, position: 'relative' }}>
        <Header />
        <div ref={navRef}>
          <Navigation active={activeTab} onSelect={handleTabSelect} />
        </div>
        <Card key={activeTab}>{tabContent[activeTab]}</Card>
        <Footer />
      </div>
    </div>
  );
}
