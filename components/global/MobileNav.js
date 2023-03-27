import Link from 'next/link';
import styled from 'styled-components';
export default function MobileNav({ setShowMobileNav }) {
  return (
    <StyledMobileNav>
      <Link onClick={() => setShowMobileNav(false)} href="/">
        Home
      </Link>
      <Link onClick={() => setShowMobileNav(false)} href="/about-us">
        About Us
      </Link>
      <Link onClick={() => setShowMobileNav(false)} href="/services">
        Services
      </Link>
      <Link onClick={() => setShowMobileNav(false)} href="/contact">
        Contact Us
      </Link>
    </StyledMobileNav>
  );
}

const StyledMobileNav = styled.nav`
  height: 100vh;
  width: 100vw;
  background: var(--green);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  padding: 8rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  a {
    font-size: 2rem;
  }
`;
