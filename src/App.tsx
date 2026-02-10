import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="convertwise-theme">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navigation />
        <main role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}