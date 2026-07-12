
import Link from "next/link";
export default function Infrastructure() {
 return <>
  <section className="pageHero"><img className="logoPage" src="/assets/lmm-plant-hire.png" alt="LMM Plant Hire"/><h1>Infrastructure Solutions</h1><p>Plant, earthworks and project support designed around practical delivery and strategic growth.</p></section>
  <section className="section"><div className="split"><div><div className="eyebrow">A Legacy in Motion</div><h2>Built on practical industry roots.</h2><p>LMM Plant Hire draws on a three-generation family history in logistics, transport and plant hire in the Newcastle region. The aim is not simply to own machinery, but to place productive assets into real projects alongside experienced operating partners.</p><p>Our approach is demand-led: identify the work, understand the operational requirements and grow the equipment base responsibly.</p></div><img src="/assets/lee-site.png" className="portrait" alt="Lee-Marvin on a construction site"/></div></section>
  <section className="section sand"><div className="center"><div className="eyebrow">Capabilities</div><h2>Alluding to Scale Without Overstating the Fleet</h2></div><div className="grid3">
    {["Earthmoving & excavation","Site preparation & bulk works","Roads, access and platforms","Wet hire & operator solutions","Civil project support","Equipment partnerships"].map(x=><div className="card" key={x}><h3>{x}</h3><p>Structured around project needs, experienced operators and dependable execution.</p></div>)}
  </div></section>
  <section className="section dark center"><h2>Where can we put machines to work?</h2><p>That is the commercial question behind every equipment decision.</p><Link className="button" href="/contact">Discuss a Project</Link></section>
 </>;
}
