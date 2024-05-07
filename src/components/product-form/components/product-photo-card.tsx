"use client";
import { Photo } from "@/types/photo";
import { cn } from "@/utils/class-helper";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
export default function ProductPhotoCard({
  photos,
  alt,
  hasBackground,
  filterInputName,
}: {
  photos: Photo[];
  alt: string;
  hasBackground?: boolean;
  filterInputName: string;
}) {
  const form = useFormContext();
  const selectedFilterInput = form.watch(filterInputName);
  const customColor = form.watch("customColor");
  const [customColorValue, setCustomColorValue] = useState<string | null>(null);
  const filteredPhotos = photos.filter(
    (photo) => photo.group === selectedFilterInput
  );

  const [index, setIndex] = useState<number>(0);

  const handlePhotoChange = (order: number) => {
    const isOrderValid =
      order >= 0 && filteredPhotos.some((photo) => photo.order === order);
    if (isOrderValid) {
      setIndex(order - 1);
    } else {
      setIndex(0);
    }
  };

  useEffect(() => {
    setIndex(0);
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
        "h-full bg-red-500",
        hasBackground ? "bg-white rounded-br-[60px]" : ""
      )}
    >
      <div className="max-h-fit rounded-br-[60px]  w-full overflow-hidden ">
        {customColorValue ? (
          <img
            src={"/mock1.png"}
            alt={alt}
            className="h-full object-cover "
            style={{
              backgroundColor: customColorValue,
            }}
          />
        ) : filteredPhotos?.[index] ? (
          <img
            src={filteredPhotos?.[index].url}
            alt={alt}
            className="h-full object-cover "
          />
        ) : (
          <img src={photos[0].url} alt={alt} className=" h-full object-cover" />
        )}
      </div>
      <div className="flex gap-2.5 pt-5 justify-center">
        {!customColorValue &&
          filteredPhotos?.map((photo) => (
            <button
              type="button"
              key={photo.url}
              onClick={() => handlePhotoChange(photo.order)}
              className={clsx(
                "w-2.5 h-2.5 rounded-[50%]",
                filteredPhotos?.[index]
                  ? index === photo.order - 1
                    ? "bg-[#2a50fe]"
                    : "bg-[#9fa1a7]"
                  : 0 == photo.order - 1
                  ? "bg-[#2a50fe]"
                  : "bg-[#9fa1a7]"
              )}
            ></button>
          ))}
      </div>
    </div>
  );
}
