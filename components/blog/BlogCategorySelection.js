import styled from 'styled-components';
import Container from '../global/Container';
export default function BlogCategorySelection({ setCategory, category }) {
  return (
    <StyledBlogCategorySelection>
      <button
        className={`button-reverse no-border ${
          category === 'all' ? 'active' : ''
        }`}
        name="all"
        onClick={(e) => setCategory(e.currentTarget.name)}
      >
        All Categories
      </button>
      <button
        className={`button-reverse ${
          category === 'Music Videos' ? 'active' : ''
        }`}
        name="Music Videos"
        onClick={(e) => setCategory(e.currentTarget.name)}
      >
        Music Videos
      </button>
      <button
        className={`button-reverse ${
          category === 'Live Events' ? 'active' : ''
        }`}
        name="Live Events"
        onClick={(e) => setCategory(e.currentTarget.name)}
      >
        Live Events
      </button>
      <button
        className={`button-reverse ${category === 'Weddings' ? 'active' : ''}`}
        name="Weddings"
        onClick={(e) => setCategory(e.currentTarget.name)}
      >
        Weddings
      </button>
      <button
        className={`button-reverse ${
          category === 'Product & Explainers' ? 'active' : ''
        }`}
        name="Product & Explainers"
        onClick={(e) => setCategory(e.currentTarget.name)}
      >
        Product & Explainers
      </button>
      <button
        className={`button-reverse ${category === 'Sports' ? 'active' : ''}`}
        name="Sports"
        onClick={(e) => setCategory(e.currentTarget.name)}
      >
        Sports
      </button>
      <button
        className={`button-reverse ${category === 'corporate' ? 'active' : ''}`}
        name="Corporate"
        onClick={(e) => setCategory(e.currentTarget.name)}
      >
        Corporate Content
      </button>
      <button
        className={`button-reverse ${
          category === 'Exhibitions' ? 'active' : ''
        }`}
        name="Exhibitions"
        onClick={(e) => setCategory(e.currentTarget.name)}
      >
        Exhibitions
      </button>
    </StyledBlogCategorySelection>
  );
}
const StyledBlogCategorySelection = styled.div`
  border: 3px solid #009288;

  width: fit-content;
  max-width: 1600px;
  margin: 3rem auto 0 auto;
  display: flex;
  .no-border {
    border: none;
  }
  .active {
    color: white;
    background: #009288;
    border: 1px solid #009288;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
