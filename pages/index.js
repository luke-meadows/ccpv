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
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: '#2B373B' }}
        buttonStyle={{
          color: '#4e503b',
          fontSize: '14px',
          borderRadius: '3px',
        }}
        declineButtonStyle={{
          color: 'white',
          background: 'none',
          fontSize: '14px',
          borderRadius: '3px',
          border: '1px solid white',
        }}
        debug={true}
        enableDeclineButton
        onDecline={() => {
          alert('nay!');
        }}
        onAccept={() => {
          alert('yay!');
        }}
      >
        This website uses cookies to enhance the user experience.{' '}
      </CookieConsent>

      <Footer />
    </>
  );
}
