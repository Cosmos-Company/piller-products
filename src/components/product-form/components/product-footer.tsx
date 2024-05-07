"use client";
import Button from "@/components/form-elements/button";
import Input from "@/components/form-elements/input";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import TextOption from "./text-option";
import { createPortal } from "react-dom";

export default function ProductFooter() {
  const form = useFormContext();
  const [showPopup, setShowPopup] = useState(false);
  const onSubmit = async (req: any, data: any) => {
    console.log(req);
    console.log(data);
    delete data.defaultValues;
    const res = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(req),
    });
    alert("Teklif isteğiniz alınmıştır. En kısa sürede dönüş yapılacaktır.");
    console.log(res);
  };
  return (
    <div className="erc-product-footer ">
      <div className="flex gap flex-col  items-start gap-6">
        <Button type="button" onClick={() => setShowPopup(true)}>
          Teklif İste
        </Button>
      </div>
      {showPopup &&
        createPortal(
          <div
            onClick={(e) => {
              setShowPopup(false);
            }}
            className="fixed z-50 bg-black/60 inset-0 flex justify-center items-center"
          >
            <div
              className="bg-white w-1/3 h-[30vh] rounded-[50px] px-6 py-8 flex flex-col justify-around items-center gap-6"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <h2 className="text-2xl font-bold">Teklif İsteğini Gönder</h2>
              <TextOption
                name="email"
                type="email"
                placeholder="Mail Adresiniz"
              />
              <Button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  form.handleSubmit(onSubmit);
                  setShowPopup(false);
                }}
              >
                Gönder
              </Button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
