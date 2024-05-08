"use client";
import { Photo } from "@/types/photo";
import { cn } from "@/utils/class-helper";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import EmblaCarousel from "./Slider/EmblaCarousel";
export default function ProductPhotoCard({
  photos,
  alt,
  hasBackground,
  filterInputName,
}: {
  photos: Photo[];
  alt: string;
  hasBackground?: boolean;
  filterInputName?: string;
}) {
  const form = useFormContext();
  const selectedFilterInput = form.watch(filterInputName);
  const customColor = form.watch("customColor");
  const [customColorValue, setCustomColorValue] = useState<string | null>(null);
  const filteredPhotos = filterInputName
    ? photos.filter((photo) => photo.group === selectedFilterInput)
    : photos;

  useEffect(() => {
    setCustomColorValue(null);
  }, [selectedFilterInput]);

  useEffect(() => {
    if (customColor) {
      setCustomColorValue(customColor);
    }
  }, [customColor]);

  return (
    <div
      className={cn(
        "max-h-[400px] w-[400px] p-10 pb-10",
        hasBackground ? "bg-white rounded-br-[100px]" : ""
      )}
    >
      <div className="h-auto overflow-hidden ">
        {customColorValue ? (
          <img
            src={"/images/ev-charger/seffaf.png"}
            alt={alt}
            className="  w-fit max-h-[450px] mx-auto h-full object-contain"
            style={{
              backgroundColor: customColorValue,
            }}
          />
        ) : filteredPhotos.length > 0 ? (
          <EmblaCarousel
            slides={filteredPhotos}
            options={{ dragFree: true, loop: true }}
          />
        ) : (
          <EmblaCarousel
            slides={photos}
            options={{ dragFree: true, loop: true }}
          />
        )}
      </div>
    </div>
  );
}
