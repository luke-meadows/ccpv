import styled from 'styled-components';
import Container from '../global/Container';
export default function BlogCategorySelection() {
  return (
    <StyledBlogCategorySelection>
      <button className="button-reverse no-border active" name="all-categories">
        All Categories
      </button>
      <button className="button-reverse" name="all-categories">
        Music Videos
      </button>
      <button className="button-reverse" name="all-categories">
        Live Events
      </button>
      <button className="button-reverse" name="all-categories">
        Weddings
      </button>
      <button className="button-reverse" name="all-categories">
        Product & Explainers
      </button>
      <button className="button-reverse" name="all-categories">
        Sports
      </button>
      <button className="button-reverse" name="all-categories">
        Corporate Content
      </button>
      <button className="button-reverse" name="all-categories">
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
  }
`;
