
import Link from "next/link";

const initiatives = [
  {
    image:"/assets/property-athlete-3.png",
    status:"Strategic Planning",
    title:"Sharks High Performance Precinct",
    category:"Flagship Property Initiative",
    text:"Transforming an underperforming multi-dwelling property near Kings Park into secure, fully furnished athlete accommodation with performance and recovery amenities.",
    href:"/properties"
  },
  {
    image:"/assets/lee-site.png",
    status:"Launch Phase",
    title:"LMM Infrastructure",
    category:"Infrastructure",
    text:"Building plant hire, earthworks and construction capability that supports developments while producing operating cash flow.",
    href:"/infrastructure"
  },
  {
    image:"/assets/property-mapimpi.png",
    status:"Capital Structuring",
    title:"Property Investment Platform",
    category:"Property",
    text:"Creating a pipeline of income-generating developments that can recycle capital into future opportunities.",
    href:"/properties"
  },
  {
    image:"/assets/investment-skubu.png",
    status:"Partner Discussions",
    title:"Equipment Supply Platform",
    category:"Industrial",
    text:"Exploring strategic relationships around yellow equipment procurement, supply and fleet expansion.",
    href:"/infrastructure"
  },
  {
    image:"/assets/property-athlete-1.png",
    status:"Concept Development",
    title:"Athlete Property Initiative",
    category:"Property",
    text:"Purpose-designed accommodation and property investments built around the needs of professional athletes.",
    href:"/properties"
  }
];

export default function InitiativesPage(){
  return (
    <>
      <section className="pageHero initiativesHero">
        <div className="eyebrow">Current Initiatives</div>
        <h1>Ideas Moving Toward Reality</h1>
        <p>These are the platforms, properties and operating capabilities currently being advanced across LMM Holdings.</p>
      </section>
      <section className="section">
        <div className="initiativeList">
          {initiatives.map((i,index)=>(
            <Link href={i.href} className="initiativeRow" key={i.title}>
              <img src={i.image} alt={i.title}/>
              <div className="initiativeNumber">0{index+1}</div>
              <div className="initiativeText">
                <span className="statusBadge">{i.status}</span>
                <div className="listingMeta">{i.category}</div>
                <h2>{i.title}</h2>
                <p>{i.text}</p>
                <span className="pill">Explore initiative →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
