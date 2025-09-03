import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/hero/CFS_logo.png"
        alt="CFS Logo"
        width={120}
        height={120}
        priority
      />
    </Link>
  );
}

// (6) wrap the logo in a link to navigate home onClick.
// (10/11) renders the width and height to be 120px.
// (12) tells Next.js that this image takes priority every time (no lazy load)
