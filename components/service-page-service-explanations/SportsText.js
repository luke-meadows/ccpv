import Link from 'next/link';
import TextSection from '../global/TextSection';
export default function SportsText() {
  return (
    <TextSection topGap={true}>
      <h3>WEST MIDLANDS SPORTING VIDEOGRAPHER</h3>
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
            Sporting events capture the imagination like nothing else - whether
            that&apos;s the latest boxing match at the MGM, or kid&apos;s
            football; the intensity and the will to win is present whether
            you&apos;re in the crowd or sliding around in the mud.
          </p>
          <p>
            We&apos;ve worked with clients on a range of sporting events to
            capture those energies through video and photos, such as horse
            riding events, football matches, boxing matches and much, much more.
          </p>
          <p>
            Many of our clients often desire these special moments as mementoes,
            whether winning a team championship or tasting success individually,
            and we&apos;re happy to work closely with you to create a tangible
            reminder of the glory days!
          </p>
          <Link href="/contact">
            <button>Get in touch</button>
          </Link>
        </div>
      </div>
    </TextSection>
  );
}
