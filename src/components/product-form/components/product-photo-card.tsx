"use client";
import { Photo } from "@/types/photo";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
export default function ProductPhotoCard({
  photos,
  alt,
}: {
  photos: Photo[];
  alt: string;
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
    <div className="w-full flex flex-col gap-[75px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034)] bg-[white] h-[580px] px-[115px] py-[100px] rounded-br-[60px]">
      <div className="h-full overflow-hidden mx-auto">
        {customColorValue ? (
          <img
            src={"/mock1.png"}
            alt={alt}
            className="w-full min-w-[300px] h-full object-cover"
            style={{
              backgroundColor: customColorValue,
            }}
          />
        ) : filteredPhotos?.[index] ? (
          <img
            src={filteredPhotos?.[index].url}
            alt={alt}
            className="w-full min-w-[300px] h-full object-cover"
          />
        ) : (
          <img
            src={photos[0].url}
            alt={alt}
            className="w-full min-w-[300px] h-full object-cover"
          />
        )}
      </div>
      <div className="flex gap-2.5 justify-center">
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
