import HomepageHero from '@/components/HomepageHero';
import Showreel from '@/components/Showreel';
import FindOutMoreWho from '@/components/FindOutMoreWho';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/global/Footer';
import Head from 'next/head';
import ServiceCards from '@/components/ServiceCards';

export default function Home() {
  return (
    <>
      <Head>
        <title>CCPV - Photography & Video</title>
      </Head>
      <HomepageHero
        title="SPECIALIST VIDEO & PHOTOGRAPHY SERVICES"
        subtitle="We Breath New Life into Your Reality"
        videoUrlCode="home"
        button="showreel"
      />

      <ServiceCards orientation="horizontal" />
      <Showreel />
      <FindOutMoreWho />
      <ContactSection topGap={true} />
      <Footer />
    </>
  );
}
