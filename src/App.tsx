import React, { Suspense, lazy } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

// ✅ Lazy-load heavy components
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const WorkExperience = lazy(() => import('./components/WorkExperience'));
const Education = lazy(() => import('./components/Education'));

const theme = createTheme({
  palette: {
    primary: { main: '#2563eb' },
    secondary: { main: '#7c3aed' },
    background: { default: '#0f172a', paper: '#1e293b' },
    text: { primary: '#f8fafc', secondary: '#cbd5e1' },
  },
  typography: { fontFamily: 'Inter, system-ui, sans-serif' },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Load immediately */}
        <Header />
        <Hero />
        <About />

        {/* Lazy-load remaining sections */}
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <WorkExperience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </Suspense>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
