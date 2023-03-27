import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
export default function ServiceCard({ image, title, gif, orientation, link }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      orientation={orientation}
      href={link}
    >
      {!hovered && <Image src={image} fill alt="service" />}

      <div className="gif">
        <Image src={gif} fill alt="service" />
      </div>
      <h3>{title}</h3>
    </Card>
  );
}

const Card = styled(Link)`
  width: ${(props) => (props.orientation === 'vertical' ? '240px' : '400px')};
  height: ${(props) => (props.orientation === 'vertical' ? '400px' : '240px')};
  min-width: ${(props) =>
    props.orientation === 'vertical' ? '240px' : '400px'};
  min-height: ${(props) =>
    props.orientation === 'vertical' ? '400px' : '240px'};
  max-width: ${(props) =>
    props.orientation === 'vertical' ? '240px' : '400px'};
  max-height: ${(props) =>
    props.orientation === 'vertical' ? '400px' : '240px'};
  color: white;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  scroll-snap-align: start;

  cursor: pointer;
  img {
    object-fit: cover;
  }
  .gif {
    position: relative;
    height: 100%;
    width: 100%;
    object-fit: cover;
    pointer-events: none;
    margin-bottom: 0;
    padding-bottom: 0;
    z-index: -1;
  }
  h3 {
    position: absolute;
    top: 1rem;
    left: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    max-width: 10ch;
  }
`;
