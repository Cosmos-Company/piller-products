"use client";
import Button from "@/components/form-elements/button";
import Input from "@/components/form-elements/input";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import TextOption from "./text-option";
import { createPortal } from "react-dom";

export const dynamic = "force-dynamic";
export default function ProductFooter() {
  const form = useFormContext();
  const [showPopup, setShowPopup] = useState(false);
  const [formContainer, setFormContainer] = useState(
    typeof window !== "undefined"
      ? document?.getElementById("product-form")
      : null
  );

  const validateForm = () => {
    form.handleSubmit(
      () => {},
      (e) => {
        Object.keys(e)?.[0] === "email" && setShowPopup(true);
      }
    )();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFormContainer(document.getElementById("product-form"));
    }
  }, [document]);

  return (
    <div className="erc-product-footer ">
      <div className="flex gap flex-col  items-start gap-6">
        <Button type="button" onClick={() => validateForm()}>
          Teklif İste
        </Button>
      </div>
      {showPopup &&
        formContainer &&
        createPortal(
          <div
            onClick={(e) => {
              setShowPopup(false);
            }}
            className="fixed z-50  inset-0 flex justify-center items-center"
          >
            <div
              className="bg-white w-1/3 h-[30vh] rounded-[50px] px-6 py-8 flex flex-col justify-around items-center gap-6"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <h2 className="text-2xl font-bold">Teklif İsteğini Gönder</h2>
              <div className="flex gap-4 flex-col">
                <TextOption
                  type="email"
                  placeholder="Mail Adresiniz"
                  {...form.register("email")}
                />
                {form.formState.errors?.["email"] && (
                  <span className="text-red-500 text-sm font-semibold">
                    Bu alan zorunludur.
                  </span>
                )}
                <Button type="submit">Gönder</Button>
              </div>
            </div>
          </div>,
          formContainer
        )}
    </div>
  );
}
