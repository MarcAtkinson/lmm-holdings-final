
import Link from "next/link";

export default function Header() {
  return (
    <header className="siteHeader">
      <Link href="/" className="brand">
        <img src="/assets/lmm-holdings.png" alt="LMM Holdings" />
      </Link>
      <nav>
        <Link href="/initiatives">Initiatives</Link>
        <Link href="/properties">Properties</Link>
        <Link href="/infrastructure">Infrastructure</Link>
        <Link href="/investments">Investments</Link>
        <Link href="/ecosystem">Our Platform</Link>
        <Link href="/story">Our Story</Link>
        <Link href="/partner">Partner With LMM</Link>
        <Link href="/contact" className="navCta">Start the Conversation</Link>
      </nav>
    </header>
  );
}
