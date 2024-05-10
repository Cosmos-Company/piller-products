"use client";
import Select from "@/components/form-elements/select";
import React, { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextOption from "./text-option";
import { electricCars } from "@/data/electric-cars";
import Input from "@/components/form-elements/input";

export default function CarModelSelect({ ...field }) {
  const form = useFormContext();

  const selectedCar = form.watch("car");
  const [isCustomCar, setIsCustomCar] = React.useState(false);

  useEffect(() => {
    console.log(selectedCar);
    if (selectedCar === "diger") {
      setIsCustomCar(true);
      form.register("carCustom", { required: true });
    } else {
      setIsCustomCar(false);
      form.unregister("carCustom");
    }
  }, [selectedCar]);

  return (
    <div className="flex flex-col gap-6 ahmet emir">
      <Select {...field}>
        <option value="">Aracınızı Seçin</option>

        {electricCars.map((car) => (
          <optgroup key={car.brand} label={car.brand}>
            {car.models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </optgroup>
        ))}

        <option value="diger">Diğer</option>
      </Select>
      {isCustomCar && (
        <>
          <Controller
            name="carCustom"
            control={form.control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Aracınızın marka modelini girin."
              />
            )}
          />
          {form.formState.errors?.["carCustom"] && (
            <span className="text-red-500 text-sm font-semibold">
              {form.formState.errors?.["carCustom"]?.message as string}
            </span>
          )}
        </>
      )}
    </div>
  );
}
