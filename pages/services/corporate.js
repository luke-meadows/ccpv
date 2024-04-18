import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/global/Footer';
import HomepageHero from '@/components/HomepageHero';
import CorporateText from '@/components/service-page-service-explanations/CorporateText';
import ServiceCards from '@/components/ServiceCards';
import Head from 'next/head';

export default function Corporate() {
  return (
    <div>
      <Head>
        <title>CCPV - Corporate Videography & Photography</title>
      </Head>
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
