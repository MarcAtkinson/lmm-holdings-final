
import OpportunityGallery from "../../components/OpportunityGallery";

const supporting = [
  {img:"/assets/property-mapimpi.png",type:"Premium coastal development",title:"Mapimpi Legacy Duplex",location:"Salta Estate / Mount Cotton",text:"A two-home development concept combining lifestyle appeal, rental demand and long-term capital growth."},
  {img:"/assets/property-renishaw.png",type:"Semigration strategy",title:"Renishaw Hills Opportunity",location:"KwaZulu-Natal South Coast",text:"A secure coastal lifestyle concept aimed at the semigration and retirement market."},
  {img:"/assets/property-athlete-1.png",type:"Value-add residential",title:"Athlete House No. 1",location:"Morningside, Durban",text:"A high-capacity conversion concept creating professionally managed accommodation near Durban’s sporting precinct."},
  {img:"/assets/property-athlete-5.png",type:"Freehold value-add",title:"Athlete House No. 5",location:"Essenwood, Durban",text:"A flexible freehold opportunity with leasing, subdivision and redevelopment potential."}
];

export default function Properties() {
  return (
    <>
      <section className="precinctHero">
        <img src="/assets/lmm-properties-dark.png" className="precinctLogo" alt="LMM Properties"/>
        <div className="precinctHeroContent">
          <span className="statusBadge">Flagship Initiative · Strategic Planning</span>
          <h1>Sharks High Performance Precinct</h1>
          <p>Not simply accommodation—a purpose-built living and performance environment designed around the needs of professional rugby players.</p>
        </div>
      </section>

      <section className="section">
        <div className="split precinctIntro">
          <div>
            <div className="eyebrow">The Opportunity</div>
            <h2>Turning an underperforming property into a specialised income-producing asset.</h2>
            <p>The concept begins with the acquisition of an older multi-dwelling property near Kings Park at an attractive entry point. The property is then comprehensively repositioned as secure, premium and fully furnished athlete accommodation.</p>
            <p>The strategy combines property acquisition, integrated construction, specialist technology, premium amenities and an identifiable anchor-tenant need. It is designed to solve a real accommodation problem while creating recurring income and long-term capital value.</p>
          </div>
          <div className="fundingMilestone">
            <span>Funding Milestone</span>
            <strong>R3 million</strong>
            <p>First phase of funding secured as planning and strategic partner engagement advance.</p>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="center"><div className="eyebrow">The Precinct Vision</div><h2>Luxury living built around athlete performance.</h2></div>
        <div className="featureGrid">
          {[
            ["Secure Living","Integrated access control, CCTV and managed security designed around player privacy and safety."],
            ["Fully Furnished","A turnkey living environment suited to local players, international recruits and short-to-medium-term placements."],
            ["Performance Gym","On-site training capability designed to complement the professional athlete’s routine."],
            ["Recovery & Wellness","Steam room and recovery-focused facilities that turn accommodation into a performance environment."],
            ["Energy Resilience","Solar and backup infrastructure to protect comfort, security and operating continuity."],
            ["Premium Integration","Electrical, plumbing, connectivity and smart-building services coordinated through affiliated specialists."],
            ["Anchor-Tenant Strategy","Designed around a known accommodation need within the Sharks player environment."],
            ["Repeatable Model","A development approach that can be applied to other sporting precincts and athlete markets."]
          ].map(([title,text])=><div className="feature" key={title}><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </section>

      <section className="section sand">
        <div className="center"><div className="eyebrow">How Value Is Created</div><h2>More than a standard renovation.</h2></div>
        <div className="valueJourney">
          {[
            ["Acquire Better","Identify an underperforming property at an attractive entry point."],
            ["Design for Demand","Create a specialised product around a clear, existing market need."],
            ["Build & Integrate","Control the redevelopment and add security, energy, technology and lifestyle value."],
            ["Secure Occupancy","Align the asset with an anchor-tenant strategy rather than speculative demand."],
            ["Recycle Capital","Use recurring income and capital growth to support the next initiative."]
          ].map(([title,text],index)=><div className="valueStep" key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </section>

      <section className="section">
        <div className="center"><div className="eyebrow">Supporting Property Concepts</div><h2>The broader property pipeline.</h2><p>The precinct leads the property strategy, supported by additional illustrative development and income-property concepts.</p></div>
        <OpportunityGallery items={supporting}/>
        <p className="disclaimer"><strong>Illustrative concepts:</strong> Supporting examples demonstrate strategies under consideration and do not represent completed or currently owned LMM developments.</p>
      </section>
    </>
  );
}
