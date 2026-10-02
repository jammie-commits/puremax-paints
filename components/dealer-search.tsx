"use client";

import { useMemo, useState } from "react";
import { dealers } from "@/data/site-data";

export function DealerSearch() {
  const [query, setQuery] = useState("");
  const visible = useMemo(() => dealers.filter((dealer) =>
    `${dealer.name} ${dealer.town} ${dealer.address}`.toLowerCase().includes(query.toLowerCase())
  ), [query]);

  return (
    <>
      <label className="dealer-search">Search by town or location
        <input value={query} onChange={(event) => setQuery(event.currentTarget.value)} placeholder="e.g. town or area" />
      </label>
      {visible.length === 0 ? (
        <div className="empty-state">
          <span className="empty-state-icon" aria-hidden="true">⌖</span>
          <h2>{query ? "No verified locations match that search." : "Stockist details are being added."}</h2>
          <p>We don’t have confirmed dealer listings to show yet. Contact Puremax to ask about availability near you.</p>
        </div>
      ) : (
        <div className="dealer-results">
          {visible.map((dealer) => (
            <article className="dealer-card" key={`${dealer.name}-${dealer.town}`}>
              <span className="eyebrow">{dealer.town}</span><h2>{dealer.name}</h2><p>{dealer.address}</p>
              <p>{dealer.phone}</p><p>{dealer.openingHours}</p>
              <div className="dealer-actions">
                {dealer.phone.replace(/\D/g, "").length >= 7 && <a href={`tel:${dealer.phone.replace(/[^\d+]/g, "")}`}>Call dealer</a>}
                {dealer.whatsapp.replace(/\D/g, "").length >= 7 && <a href={`https://wa.me/${dealer.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">WhatsApp dealer</a>}
                {dealer.address && !dealer.address.startsWith("[") && <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${dealer.address}, ${dealer.town}`)}`} target="_blank" rel="noreferrer">Directions ↗</a>}
              </div>
            </article>
          ))}
        </div>
      )}
      <p className="content-note">Dealer listings will be published after location and contact details have been verified.</p>
    </>
  );
}
