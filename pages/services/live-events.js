import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/global/Footer';
import HomepageHero from '@/components/HomepageHero';
import LiveEventsText from '@/components/service-page-service-explanations/LiveEventsText';
import ServiceCards from '@/components/ServiceCards';
import Head from 'next/head';

export default function LiveEvents() {
  return (
    <div>
      <Head>
        <title>CCPV - Live Events Videography & Photography</title>
      </Head>
      <HomepageHero
        title="LIVE EVENTS VIDEOGRAPHY"
        subtitle="For Fast-Paced Live Events"
        videoUrlCode="liveEvent"
      />
      <LiveEventsText />
      <ServiceCards />
      <ContactSection />
      <Footer />
    </div>
  );
}
