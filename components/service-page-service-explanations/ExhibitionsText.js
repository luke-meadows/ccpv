import Link from 'next/link';
import TextSection from '../global/TextSection';
export default function ExhibitionsText() {
  return (
    <TextSection topGap={true}>
      <h3>WEST MIDLANDS EXHIBITION VIDEOGRAPHER</h3>
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
            Exhibitions and in-person events can often be the very lifeblood of
            an industry - whether you&apos;re the host or a delegate.
          </p>
          <p>
            These events are often set-piece showcases for new technologies,
            innovative products and large-scale launches from some of the most
            well-known brands within a particular industry.
          </p>
          <p>
            Our exhibition videography and photography aim to capture the buzz
            and excitement of these viewing of a potential industry disruptor.
          </p>
          <Link href="/contact">
            <button>Get in touch</button>
          </Link>
        </div>
      </div>
    </TextSection>
  );
}
