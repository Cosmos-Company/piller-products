import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

import "./embla.css";
import { Photo } from "@/types/photo";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

export default function Slider({ slides }: { slides: Photo[] }) {
  return <EmblaCarousel slides={slides} options={OPTIONS} />;
}
