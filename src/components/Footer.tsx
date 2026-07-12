
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src="/assets/lmm-holdings.png" alt="LMM Holdings" />
        <p>Property. Infrastructure. Enterprise.</p>
      </div>
      <div className="footerLinks">
        <Link href="/initiatives">Current Initiatives</Link>
        <Link href="/ecosystem">Our Platform</Link>
        <Link href="/partner">Partner With LMM</Link>
        <Link href="/contact">Start the Conversation</Link>
      </div>
      <small>Presentation website prepared for strategic discussion. Certain opportunities and relationships are illustrative or subject to final agreement.</small>
    </footer>
  );
}
