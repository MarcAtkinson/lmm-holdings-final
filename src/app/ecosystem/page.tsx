
const stages = [
  {
    number:"01",
    title:"Finding the Opportunity",
    subtitle:"Development & design relationships",
    partners:[
      ["/assets/partner-devmco.png","Devmco Group"],
      ["/assets/partner-ppf.png","Perpetuity Property Fund"],
      ["/assets/patrick-lambie.png","Patrick Lambie · Design & Lifestyle"]
    ]
  },
  {
    number:"02",
    title:"Securing the Capital",
    subtitle:"Commercial and development finance",
    partners:[
      [null,"FNB Commercial"],
      [null,"Rand Merchant Bank"],
      [null,"WesBank"],
      ["/assets/partner-tikzn.png","Trade & Investment KwaZulu-Natal"],
      ["/assets/partner-perpetuity-wealth.jpg","Perpetuity Wealth"]
    ]
  },
  {
    number:"03",
    title:"Building the Asset",
    subtitle:"Construction, plant and infrastructure",
    partners:[
      ["/assets/lmm-plant-hire.png","LMM Plant Hire"],
      [null,"Civil & Construction Partners"],
      [null,"Earthworks & Bulk Infrastructure"]
    ]
  },
  {
    number:"04",
    title:"Adding Long-Term Value",
    subtitle:"Affiliated integrators",
    partners:[
      ["/assets/partner-lutron.png","Lutron"],
      ["/assets/partner-leak-wizards.png","Leak Wizards"],
      ["/assets/partner-webb.jpg","Webb Electronics"]
    ]
  },
  {
    number:"05",
    title:"Selling, Leasing & Managing",
    subtitle:"Property sales and long-term management",
    partners:[
      ["/assets/partner-hello.png","Hello Realty"],
      ["/assets/partner-limelight.jpg","Limelight Properties"]
    ]
  }
];

export default function PlatformPage() {
  return (
    <>
      <section className="pageHero ecosystemHero">
        <div className="eyebrow">Our Platform</div>
        <h1>Every Stage Adds Value</h1>
        <p>Anyone can buy land, appoint a builder or hire specialists. LMM is deliberately assembling capability across the complete property journey—so value is created at every step rather than surrendered between disconnected parties.</p>
      </section>

      <section className="section">
        <div className="platformIntro">
          <div>
            <div className="eyebrow">The LMM Development Model</div>
            <h2>One connected journey—from opportunity to reinvestment.</h2>
            <p>Our financial and strategic advantage lies in having a foot in every camp: sourcing, capital, construction, specialist integration, leasing and management. Better coordination should create better assets, stronger income and improved long-term returns.</p>
          </div>
          <img src="/assets/lmm-development-model.png" alt="The LMM Development Model infographic"/>
        </div>
      </section>

      <section className="section sand">
        <div className="platformStages">
          {stages.map((stage)=>(
            <article className="platformStage" key={stage.number}>
              <div className="stageNumber">{stage.number}</div>
              <div className="stageHeading">
                <div className="eyebrow">{stage.subtitle}</div>
                <h2>{stage.title}</h2>
              </div>
              <div className="stagePartners">
                {stage.partners.map(([logo,name])=>(
                  <div className="stagePartner" key={name}>
                    {logo ? <img src={logo ?? undefined} alt={name} /> : <div className="textLogo">{name}</div>}
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="split">
          <div>
            <div className="eyebrow">Industrial Relationship</div>
            <h2>Thulasizwe Ellington Shabane</h2>
            <p>A diversified entrepreneurial relationship spanning mining, commodities, investment and industrial opportunity. The intended yellow-equipment import and supply platform may strengthen future equipment procurement and fleet expansion once the appropriate operating company is confirmed.</p>
          </div>
          <div className="industrialCard">
            <div className="industrialMonogram">TS</div>
            <div>
              <h3>Industrial & Equipment Partner</h3>
              <p>Mining · Equipment · Infrastructure · Cross-Border Opportunity</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section center">
        <div className="eyebrow">Purpose-Built Partnerships</div>
        <h2>The right capability at the right stage.</h2>
        <p>Every relationship has a purpose. Together, the platform is designed to deliver more value than any one participant could create alone.</p>
      </section>
    </>
  );
}
