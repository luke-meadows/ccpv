import useWindowScroll from '@/lib/useWindowScroll';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import Logo from './global/Logo';
import MobileNav from './global/MobileNav';
import ContactButton from './hero-buttons/ContactButton';
import PlayShowreelButton from './hero-buttons/PlayShowreelButton';
import ServicesNavDropdown from './ServicesNavDropdown';
export default function HomepageHero({
  videoUrlCode = 'home',
  title,
  subtitle,
  button = 'contact',
}) {
  const [servicesHovered, setServicesHovered] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const scrollPosition = useWindowScroll();

  const videoUrlCodes = {
    home: '807653156',
    sports: '807638507',
    product: '807638428',
    corporate: '807638151',
    music: '807638356',
    liveEvent: '807638296',
    exhibition: '807638221',
    wedding: '807638575',
  };

  return (
    <StyledHero videoUrlCode={videoUrlCode}>
      <div className="vimeo-wrapper">
        <iframe
          src={`https://player.vimeo.com/video/${videoUrlCodes[videoUrlCode]}?background=1&autoplay=1&loop=1&byline=0&title=0muted=1`}
          frameborder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        ></iframe>
      </div>
      <Header servicesHovered={servicesHovered} scrollPosition={scrollPosition}>
        <Logo variant="white" />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <div
            className="services-link"
            onMouseEnter={() => setServicesHovered(true)}
            onMouseLeave={() => setServicesHovered(false)}
          >
            <Link href="/services">Services</Link>
            {servicesHovered && <ServicesNavDropdown />}
          </div>
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
      </Header>
      <Title>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {button === 'showreel' && <PlayShowreelButton />}
        {button === 'contact' && <ContactButton />}
      </Title>
      <div className="overlay" />
      <AnimatePresence>
        {showMobileNav && (
          <MobileNav
            setShowMobileNav={setShowMobileNav}
            showMobileNav={showMobileNav}
          />
        )}
      </AnimatePresence>
    </StyledHero>
  );
}

const StyledHero = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  color: white;
  overflow: hidden;
  .vimeo-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    overflow: hidden;
  }
  .vimeo-wrapper > iframe {
    width: 100%;
    height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    min-height: 100vh;
    min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    position: absolute;
    top: 50%;
    left: ${(props) => (props.videoUrlCode === 'home' ? '65%' : '60%')};
    transform: translate(-50%, -50%);
    scale: ${(props) => (props.videoUrlCode === 'home' ? '1.5' : '1.1')};
  }
  .overlay {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #002b27;
    z-index: 0;
    opacity: 0.7;
  }
`;

const Header = styled.header`
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

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 8rem;
  z-index: 2;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  h1 {
    max-width: 16ch;
    font-size: 3.5rem;
    font-weight: 700;

    margin-bottom: 1rem;
  }
  p {
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
  /* ipad */
  @media only screen and (max-width: 1100px) {
    left: 4rem;
  }
  /* phone */
  @media only screen and (max-width: 600px) {
    left: 1rem;
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
