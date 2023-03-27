import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';
export default function MobileNav({ setShowMobileNav }) {
  return (
    <StyledMobileNav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
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

const StyledMobileNav = styled(motion.nav)`
  height: 100vh;
  width: 100vw;
  background: black;
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
