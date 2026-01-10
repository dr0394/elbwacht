import { useState } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ProblemSolution from '../components/ProblemSolution';
import TrustBadge from '../components/TrustBadge';
import Services from '../components/Services';
import QuarterSecurity from '../components/QuarterSecurity';
import AboutUs from '../components/AboutUs';
import Certifications from '../components/Certifications';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CookieBanner from '../components/CookieBanner';
import MultiStepForm from '../components/MultiStepForm';

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onOpenForm={() => setShowForm(true)} />
      <HeroSection onOpenForm={() => setShowForm(true)} />
      <ProblemSolution />
      <TrustBadge />
      <Services />
      <QuarterSecurity />
      <AboutUs onOpenForm={() => setShowForm(true)} />
      <Certifications />
      <Testimonials />
      <FAQ />
      <Contact onOpenForm={() => setShowForm(true)} />
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
      {showForm && <MultiStepForm onClose={() => setShowForm(false)} />}
    </div>
  );
}
