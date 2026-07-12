
"use client";
import { useState } from "react";

type Item = {
  img: string;
  type: string;
  title: string;
  location?: string;
  text: string;
};

export default function OpportunityGallery({items}: {items: Item[]}) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="listingGrid">
        {items.map((o, index) => (
          <button className="listing listingButton" key={o.title} onClick={() => setActive(index)}>
            <img src={o.img} alt={o.title}/>
            <div className="listingBody">
              <div className="listingMeta">{o.type}{o.location ? ` · ${o.location}` : ""}</div>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
              <span className="pill">View concept →</span>
            </div>
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="modalBackdrop" onClick={() => setActive(null)}>
          <div className="modalCard" onClick={(e) => e.stopPropagation()}>
            <button className="modalClose" onClick={() => setActive(null)} aria-label="Close">×</button>
            <img src={items[active].img} alt={items[active].title} />
            <div className="modalCaption">
              <div className="listingMeta">{items[active].type}</div>
              <h3>{items[active].title}</h3>
              <p>{items[active].text}</p>
              <p className="disclaimer">Illustrative concept only. This does not represent a completed or currently owned LMM asset or business.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
