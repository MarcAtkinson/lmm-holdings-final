
import Link from "next/link";

export default function PartnerPage() {
  return (
    <>
      <section className="pageHero partnerHero">
        <div className="heroContent">
          <div className="eyebrow">Partner With LMM</div>
          <h1>Purpose-Built Partnerships</h1>
          <p>We are not assembling the largest network. We are selecting the right people and organisations for the right role—partners who contribute something distinctive to the platform we are building.</p>
          <div className="buttons"><Link className="button" href="/contact">Start the Conversation</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="split">
          <div>
            <div className="eyebrow">An Investor Who Gets Involved</div>
            <h2>More than capital. More than credentials.</h2>
            <p>LMM is designed for partnerships where both parties contribute something meaningful. We bring an owner’s mindset, brand equity, project access, commercial discipline and a willingness to participate in the practical work of growth.</p>
            <p>That may include introductions, capital preparation, governance, procurement, positioning, project origination and access to a broader network of specialist businesses.</p>
          </div>
          <img src="/assets/lee-site.png" className="portrait" alt="Lee-Marvin Mazibuko on site"/>
        </div>
      </section>

      <section className="section dark">
        <div className="center"><div className="eyebrow">What LMM Brings</div><h2>A platform designed to add value.</h2></div>
        <div className="featureGrid">
          {[
            ["Hands-On Participation","A partner prepared to contribute time, thought, relationships and energy—not simply capital."],
            ["Access to Projects","Relationships across developers, contractors, advisers, sport and business create genuine opportunity flow."],
            ["Brand Equity","Credibility and reach built through Michaelhouse, the Junior Springboks, Sharks and Racing 92."],
            ["Industry Heritage","Three generations of family involvement in logistics, transport and plant hire in Newcastle."],
            ["Connected Capability","Property, finance, plant, integration, sales and management relationships under one strategic platform."],
            ["Long-Term Alignment","The focus is on recurring value, productive assets and partnerships capable of compounding over time."],
            ["Shared Success","Every partnership should leave both organisations stronger than when they started."],
            ["Strategic B-BBEE Value","Meaningful participation can strengthen transformation and procurement outcomes without becoming the central reason for the relationship."]
          ].map(([title,text])=><div className="feature" key={title}><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </section>

      <section className="section sand center">
        <div className="eyebrow">The Invitation</div>
        <h2>Extraordinary projects require the right team.</h2>
        <p>We welcome conversations with capable operators and strategic collaborators who can add something unique to the journey.</p>
        <Link className="button" href="/contact">Start the Conversation</Link>
      </section>
    </>
  );
}
