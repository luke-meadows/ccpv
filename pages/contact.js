import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/global/Footer';
import HomepageHero from '@/components/HomepageHero';
export default function Contact() {
  return (
    <div>
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
