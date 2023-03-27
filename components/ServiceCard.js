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
  /* vars and media queries can be found in ServiceCards.js */
  width: ${(props) =>
    props.orientation === 'vertical'
      ? 'var(--service-card-short-side)'
      : 'var(--service-card-long-side)'};
  height: ${(props) =>
    props.orientation === 'vertical'
      ? 'var(--service-card-long-side)'
      : 'var(--service-card-short-side)'};
  min-width: ${(props) =>
    props.orientation === 'vertical'
      ? 'var(--service-card-short-side)'
      : 'var(--service-card-long-side)'};
  min-height: ${(props) =>
    props.orientation === 'vertical'
      ? 'var(--service-card-long-side)'
      : 'var(--service-card-short-side)'};
  max-width: ${(props) =>
    props.orientation === 'vertical'
      ? 'var(--service-card-short-side)'
      : 'var(--service-card-long-side)'};
  max-height: ${(props) =>
    props.orientation === 'vertical'
      ? 'var(--service-card-long-side)'
      : 'var(--service-card-short-side)'};
  color: white;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  scroll-snap-align: start;
  border: none;
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
    border-radius: 10px;
    overflow: hidden;
  }
  h3 {
    position: absolute;
    top: 1rem;
    left: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    max-width: 10ch;
  }
  @media only screen and (max-width: 1100px) {
    width: ${(props) =>
      props.orientation === 'vertical'
        ? 'var(--service-card-short-side)'
        : 'var(--service-card-long-side)'};
    height: ${(props) =>
      props.orientation === 'vertical'
        ? 'var(--service-card-long-side)'
        : 'var(--service-card-short-side)'};
    min-width: ${(props) =>
      props.orientation === 'vertical'
        ? 'var(--service-card-short-side)'
        : 'var(--service-card-long-side)'};
    min-height: ${(props) =>
      props.orientation === 'vertical'
        ? 'var(--service-card-long-side)'
        : 'var(--service-card-short-side)'};
    max-width: ${(props) =>
      props.orientation === 'vertical'
        ? 'var(--service-card-short-side)'
        : 'var(--service-card-long-side)'};
    max-height: ${(props) =>
      props.orientation === 'vertical'
        ? 'var(--service-card-long-side)'
        : 'var(--service-card-short-side)'};
  }
  @media screen and (max-width: 600px) {
    .gif {
      display: none;
    }
  }
`;
