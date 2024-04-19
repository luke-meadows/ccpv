import { useRouter } from 'next/router';
import styled from 'styled-components';
import { blogPosts } from '@/lib/blogPosts';
import BlogHero from '@/components/blog/BlogHero';
import { useEffect } from 'react';
import { useState } from 'react';
import Container from '@/components/global/Container';
import Image from 'next/image';
import ContactSection from '@/components/contact/ContactSection';
import BlogBannerImage from '@/components/blog/BlogBannerImage';
import Link from 'next/link';
import Head from 'next/head';
import Footer from '@/components/global/Footer';
export default function BlogPage() {
  const [blog, setBlog] = useState({});
  const router = useRouter();
  useEffect(() => {
    const blogId =
      router.asPath.split('/')[router.asPath.split('/').length - 1];
    setBlog(blogPosts.filter((post) => post.id === parseInt(blogId))[0]);
  });
  return (
    <StyledBlogPage>
      <Head>
        <title>CCPV - Blog Post {blog?.title}</title>
      </Head>
      <BlogHero
        title={blog?.title}
        category={blog?.category}
        image={blog?.image}
      />
      <Container>
        <div className="blog-top-section">
          <div className="author">
            <div className="avatar">
              <Image src="/blog-images/cam-avatar.jpg" fill alt="avatar" />
            </div>
            <p>
              <span>{blog?.author}</span> - {blog?.date}
            </p>
          </div>
          <Link href="/blog">
            <button className="button-reverse2 hide-on-smallscreen">
              Back to blog posts
            </button>
          </Link>
        </div>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          fugiat a deserunt vitae reprehenderit magni, corporis id impedit
          officiis cum, dolorum dicta sequi aperiam non obcaecati blanditiis
          accusamus illo repellendus distinctio optio harum quo? Labore,
          repudiandae culpa ullam modi fugit minima corrupti ab quasi qui maxime
          vero dolor. Sapiente quisquam atque animi beatae tempore ab distinctio
          eius autem facilis, numquam quas! Enim incidunt hic unde, pariatur
          molestiae aut vero, cum voluptatum architecto distinctio placeat vitae
          cupiditate? Quae provident alias pariatur, hic odit nam, libero ipsam
          tenetur aut ex dolores possimus a voluptates, laborum quos culpa
          adipisci. Eligendi architecto distinctio excepturi.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          fugiat a deserunt vitae reprehenderit magni, corporis id impedit
          officiis cum, dolorum dicta sequi aperiam non obcaecati blanditiis
          accusamus illo repellendus distinctio optio harum quo? Labore,
          repudiandae culpa ullam modi fugit minima corrupti ab quasi qui maxime
          vero dolor. Sapiente quisquam atque animi beatae tempore ab distinctio
          eius autem facilis, numquam quas! Enim incidunt hic unde, pariatur
          molestiae aut vero, cum voluptatum architecto distinctio placeat vitae
          cupiditate? Quae provident alias pariatur, hic odit nam, libero ipsam
          tenetur aut ex dolores possimus a voluptates, laborum quos culpa
          adipisci. Eligendi architecto distinctio excepturi.
        </p>
      </Container>
      <BlogBannerImage image={blog?.image} />
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          fugiat a deserunt vitae reprehenderit magni, corporis id impedit
          officiis cum, dolorum dicta sequi aperiam non obcaecati blanditiis
          accusamus illo repellendus distinctio optio harum quo? Labore,
          repudiandae culpa ullam modi fugit minima corrupti ab quasi qui maxime
          vero dolor. Sapiente quisquam atque animi beatae tempore ab distinctio
          eius autem facilis, numquam quas! Enim incidunt hic unde, pariatur
          molestiae aut vero, cum voluptatum architecto distinctio placeat vitae
          cupiditate? Quae provident alias pariatur, hic odit nam, libero ipsam
          tenetur aut ex dolores possimus a voluptates, laborum quos culpa
          adipisci. Eligendi architecto distinctio excepturi.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          fugiat a deserunt vitae reprehenderit magni, corporis id impedit
          officiis cum, dolorum dicta sequi aperiam non obcaecati blanditiis
          accusamus illo repellendus distinctio optio harum quo? Labore,
          repudiandae culpa ullam modi fugit minima corrupti ab quasi qui maxime
          vero dolor. Sapiente quisquam atque animi beatae tempore ab distinctio
          eius autem facilis, numquam quas! Enim incidunt hic unde, pariatur
          molestiae aut vero, cum voluptatum architecto distinctio placeat vitae
          cupiditate? Quae provident alias pariatur, hic odit nam, libero ipsam
          tenetur aut ex dolores possimus a voluptates, laborum quos culpa
          adipisci. Eligendi architecto distinctio excepturi.
        </p>
      </Container>
      <ContactSection />
      <Footer />
    </StyledBlogPage>
  );
}
const StyledBlogPage = styled.main`
  .blog-top-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .author {
    display: flex;
    align-items: center;
    gap: 1rem;
    .avatar {
      height: 3rem;
      width: 3rem;
      aspect-ratio: 1;
      position: relative;
      overflow: hidden;
    }
    span {
      font-weight: 600;
    }
  }
`;
