import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative w-16 h-16 md:w-26 md:h-26">
        <Image
          src="/images/hero/CFS_logo.png"
          alt="CFS Logo"
          width={100}
          height={100}
          priority
        />
      </div>
    </Link>
  );
}

// (6) wrap the logo in a link to navigate home onClick.
// (10/11) renders the width and height to be 120px.
// (12) tells Next.js that this image takes priority every time (no lazy load)
