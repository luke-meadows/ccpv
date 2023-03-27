import useWindowDimensions from '@/lib/useWindowDimensions';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LogoImageBlack from '../../public/logo/ccpv-logo-black.png';
import LogoImageWhite from '../../public/logo/ccpv-logo-white.png';
export default function Logo({ variant = 'black' }) {
  const [widthState, setWidthState] = useState(600);
  const { width } = useWindowDimensions();
  useEffect(() => {
    setWidthState(width);
  });
  return (
    <Link href="/">
      <Image
        src={variant === 'black' ? LogoImageBlack : LogoImageWhite}
        width={widthState <= 600 ? '100' : '160'}
        alt="logo"
      />
    </Link>
  );
}
