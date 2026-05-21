/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Customization from './components/Customization';
import Process from './components/Process';
import BusinessProposal from './components/BusinessProposal';
import Pricing from './components/Pricing';
import BentoBuilder from './components/BentoBuilder';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-natural-bg text-natural-text font-sans selection:bg-natural-accent/30 selection:text-natural-bg">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Customization />
        <Process />
        <BusinessProposal />
        <Pricing />
        <BentoBuilder />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
