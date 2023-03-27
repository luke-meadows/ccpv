import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/global/Footer';
import HomepageHero from '@/components/HomepageHero';
import SportsText from '@/components/service-page-service-explanations/SportsText';
import ServiceCards from '@/components/ServiceCards';

export default function Sports() {
  return (
    <div>
      <HomepageHero
        title="SPORTS VIDEOGRAPHY & PHOTOGRAPHY"
        subtitle="From the First Swing of the Glove to the Last Kick of the Ball"
        videoUrlCode="sports"
      />
      <SportsText />
      <ServiceCards />
      <ContactSection />
      <Footer />
    </div>
  );
}
