import { useState } from 'react';
import IndustrialNavbar from './components/layout/IndustrialNavbar/IndustrialNavbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import ProductShowcase from './components/sections/ProductShowcase/ProductShowcase';
import Portfolio from './components/Portfolio/Portfolio';
import ClientShowcase from './components/sections/ClientShowcase/ClientShowcase';
import ContactSection from './components/sections/ContactSection/ContactSection';
import QuoteModal from './components/sections/QuoteModal/QuoteModal';
import Footer from './components/Footer/Footer';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenQuoteModal = (product = null) => {
    setSelectedProduct(product);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <IndustrialNavbar />
      <main>
        <Hero onQuoteClick={handleOpenQuoteModal} />
        <Services />
        <ProductShowcase onQuoteClick={handleOpenQuoteModal} />
        <Portfolio />
        <ClientShowcase />
        <ContactSection />
      </main>
      <Footer />

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        preSelectedProduct={selectedProduct}
      />
    </>
  );
}

export default App;
