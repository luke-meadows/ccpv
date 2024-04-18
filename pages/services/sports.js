import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/global/Footer';
import HomepageHero from '@/components/HomepageHero';
import SportsText from '@/components/service-page-service-explanations/SportsText';
import ServiceCards from '@/components/ServiceCards';
import Head from 'next/head';

export default function Sports() {
  return (
    <div>
      <Head>
        <title>CCPV - Sports Videography & Photography</title>
      </Head>
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
