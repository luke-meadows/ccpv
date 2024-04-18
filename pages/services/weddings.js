import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/global/Footer';
import HomepageHero from '@/components/HomepageHero';
import WeddingsText from '@/components/service-page-service-explanations/WeddingsText';
import ServiceCards from '@/components/ServiceCards';
import Head from 'next/head';

export default function Weddings() {
  return (
    <div>
      <Head>
        <title>CCPV - Wedding Videography & Photography</title>
      </Head>
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
