import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/global/Footer';
import HomepageHero from '@/components/HomepageHero';
import Head from 'next/head';
export default function Contact() {
  return (
    <div>
      <Head>
        <title>CCPV - Contact</title>
      </Head>
      <HomepageHero
        title="GET IN TOUCH WITH CCPV"
        subtitle="Our Team Are Always Happy to Help"
        button="none"
      />
      <ContactSection />
      <Footer />
    </div>
  );
}
