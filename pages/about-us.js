import AboutOurFounder from '@/components/AboutOurFounder';
import Footer from '@/components/global/Footer';
import HomepageHero from '@/components/HomepageHero';
import OurCommitment from '@/components/OurCommitment';
import ServiceCards from '@/components/ServiceCards';
import Head from 'next/head';

export default function AboutUs() {
  return (
    <div>
      <Head>
        <title>CCPV - About us</title>
      </Head>
      <HomepageHero
        title="FIND OUT MORE ABOUT US"
        subtitle="Learn About the CCPV Journey"
      />
      <AboutOurFounder />
      <OurCommitment />
      <ServiceCards />
      <Footer />
    </div>
  );
}
