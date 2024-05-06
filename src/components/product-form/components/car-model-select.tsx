"use client";
import Select from "@/components/form-elements/select";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import TextOption from "./text-option";
import { electricCars } from "@/data/electric-cars";

export default function CarModelSelect() {
  const form = useFormContext();

  const selectedCar = form.watch("car");
  const [isCustomCar, setIsCustomCar] = React.useState(false);

  useEffect(() => {
    console.log(selectedCar);
    if (selectedCar === "diger") {
      setIsCustomCar(true);
      form.register("car-custom", { required: true });
    } else {
      setIsCustomCar(false);
      form.unregister("car-custom");
    }
  }, [selectedCar]);

  return (
    <div className="flex flex-col gap-6 ahmet emir">
      <Select {...form.register("car", { required: true })}>
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
        <TextOption name="car-custom" type="text" placeholder="Diğer" />
      )}
    </div>
  );
}
