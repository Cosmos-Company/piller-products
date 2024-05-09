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

  return <Input type="color" {...rest} />;
}
