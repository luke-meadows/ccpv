import Link from 'next/link';
import TextSection from '../global/TextSection';
export default function MusicVideographyText() {
  return (
    <TextSection topGap={true}>
      <h3>WEST MIDLANDS MUSIC VIDEO VIDEOGRAPHER</h3>
      <div className="text">
        <div className="left">
          <p className="italic">
            &ldquo;I always enjoy working with CCPV. I know I can come to them
            with an idea and they can produce creative, professional and
            innovative productions and all to an incredibly high
            standard!&rdquo;
          </p>
          <p>Flowlosopha - Musician</p>
        </div>
        <div className="right">
          <p>
            Music is one of our passions here at CCPV, and it made sense to us
            to take this passion and understanding and help local artists (both
            up and coming and well known) to create a visual calling card with
            our music video videographer service. We collaborate very closely
            with you as an artist, as well as any managers, venue operators and
            actors that may be required on the set to bring your artistic vision
            to life.
          </p>
          <p>
            Our founder made his name in the industry working on music videos,
            and it&apos;s something of a speciality of ours, which means
            we&apos;ve been fortunate to work in a variety of genres, such as
            rap, R&B, alternative, dance and retro; you name it, we&apos;ve been
            there!
          </p>
          <p>
            If you&apos;re looking for a specialist and passionate videographer
            in the West Midlands to put you on the map, then look no further.
          </p>

          <Link href="/contact">
            <button>Get in touch</button>
          </Link>
        </div>
      </div>
    </TextSection>
  );
}
