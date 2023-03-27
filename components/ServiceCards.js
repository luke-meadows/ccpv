import styled from 'styled-components';
import MusicImage from '../public/service-card-images/images/music-videos.png';
import LiveEventsImage from '../public/service-card-images/images/live-events.png';
import WeddingImage from '../public/service-card-images/images/weddings.png';
import ProductExplainerImage from '../public/service-card-images/images/product-explainers.png';
import SportImage from '../public/service-card-images/images/sports.png';
import CorporateImage from '../public/service-card-images/images/corporate.png';
import ExhibitionImage from '../public/service-card-images/images/exhibitions.png';
import MusicGif from '../public/service-card-images/gifs/landscape/music-videos.gif';
import LiveEventsGif from '../public/service-card-images/gifs/landscape/live-events.gif';
import WeddingGif from '../public/service-card-images/gifs/landscape/weddings.gif';
import ProductExplainerGif from '../public/service-card-images/gifs/landscape/product-explainers.gif';
import SportGif from '../public/service-card-images/gifs/landscape/sports.gif';
import CorporateGif from '../public/service-card-images/gifs/landscape/corporate.gif';
import ExhibitionGif from '../public/service-card-images/gifs/landscape/exhibitions.gif';
import { useRef } from 'react';
import ServiceCard from './ServiceCard';

export default function ServiceCards({ orientation = 'vertical' }) {
  const carouselRef = useRef();
  function scrollFroward() {
    console.dir(carouselRef.current.scrollLeft);
    carouselRef.current.scrollTo(carouselRef.current.scrollLeft + 600, 0);
  }
  function scrollBackward() {
    console.dir(carouselRef.current.scrollLeft);
    carouselRef.current.scrollTo(carouselRef.current.scrollLeft - 600, 0);
  }
  return (
    <StyledCards>
      <div className="cards-header">
        <div>
          <h2>Our Services</h2>
          <p>See how we can help you</p>
        </div>
        <div className="navigation-arrows">
          <i className="icon-left-open-big" onClick={scrollBackward} />
          <i className="icon-right-open-big" onClick={scrollFroward} />
        </div>
      </div>
      <Carousel ref={carouselRef}>
        <ServiceCard
          image={MusicImage}
          gif={MusicGif}
          title="Music Content"
          orientation={orientation}
          link="/services/music-videos"
        />
        <ServiceCard
          image={LiveEventsImage}
          gif={LiveEventsGif}
          title="Live Event Content"
          orientation={orientation}
          link="/services/live-events"
        />
        <ServiceCard
          image={WeddingImage}
          gif={WeddingGif}
          title="Wedding Content"
          orientation={orientation}
          link="/services/weddings"
        />
        <ServiceCard
          image={ProductExplainerImage}
          gif={ProductExplainerGif}
          title="Product Content"
          orientation={orientation}
          link="/services/product-and-explainers"
        />
        <ServiceCard
          image={SportImage}
          gif={SportGif}
          title="Sport Content"
          orientation={orientation}
          link="/services/sports"
        />
        <ServiceCard
          image={CorporateImage}
          gif={CorporateGif}
          title="Corporate Content"
          orientation={orientation}
          link="/services/corporate"
        />
        <ServiceCard
          image={ExhibitionImage}
          gif={ExhibitionGif}
          title="Exhibition Content"
          orientation={orientation}
          link="/services/exhibitions"
        />
      </Carousel>
    </StyledCards>
  );
}

const StyledCards = styled.div`
  padding: 4rem 8rem 4rem 8rem;
  max-width: 1600px;
  margin: 0 auto;
  .cards-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
  }
  .navigation-arrows {
    display: flex;
    gap: 1rem;
    i {
      color: var(--green);
      cursor: pointer;
      font-size: 1.5rem;
    }
  }
  h2 {
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin-bottom: 2rem;
  }
`;

const Carousel = styled.div`
  overflow-y: scroll;
  scroll-snap-type: x mandatory;
  display: flex;
  gap: 1.4rem;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
