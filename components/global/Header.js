import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import ServicesNavDropdown from '../ServicesNavDropdown';
import Logo from './Logo';
import Link from 'next/link';

export default function Header({
  setServicesHovered,
  servicesHovered,
  setShowMobileNav,
  showMobileNav,
}) {
  return (
    <StyledHeader>
      <Logo variant="white" />
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <div
          className={`services-link ${servicesHovered ? 'hovered' : ''}`}
          onMouseEnter={() => setServicesHovered(true)}
          onMouseLeave={() => setServicesHovered(false)}
        >
          <Link href="/services">Services</Link>
          {servicesHovered && <ServicesNavDropdown />}
        </div>
        {/* <Link href="/blog">Blog</Link> */}
        <Link href="/contact">Contact Us</Link>
      </nav>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mobile-nav-icon"
        onClick={() => setShowMobileNav(!showMobileNav)}
      >
        <i className={showMobileNav ? 'icon-cancel' : 'icon-menu-1'} />
      </motion.div>
    </StyledHeader>
  );
}
const StyledHeader = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;
  nav {
    display: flex;
    align-items: center;
    a {
      font-size: 0.9rem;
      padding: 1rem;
      &:hover {
        background: var(--green);
      }
    }
  }

  .services-link {
    position: relative;
    background: ${(props) => (props.servicesHovered ? 'var(--green)' : '')};
    a {
      background: ${(props) => (props.servicesHovered ? 'var(--green)' : '')};
    }
  }
  .hovered {
    background: var(--green);
    a {
      background: var(--green);
    }
  }

  .mobile-nav-icon {
    display: none;
    pointer-events: none;
    border-radius: 2px;
    /* background: var(--green); */
    justify-content: flex-end;
    i {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 1100px) {
    padding: 0 4rem;
  }

  @media only screen and (max-width: 600px) {
    position: fixed;
    padding: 0rem 1rem;
    height: 5rem;
    background: ${(props) => (props.scrollPosition > 10 ? 'black' : '')};
    nav {
      display: none;
      pointer-events: none;
    }
    .mobile-nav-icon {
      display: flex;
      pointer-events: all;
      i:hover {
        color: white;
      }
    }
  }
`;
