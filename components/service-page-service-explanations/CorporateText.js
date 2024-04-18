import Link from 'next/link';
import TextSection from '../global/TextSection';
export default function CorporateText() {
  return (
    <TextSection topGap={true}>
      <h3>WEST MIDLANDS CORPORATE VIDEOGRAPHER</h3>
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
            When it comes to commercial videography and photography, we know
            that any business or organisation that puts out this kind of content
            must ensure that it aligns with their brand values and objectives as
            a business.
          </p>
          <p>
            We&apos;ve worked extensively for corporate clients across numerous
            sectors, from homeware and hospitality, to sporting events and
            healthcare, so we know just how crucial it is to work closely with
            you to ensure that our projects are completely aligned from a
            business perspective.
          </p>
          <p>
            Before we undertake any corporate video or photography project,
            we&apos;ll sit down with you and your team, to ensure that everyone
            is on the same page.
          </p>
          <p>
            This way both sides can feel confident that the finished product
            will be exactly what your business deserves and is capable of
            smashing the targets that you&apos;ve set for you and your company.
          </p>
          <Link href="/contact">
            <button>Get in touch</button>
          </Link>
        </div>
      </div>
    </TextSection>
  );
}
