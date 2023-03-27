import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/global/Footer';
import HomepageHero from '@/components/HomepageHero';
import WeddingsText from '@/components/service-page-service-explanations/WeddingsText';
import ServiceCards from '@/components/ServiceCards';

export default function Weddings() {
  return (
    <div>
      <HomepageHero
        title="WEDDING VIDEOGRAPHY & PHOTOGRAPHY"
        subtitle="Capturing Every Moment of the Big Day"
        videoUrlCode="wedding"
      />
      <WeddingsText />
      <ServiceCards />
      <ContactSection />
      <Footer />
    </div>
  );
}
