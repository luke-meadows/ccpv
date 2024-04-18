import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/global/Footer';
import HomepageHero from '@/components/HomepageHero';
import MusicVideographyText from '@/components/service-page-service-explanations/MusicVideographyText';
import ServiceCards from '@/components/ServiceCards';
import Head from 'next/head';

export default function MusicVideos() {
  return (
    <div>
      <Head>
        <title>CCPV - Music Videography & Photography</title>
      </Head>
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
