import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/global/Footer';
import HomepageHero from '@/components/HomepageHero';
import CorporateText from '@/components/service-page-service-explanations/CorporateText';
import ServiceCards from '@/components/ServiceCards';

export default function Corporate() {
  return (
    <div>
      <HomepageHero
        title="CORPORATE VIDEOGRAPHY & PHOTOGRAPHY"
        subtitle="Working with Startups to Multinational Corporations"
        videoUrlCode="corporate"
      />
      <CorporateText />
      <ServiceCards />
      <ContactSection />
      <Footer />
    </div>
  );
}
