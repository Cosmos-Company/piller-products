import Input from "@/components/form-elements/input";
import { debounce } from "lodash";
import React, { useCallback, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function CustomColor({
  name,
  ...rest
}: {
  name: string;
  [key: string]: any;
}) {
  const form = useFormContext();
  const color = form.watch("color");

  const handleValueChangeDebounced = useCallback(
    debounce((value, onChange) => {
      if (onChange) onChange(value);
      form.setValue("color", null);
    }, 300),
    []
  );

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <Input
          type="color"
          {...rest}
          {...field}
          onChange={(e) =>
            handleValueChangeDebounced(e.target.value, field.onChange)
          }
          value={color ? "" : field.value}
        />
      )}
    />
  );
}
