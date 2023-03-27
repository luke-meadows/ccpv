import Link from 'next/link';
import TextSection from '../global/TextSection';
export default function PhotographyText() {
  return (
    <TextSection>
      <h3>PHOTOGRAPHY</h3>
      <div className="text">
        <div className="left">
          <p className="italic">
            &ldquo;Perfect! CCPV captured everything we wanted! Many thanks for
            the great photos and such as relaxed experience on the day!&rdquo;
          </p>
          <p>Happy Wedding Client</p>
        </div>
        <div className="right">
          <p>
            Although video is the way to consume online content these days,
            there&apos;s still a huge role to play for stunning, highly-polished
            photography. From location shoots to ecommerce products, we
            understand that a businesses&apos; worth is increasingly dependent
            on the trust it can generate with its target demographics. When you
            choose our West Midlands photography services, we&apos;ll work with
            you to understand what makes your audience tick and what we need to
            do to create photographs that suit the brand and create the
            foundations of a relationship based on mutual trust between business
            and consumer.
          </p>
          <Link href="/contact">
            <button>Get in touch</button>
          </Link>
        </div>
      </div>
    </TextSection>
  );
}
