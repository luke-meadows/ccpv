import Footer from '@/components/global/Footer';
import HomepageHero from '@/components/HomepageHero';
import PhotographyText from '@/components/service-page-service-explanations/PhotographyText';
import VideographyText from '@/components/service-page-service-explanations/VideographyText';
import ServiceCards from '@/components/ServiceCards';

export default function Services() {
  return (
    <div>
      <HomepageHero
        title="OUR SERVICES"
        subtitle="We Capture Your Most Important Moments"
      />
      <VideographyText />
      <PhotographyText />
      <ServiceCards />
      <Footer />
    </div>
  );
}
