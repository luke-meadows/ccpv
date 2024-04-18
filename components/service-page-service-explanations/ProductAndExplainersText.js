import Link from 'next/link';
import TextSection from '../global/TextSection';
export default function ProductAndExplainersText() {
  return (
    <TextSection topGap={true}>
      <h3>WEST MIDLANDS PRODUCT & EXPLAINER VIDEOGRAPHER</h3>
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
            We live in a fast-paced and ever-expanding world of technological
            advancements, where products can be delivered right to the front
            door.
          </p>
          <p>
            However, although it&apos;s never been easier to shop for the best
            and brightest products online, it can often be difficult for
            consumers to fully grasp the touch and feel of the product
            you&apos;re offering - particularly so when your product is
            especially niche.
          </p>
          <p>
            With our West Midlands product and explainer videography services,
            we can fully demonstrate your product on film to give your customers
            a tactile experience that helps them understand how your product
            works, how it looks and how it can improve their day-to-day life.
          </p>
          <p>
            These days, video is the number one way to consume content online,
            and we&apos;re able to work with you and your team to show your
            customers, rather than telling them, what you&apos;re all about.
          </p>

          <Link href="/contact">
            <button>Get in touch</button>
          </Link>
        </div>
      </div>
    </TextSection>
  );
}
