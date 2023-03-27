import styled from 'styled-components';
import TextSection from './global/TextSection';
export default function FindOutMoreWho() {
  return (
    <TextSection>
      <h3>FIND OUT MORE ABOUT WHO WE ARE</h3>
      <div className="text">
        <div className="left">
          <p className="italic">
            &ldquo;TULU have known and worked with CCPV for years now, and we
            cannot recommend their services highly enough. We thoroughly enjoy
            working alongside Cam and his team at CCPV, and feel they are a
            vital element to our marketing department!&rdquo;
          </p>
          <p>Georgie Grimsey - TULU Presents</p>
        </div>
        <div className="right">
          <p>
            At CCPV, we have almost ten years of experience in the videography
            industry, and we&apos;ve worked with a variety of businesses ranging
            from those in the entertainment industry to motor vehicle brands,
            and everything in between! Our range and depth of experience in
            bringing ideas and concepts into a visual space mean that no matter
            who you are, or what industry you&apos;re based in, you can count on
            us for the finest quality every time. CCPV was started by a
            passionate audiovisual expert, who saw a gap in the market for a
            videography company that could truly capture the human element of
            the moments captured on film.
          </p>
          <button>Get in touch</button>
        </div>
      </div>
    </TextSection>
  );
}
