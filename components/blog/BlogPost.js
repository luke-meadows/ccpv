import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
export default function BlogPost({ post }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <StyledBlogPost>
        <div className="image">
          <Image src={post.image} fill alt="Blog Image" />
        </div>
        <p className="category">{post.category}</p>
        <h5>{post.title}</h5>
        <p className="author-date">
          {post.author} - {post.date}
        </p>
      </StyledBlogPost>
    </Link>
  );
}
const StyledBlogPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .image {
    aspect-ratio: 16/9;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 2px;
    overflow: hidden;
    img {
      object-fit: cover;
    }
  }
  .category {
    /* width: fit-content; */
    text-align: center;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    font-weight: 500;
    background: #009288;
    color: #009288;
    color: #fff;
    border-radius: 2px;
  }
  .author-date {
    color: gray;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.75rem;
  }
`;
