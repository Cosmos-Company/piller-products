import React, { useCallback } from "react";
import OptionContainer from "../option-container";
import { Spec } from "@/types/spec";
import RadioButtons from "../radio-buttons";
import RadioButton from "../radio-button";
import ColorButton from "../color-button";
import Input from "@/components/form-elements/input";
import CarModelSelect from "../car-model-select";
import TextOption from "../text-option";
import { Controller, useFormContext } from "react-hook-form";
import CustomColor from "../custom-color";
import ProductFooter from "../product-footer";
import { debounce } from "lodash";

export default function ProductSpecifications({
  title,
  specs,
}: {
  title: string;
  specs: Spec[];
}) {
  const form = useFormContext();
  const createSpec = (spec: Spec) => {
    switch (spec.type) {
      case "radio":
        if (spec.dependsOn) {
          return (
            <RadioButtons>
              {spec.options?.map((option) => {
                const dependingValue = form.watch(spec.dependsOn as any);
                if (
                  (dependingValue &&
                    !Object.keys(option).includes("dependsOnValue")) ||
                  (option.dependsOnValue as string) ===
                    (dependingValue as any as string)
                ) {
                  return (
                    <Controller
                      name={spec.name}
                      control={form.control}
                      key={option.value}
                      render={({ field }) => (
                        <RadioButton
                          key={option.value + "-" + dependingValue}
                          label={option.label}
                          isCircle={spec.subType === "circle"}
                          isBig={spec.subType === "big"}
                          isQuantity={spec.subType === "quantity"}
                          {...field}
                          checked={field.value === option.value}
                          value={option.value}
                        />
                      )}
                    />
                  );
                }
              })}
            </RadioButtons>
          );
        }
        return (
          <RadioButtons>
            {spec.options?.map((option) => {
              return (
                <Controller
                  name={spec.name}
                  control={form.control}
                  key={option.value}
                  render={({ field }) => {
                    return (
                      <RadioButton
                        key={option.value}
                        label={option.label}
                        isCircle={spec.subType === "circle"}
                        isBig={spec.subType === "big"}
                        isQuantity={spec.subType === "quantity"}
                        {...field}
                        checked={field.value === option.value}
                        value={option.value}
                      />
                    );
                  }}
                />
              );
            })}
          </RadioButtons>
        );
      case "color":
        return (
          <RadioButtons>
            {spec.options?.map((option) => (
              <Controller
                name={spec.name}
                control={form.control}
                key={option.value}
                render={({ field }) => {
                  const onChange = (e: any) => {
                    form.setValue("customColor", null);
                    field.onChange(e);
                  };

                  return (
                    <ColorButton
                      key={option.value}
                      backgroundColor={option.value}
                      {...field}
                      onChange={onChange}
                      checked={field.value === option.value}
                      value={option.value}
                    />
                  );
                }}
              />
            ))}
          </RadioButtons>
        );
      case "text":
        if (spec.subType === "color") {
          return (
            <Controller
              name={spec.name}
              control={form.control}
              key={spec.name}
              render={({ field }) => {
                const handleValueChangeDebounced = debounce((e) => {
                  field.onChange(e);
                  form.setValue("color", null);
                }, 300);
                return (
                  <CustomColor
                    type={"color"}
                    {...field}
                    onChange={handleValueChangeDebounced}
                  />
                );
              }}
            />
          );
        }
        return (
          <Controller
            name={spec.name}
            control={form.control}
            render={({ field }) => (
              <Input type={"text"} placeholder={spec.placeholder} {...field} />
            )}
          />
        );
      case "car-select":
        return (
          <Controller
            name={spec.name}
            control={form.control}
            render={({ field }) => <CarModelSelect {...field} />}
          />
        );
    }
  };

  return (
    <div className="flex flex-col gap-5 w-auto ">
      <header>
        <h3 className="text-3xl">{title}</h3>
      </header>

      <section className="flex flex-col gap-8">
        {specs.map((spec) => {
          const dependingValue = form.watch(spec.dependsOn as any);

          if (
            !spec.dependsOn ||
            spec.options?.some(
              (option) =>
                !Object.keys(option).includes("dependsOnValue") ||
                option.dependsOnValue === dependingValue
            )
          ) {
            return (
              <OptionContainer
                key={spec.name}
                title={spec.title}
                id={spec.name}
                name={spec.name}
              >
                {createSpec(spec)}
              </OptionContainer>
            );
          } else {
            return null;
          }
        })}
        <ProductFooter />
      </section>
    </div>
  );
}
