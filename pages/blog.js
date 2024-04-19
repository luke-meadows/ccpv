import HomepageHero from '@/components/HomepageHero';
import BlogCategorySelection from '@/components/blog/BlogCategorySelection';
import BlogPosts from '@/components/blog/BlogPosts';
import ContactSection from '@/components/contact/ContactSection';
import Head from 'next/head';

export default function Blog() {
  return (
    <div>
      <Head>
        <title>CCPV - Blog</title>
      </Head>
      <HomepageHero
        title="BLOG"
        subtitle="Insights from the Videography and Photography Industry"
        videoUrlCode="home"
        button="contact"
      />
      <BlogCategorySelection />
      <BlogPosts />
      <ContactSection />
    </div>
  );
}
