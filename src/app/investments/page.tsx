
const companies = [
  {
    img:"/assets/investment-when-im-gone.png",
    sector:"Digital Legacy Technology",
    status:"Under Review",
    title:"When I’m Gone",
    model:"Subscription Software",
    thesis:"A recurring-revenue platform connecting families, advisers and essential life information within a secure digital ecosystem."
  },
  {
    img:"/assets/investment-skubu.png",
    sector:"Retail Technology & Sustainability",
    status:"Early Growth",
    title:"Skubu",
    model:"Smart Refill Retail",
    thesis:"A scalable retail platform combining repeat transactions, proprietary systems, sustainability and community participation."
  },
  {
    img:"/assets/investment-shisa-chip.png",
    sector:"Consumer Brands & Entertainment",
    status:"Brand Development",
    title:"Shisa Chip Challenge",
    model:"Product · Content · Licensing",
    thesis:"A social-first consumer concept with multiple potential revenue streams across products, events, digital content and licensing."
  }
];

export default function Investments() {
  return (
    <>
      <section className="pageHero investmentHero">
        <img className="logoPage" src="/assets/lmm-investments-dark.png" alt="LMM Investments"/>
        <h1>Backing Builders. Scaling Ideas.</h1>
        <p>LMM Investments evaluates businesses where capital, network, brand and active operating support can accelerate long-term value.</p>
      </section>

      <section className="section">
        <div className="center"><div className="eyebrow">Selected Investments</div><h2>Companies, not concepts.</h2><p>The portfolio is presented as emerging businesses and investment theses rather than presentation material.</p></div>
        <div className="companyPortfolio">
          {companies.map((c)=>(
            <article className="companyProfile" key={c.title}>
              <div className="companyVisual"><img src={c.img} alt={c.title}/></div>
              <div className="companyContent">
                <div className="companyTopline"><span>{c.sector}</span><span className="statusBadge">{c.status}</span></div>
                <h2>{c.title}</h2>
                <div className="companyModel">{c.model}</div>
                <p>{c.thesis}</p>
                <div className="companyRoles">
                  <span>Capital</span><span>Strategic support</span><span>Brand & network</span><span>Growth planning</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section sand">
        <div className="center"><div className="eyebrow">Investment Approach</div><h2>An owner’s mindset.</h2></div>
        <div className="grid3">
          {[
            ["Active Participation","We prefer opportunities where LMM can contribute beyond money."],
            ["Strategic Fit","Businesses should strengthen, or benefit from, the wider LMM ecosystem."],
            ["Recurring Value","Repeatable revenue and scalable models matter more than short-term hype."],
            ["Strong Founders","Credible operators with the resilience to build through difficult stages."],
            ["Shared Upside","Equity alignment creates stronger, longer-lasting partnerships."],
            ["Long-Term Potential","The goal is ownership in businesses that can compound value over time."]
          ].map(([t,d])=><div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </section>
    </>
  );
}
