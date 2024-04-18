import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/global/Footer';
import HomepageHero from '@/components/HomepageHero';
import ProductAndExplainersText from '@/components/service-page-service-explanations/ProductAndExplainersText';
import ServiceCards from '@/components/ServiceCards';
import Head from 'next/head';

export default function ProductAndExplainers() {
  return (
    <div>
      <Head>
        <title>CCPV - Product & Explainer Videography & Photography</title>
      </Head>
      <HomepageHero
        title="PRODUCT & EXPLAINER VIDEOGRAPHY & PHOTOGRAPHY"
        subtitle="Showing Your Audience the Benefits of Your Offering"
        videoUrlCode="product"
      />
      <ProductAndExplainersText />
      <ServiceCards />
      <ContactSection />
      <Footer />
    </div>
  );
}
