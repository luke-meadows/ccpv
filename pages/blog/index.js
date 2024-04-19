import HomepageHero from '@/components/HomepageHero';
import BlogCategorySelection from '@/components/blog/BlogCategorySelection';
import BlogPosts from '@/components/blog/BlogPosts';
import ContactSection from '@/components/contact/ContactSection';
import Head from 'next/head';
import { useState } from 'react';

export default function Blog() {
  const [category, setCategory] = useState('all');
  return (
    <div>
      <Head>
        <title>CCPV - Blog</title>
      </Head>
      <HomepageHero
        title="BLOG"
        subtitle="Media Industry Insights"
        videoUrlCode="home"
        button="contact"
      />
      <BlogCategorySelection setCategory={setCategory} category={category} />
      <BlogPosts category={category} />
      <ContactSection />
    </div>
  );
}
