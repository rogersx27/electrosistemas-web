import Hero from './components/Hero/Hero';
import TVAnnouncement from './components/TVAnnouncement/TVAnnouncement';
import BrandMarquee from './components/BrandMarquee/BrandMarquee';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Hero />
      <TVAnnouncement speed={40} />
      <BrandMarquee />
      <Services />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
