import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import FeaturesPage from './pages/FeaturesPage'
import TeamPage from './pages/TeamPage'
import FAQPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import DownloadPage from './pages/DownloadPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import BenchmarksPage from './pages/BenchmarksPage'

function HomePage() {
  return (
    <main className="flex-grow">
      <Hero />
      <Features />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col" style={{ overflowX: 'hidden' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/benchmarks" element={<BenchmarksPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
