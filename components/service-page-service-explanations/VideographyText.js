import Link from 'next/link';
import TextSection from '../global/TextSection';
export default function VideographyText() {
  return (
    <TextSection topGap={true}>
      <h3>WEST MIDLANDS VIDEOGRAPHY</h3>
      <div className="text">
        <div className="left">
          <p className="italic">
            &ldquo;TULU have known and worked with CCPV for years now, and we
            cannot recommend their services highly enough. We thoroughly enjoy
            working alongside Cam and his team at CCPV, and feel they are a
            vital element to our marketing department!&rdquo;
          </p>
          <p>Georgie Grimsey, TULU Presents</p>
        </div>
        <div className="right">
          <p>
            Our first passion is videography, it&apos;s our reason for being and
            it&apos;s where we started our journey. We specialise in videography
            across the West Midlands and we&apos;ve helped countless businesses
            take their message to a wider audience through the medium of video.
          </p>
          <p>
            Video is now the most popular means to consume information, and now
            that almost each and every one of us is capable of viewing this
            content on the move it&apos;s now more important than ever for a
            business to bolster its marketing armoury with strong video content.
          </p>
          <p>
            From music venues to gyms, at CCPV, we&apos;ve worked with a wide
            range of clients in many different niches. So, no matter where your
            business is in its life cycle, or what goals you&apos;ve set for
            yourself, we&apos;re happy to work closely with you to bring your
            vision to reality.
          </p>
          <Link href="/contact">
            <button>Get in touch</button>
          </Link>
        </div>
      </div>
    </TextSection>
  );
}
