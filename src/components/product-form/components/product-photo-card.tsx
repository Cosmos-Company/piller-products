"use client";
import { Photo } from "@/types/photo";
import { cn } from "@/utils/class-helper";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

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
  const filteredPhotos = filterInputName
    ? photos.filter((photo) => photo.group === selectedFilterInput)
    : photos;

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

  const [open, setOpen] = useState(false);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);

  return (
    <div
      className={cn(
        "h-full",
        hasBackground ? "bg-white rounded-br-[60px] p-10" : ""
      )}
    >
      <div className="h-full w-[400px] overflow-hidden ">
        <Lightbox
          index={index}
          slides={filteredPhotos.map((photo) => ({
            ...photo,
            src: photo.url,
            width: 400,
            height: 300,
          }))}
          plugins={[Inline, Thumbnails]}
          on={{
            view: updateIndex,
            click: toggleOpen(true),
          }}
          carousel={{
            padding: 0,
            spacing: 0,
            imageFit: "cover",
          }}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
          inline={{
            style: {
              backgroundColor: customColorValue || "#ebebeb",
              width: "100%",
              maxWidth: "900px",
              aspectRatio: "5 / 5",
              margin: "0 auto",
            },
          }}
        />

        <Lightbox
          open={open}
          close={toggleOpen(false)}
          index={index}
          slides={filteredPhotos.map((photo) => ({
            ...photo,
            src: photo.url,
            width: 800,
            height: 600,
          }))}
          on={{ view: updateIndex }}
          animation={{ fade: 0 }}
          controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        />

        {/* {customColorValue ? (
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
            className="h-full object-cover"
          />
        ) : (
          <img src={photos[0].url} alt={alt} className=" h-full object-cover" />
        )} */}
      </div>
      {/* <div className="flex gap-2.5 pt-5 justify-center">
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
      </div> */}
    </div>
  );
}
