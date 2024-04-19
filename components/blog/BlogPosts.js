import styled from 'styled-components';
import BlogPost from './BlogPost';
import Container from '../global/Container';
import { blogPosts } from '@/lib/blogPosts';
export default function BlogPosts() {
  return (
    <Container>
      <StyledBlogPosts>
        {blogPosts.map((post, i) => (
          <BlogPost post={post} />
        ))}
      </StyledBlogPosts>
    </Container>
  );
}
const StyledBlogPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem 1.5rem;
`;
