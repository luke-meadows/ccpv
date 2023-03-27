import Link from 'next/link';
import styled from 'styled-components';
export default function ServicesNavDropdown() {
  return (
    <StyledDropdown>
      <Link href="/services/music-videos">Music Videos</Link>
      <Link href="/services/live-events">Live Events</Link>
      <Link href="/services/weddings">Weddings</Link>
      <Link href="/services/product-and-explainers">Product & Explainers</Link>
      <Link href="/services/sports">Sports</Link>
      <Link href="/services/corporate">Corporate</Link>
      <Link href="/services/exhibitions">Exhibitions</Link>
    </StyledDropdown>
  );
}

const StyledDropdown = styled.div`
  position: absolute;
  top: 180%;
  background: var(--green);
  display: flex;
  flex-direction: column;
  min-width: 15rem;
  a {
    &:hover {
      background: #00655e !important;
    }
  }
`;
