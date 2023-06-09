import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/global/Footer';
import HomepageHero from '@/components/HomepageHero';
import ExhibitionsText from '@/components/service-page-service-explanations/ExhibitionsText';
import ServiceCards from '@/components/ServiceCards';

export default function Exhibitions() {
  return (
    <div>
      <HomepageHero
        title="EXHIBITION VIDEOGRAPHY & PHOTOGRAPHY"
        subtitle="Bringing the Buzz & Excitement to an Online Audience"
        videoUrlCode="exhibition"
      />
      <ExhibitionsText />
      <ServiceCards />
      <ContactSection />
      <Footer />
    </div>
  );
}
