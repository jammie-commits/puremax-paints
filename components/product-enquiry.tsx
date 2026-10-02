"use client";

import { useRef } from "react";
import { LeadForm } from "@/components/lead-form";

export function ProductEnquiry({ productName }: { productName: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button className="button button-gold" type="button" onClick={() => dialogRef.current?.showModal()}>
        Ask about this product <span aria-hidden="true">↗</span>
      </button>
      <dialog
        className="enquiry-dialog"
        ref={dialogRef}
        aria-labelledby="enquiry-dialog-title"
        onCancel={(event) => {
          event.preventDefault();
          dialogRef.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            dialogRef.current?.close();
          }
        }}
      >
        <div className="dialog-topline">
          <span className="eyebrow">PUREMAX PRODUCT ENQUIRY</span>
          <button className="dialog-close" type="button" aria-label="Close enquiry form" onClick={() => dialogRef.current?.close()}>×</button>
        </div>
        <h2 className="visually-hidden" id="enquiry-dialog-title">Ask about {productName}</h2>
        <LeadForm mode="product" productName={productName} />
      </dialog>
    </>
  );
}
