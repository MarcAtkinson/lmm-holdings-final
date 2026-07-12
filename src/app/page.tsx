
import Link from "next/link";

const initiatives = [
  {
    img:"/assets/property-athlete-3.png",
    status:"Strategic Planning",
    title:"Sharks High Performance Precinct",
    text:"A premium athlete-living concept near Kings Park, combining secure accommodation, performance amenities and an anchor-tenant strategy.",
    href:"/properties"
  },
  {
    img:"/assets/lee-site.png",
    status:"Launch Phase",
    title:"LMM Infrastructure",
    text:"Building plant hire, earthworks and construction capability that can support developments and fund the wider LMM platform.",
    href:"/infrastructure"
  },
  {
    img:"/assets/property-mapimpi.png",
    status:"Capital Structuring",
    title:"Property Investment Platform",
    text:"A pipeline of strategically acquired residential and mixed-use assets designed around income, capital growth and reinvestment.",
    href:"/properties"
  },
  {
    img:"/assets/investment-skubu.png",
    status:"Partner Discussions",
    title:"Equipment Supply Platform",
    text:"Developing equipment procurement and industrial relationships to strengthen fleet growth, project delivery and long-term margins.",
    href:"/infrastructure"
  }
];

export default function Home() {
  return (
    <>
      <section className="hero" style={{backgroundImage:"url('/assets/lee-site.png')"}}>
        <div className="heroContent">
          <div className="eyebrow">Infrastructure · Property · Enterprise</div>
          <h1>A Vision Beyond Construction</h1>
          <p>LMM Holdings is building an integrated property development platform where infrastructure, investment and purpose-built partnerships combine to create exceptional long-term value.</p>
          <div className="buttons">
            <Link className="button" href="/initiatives">Explore Our Initiatives</Link>
            <Link className="button ghost" href="/ecosystem">Explore Our Platform</Link>
          </div>
        </div>
      </section>

      <section className="section sand reveal">
        <div className="center">
          <div className="eyebrow">The Long View</div>
          <div className="statement">Property development drives the platform. Infrastructure builds it. Investment scales it.</div>
          <p>Each pillar exists to strengthen the others—creating a repeatable model capable of sourcing opportunities, building value and recycling capital into the next initiative.</p>
        </div>
      </section>

      <section className="section">
        <div className="sectionIntro">
          <div>
            <div className="eyebrow">Current Initiatives</div>
            <h2>What We Are Building Now</h2>
          </div>
          <Link className="textLink" href="/initiatives">View all initiatives →</Link>
        </div>
        <div className="initiativeGrid">
          {initiatives.map((item, index) => (
            <Link href={item.href} className={`initiativeCard ${index===0 ? "initiativeHeroCard":""}`} key={item.title}>
              <img src={item.img} alt={item.title}/>
              <div className="initiativeOverlay">
                <span className="statusBadge">{item.status}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="pill">Explore initiative →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="partnershipBanner">
        <div className="partnershipContent">
          <div className="eyebrow">Purpose-Built Partnerships</div>
          <h2>Extraordinary projects require the right team.</h2>
          <p>The strongest teams are not assembled by collecting the biggest names. They are built by selecting the right people and organisations for the right role. LMM is intentionally creating a platform where every partner contributes a distinct capability to the development journey.</p>
          <Link className="button" href="/ecosystem">Explore Our Platform</Link>
        </div>
      </section>

      <section className="section">
        <div className="split">
          <img className="portrait" src="/assets/lee-portrait.png" alt="Lee-Marvin Mazibuko" />
          <div>
            <div className="eyebrow">Founder & Executive Chairman</div>
            <h2>Athlete. Entrepreneur. Builder.</h2>
            <p>From Newcastle and Michaelhouse to professional rugby in South Africa, Italy and France, Lee-Marvin Mazibuko’s journey has been shaped by discipline, trusted networks and high-performance environments.</p>
            <p>At the Sharks, his next chapter is taking shape: converting experience, relationships and brand equity into enduring businesses and assets that extend far beyond a playing career.</p>
            <Link className="button" href="/story">Read Our Story</Link>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="center"><div className="eyebrow">Three Strategic Pillars</div><h2>One Integrated Platform</h2></div>
        <div className="grid3">
          <Link href="/properties" className="pillar" style={{backgroundImage:"url('/assets/property-athlete-3.png')"}}>
            <img className="pillarLogo" src="/assets/lmm-properties-dark.png" alt="LMM Properties" />
            <div className="pill">Property</div><h3>The value driver.</h3><p>Purpose-led developments designed around demand, income and long-term asset growth.</p>
          </Link>
          <Link href="/infrastructure" className="pillar" style={{backgroundImage:"url('/assets/lee-site.png')"}}>
            <img className="pillarLogo" src="/assets/lmm-plant-hire.png" alt="LMM Plant Hire" />
            <div className="pill">Infrastructure</div><h3>The delivery engine.</h3><p>Plant, earthworks and construction capability that supports developments and generates cash flow.</p>
          </Link>
          <Link href="/investments" className="pillar" style={{backgroundImage:"url('/assets/investment-when-im-gone.png')"}}>
            <img className="pillarLogo" src="/assets/lmm-investments-dark.png" alt="LMM Investments" />
            <div className="pill">Enterprise</div><h3>The growth engine.</h3><p>Strategic ownership in businesses that strengthen the platform and compound value.</p>
          </Link>
        </div>
      </section>

      <section className="section sand center">
        <div className="eyebrow">An Invitation, Not an Open Call</div>
        <h2>We are building with partners who add something unique.</h2>
        <p>We value capable operators, trusted relationships and specialist expertise. The aim is not to assemble the largest network—it is to assemble the right team for the platform we are building.</p>
        <div className="buttons" style={{justifyContent:"center"}}>
          <Link className="button" href="/partner">Partner With LMM</Link>
          <Link className="button ghost darkGhost" href="/contact">Start the Conversation</Link>
        </div>
      </section>
    </>
  );
}
