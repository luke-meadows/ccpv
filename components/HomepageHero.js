import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import Logo from '../public/logo/ccpv-logo-white.png';
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
      <div class="vimeo-wrapper">
        <iframe
          src={`https://player.vimeo.com/video/${videoUrlCodes[videoUrlCode]}?background=1&autoplay=1&loop=1&byline=0&title=0muted=1`}
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>

      <Header servicesHovered={servicesHovered}>
        <Link href="/">
          <Image src={Logo} width="160" />
        </Link>
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
      </Header>
      <Title>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {button === 'showreel' && <PlayShowreelButton />}
        {button === 'contact' && <ContactButton />}
      </Title>
      <Overlay />
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
`;

const HeroVideo = styled.div`
  height: 100%;
  width: 100%;
  pointer-events: none;
  margin-bottom: 0;
  padding-bottom: 0;
  position: relative;
  iframe {
    height: 100%;
    width: 100%;
    border: 0;
    padding: 0;
  }
`;

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  background: #002b27;
  z-index: 0;
  opacity: 0.7;
`;

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;
  z-index: 2;
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
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 8rem;
  z-index: 2;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  h1 {
    max-width: 16ch;
    font-size: 2.8rem;
    font-weight: 600;
  }
`;
