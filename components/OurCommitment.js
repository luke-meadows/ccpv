import styled from 'styled-components';
import TextSection from './global/TextSection';
import Link from 'next/link';
export default function OurCommitment() {
  return (
    <TextSection>
      <h3>OUR COMMITMENT TO OUR CLIENTS</h3>
      <div className="text">
        <div className="left">
          <p className="italic">
            &ldquo;Cameron is highly professional and evidently takes huge pride
            in his work as he brings ideas to life with his team. Whatever the
            project has been Cameron has exceeded our expectations and taken our
            branding to a whole new level!&rdquo;
          </p>
          <p>Georgie Grimsey, TULU Presents</p>
        </div>
        <div className="right">
          <p>
            Each time we&apos;re commissioned to shoot a video or set up a photo
            shoot, we spend some time with our clients to understand what they
            want, who they are and how they think and feel. We believe that
            truly great content is dependent on ensuring that we know the
            answers to these questions first and foremost. Before we set out to
            each shoot, we work closely with you to ensure that the finished
            product is everything you imagined and more.
          </p>

          <Link href="/contact">
            <button>Get in touch</button>
          </Link>
        </div>
      </div>
    </TextSection>
  );
}
