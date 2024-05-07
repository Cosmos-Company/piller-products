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
}: {
  photos: Photo[];
  alt: string;
  hasBackground?: boolean;
}) {
  const form = useFormContext();
  const selectedColor = form.watch("color");
  const customColor = form.watch("customColor");
  const [customColorValue, setCustomColorValue] = useState<string | null>(null);
  const filteredPhotos = photos.filter(
    (photo) => photo.color === selectedColor
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
  }, [selectedColor]);

  useEffect(() => {
    if (customColor) {
      setCustomColorValue(customColor);
    }
  }, [customColor]);


  return (
    <div>
      <div className={cn(" w-11/12 flex flex-col gap-[0px] sticky rounded-br-[60px] ", hasBackground ? "bg-[#f7f7f7]" : "")}>
        <div className="h-full rounded-br-[60px] w-full overflow-hidden ">
          {customColorValue ? (
            <img
              src={"/mock1.png"}
              alt={alt}
              className="w-full h-full object-cover"
              style={{
                backgroundColor: customColorValue,
              }}
            />
          ) : filteredPhotos?.[index] ? (
            <img
              src={filteredPhotos?.[index].url}
              alt={alt}
              className="w-full   h-full object-contain"
            />
          ) : (
            <img
              src={photos[0].url}
              alt={alt}
              className="w-full  h-full object-cover"
            />
          )}
        </div>

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
