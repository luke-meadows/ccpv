import useWindowScroll from '@/lib/useWindowScroll';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import Header from '../global/Header';
import MobileNav from '../global/MobileNav';
import ContactButton from '../hero-buttons/ContactButton';
import PlayShowreelButton from '../hero-buttons/PlayShowreelButton';
import Image from 'next/image';
export default function BlogBannerImage({ image }) {
  return (
    <StyledHero>
      <div className="image-wrapper">
        <p style={{ color: 'blue', zIndex: 20, left: 0, top: 0 }}>
          ** will be a different image
        </p>
        <Image src={image} fill alt="blog img" />
      </div>
    </StyledHero>
  );
}

const StyledHero = styled.div`
  height: 30rem;
  width: 100vw;
  position: relative;
  color: white;
  overflow: hidden;
  .image-wrapper {
    position: relative;
    height: 30rem;
    width: 100vw;

    img {
      object-fit: cover;
    }
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

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 8rem;
  z-index: 2;
  transform: translateY(-30%);
  display: flex;
  flex-direction: column;
  h1 {
    max-width: 20ch;
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
