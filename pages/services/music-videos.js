import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/global/Footer';
import HomepageHero from '@/components/HomepageHero';
import MusicVideographyText from '@/components/service-page-service-explanations/MusicVideographyText';
import ServiceCards from '@/components/ServiceCards';

export default function MusicVideos() {
  return (
    <div>
      <HomepageHero
        title="MUSIC VIDEOGRAPHY & PHOTOGRAPHY"
        subtitle="Producing Your Artistic Vision"
        videoUrlCode="music"
      />
      <MusicVideographyText />
      <ServiceCards />
      <ContactSection />
      <Footer />
    </div>
  );
}
