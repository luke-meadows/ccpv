import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BlogPost from './BlogPost';
import Container from '../global/Container';
import { blogPosts } from '@/lib/blogPosts';
export default function BlogPosts({ category = 'all' }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (category === 'all') {
      setBlogs(blogPosts);
    } else {
      setBlogs(blogPosts.filter((post) => post.category === category));
    }
  }, [category]);
  return (
    <Container>
      <StyledBlogPosts>
        {blogs?.map((post, i) => (
          <BlogPost key={i} post={post} />
        ))}
      </StyledBlogPosts>
    </Container>
  );
}
const StyledBlogPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem 1.5rem;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
