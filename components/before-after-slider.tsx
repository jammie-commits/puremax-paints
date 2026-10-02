"use client";

import Image from "next/image";
import { useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  projectName: string;
};

export function BeforeAfterSlider({ beforeSrc, afterSrc, projectName }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="before-after">
      <Image className="before-after-image" src={afterSrc} alt={`${projectName} after painting`} fill sizes="(max-width: 760px) 100vw, 70vw" />
      <div className="before-after-before" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image className="before-after-image" src={beforeSrc} alt={`${projectName} before painting`} fill sizes="(max-width: 760px) 100vw, 70vw" />
      </div>
      <span className="before-after-label before-label">Before</span>
      <span className="before-after-label after-label">After</span>
      <label className="visually-hidden" htmlFor="before-after-range">{`Compare before and after for ${projectName}`}</label>
      <input
        id="before-after-range"
        className="before-after-range"
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.currentTarget.value))}
        aria-valuetext={`${position}% after image visible`}
      />
      <span className="before-after-divider" style={{ left: `${position}%` }} aria-hidden="true"><span /></span>
    </div>
  );
}
