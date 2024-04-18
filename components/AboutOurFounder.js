import styled from 'styled-components';
import TextSection from './global/TextSection';
import Link from 'next/link';
export default function AboutOurFounder() {
  return (
    <TextSection topGap={true}>
      <h3>ABOUT OUR FOUNDER</h3>
      <div className="text">
        <div className="left">
          <p className="italic">
            &ldquo;Cameron and his team gave us ideas and I couldn't have been
            more pleased with the outcome and the way Cameron and his team
            conducted their business. Highly recommend the company for anyone
            wanting to visualise their business.&rdquo;
          </p>
          <p>
            Jayne Meggitt, Head of Tap Dance UK & Teacher and Owner of FSDance
          </p>
        </div>
        <div className="right">
          <p>
            With almost ten years of experience in the photography and
            videography industry under his belt, our founder Cameron Cox set
            about creating a company that could concentrate on the emotional and
            empathetic sides of the images he was capturing.
          </p>
          <Link href="/contact">
            <button>Get in touch</button>
          </Link>
        </div>
      </div>
    </TextSection>
  );
}
