import Input from "@/components/form-elements/input";
import { Controller, useFormContext } from "react-hook-form";
export default function TextOption({ name, ...rest }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: "Bu alan zorunludur",
        pattern:
          rest.type === "email"
            ? {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Geçerli bir mail adresi giriniz",
              }
            : undefined,
      }}
      render={({ field }) => <Input {...rest} {...field} />}
    />
  );
}
