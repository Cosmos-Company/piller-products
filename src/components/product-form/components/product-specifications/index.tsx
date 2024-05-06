import React from "react";
import OptionContainer from "../option-container";
import { Spec } from "@/types/spec";
import RadioButtons from "../radio-buttons";
import RadioButton from "../radio-button";
import ColorButton from "../color-button";
import Input from "@/components/form-elements/input";
import CarModelSelect from "../car-model-select";
import TextOption from "../text-option";
import { useFormContext } from "react-hook-form";
import CustomColor from "../custom-color";

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
                  (option.dependsOnValue as string) ===
                  (dependingValue as any as string)
                ) {
                  return (
                    <RadioButton
                      key={option.value + "-" + dependingValue}
                      name={spec.name}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isCircle={spec.subType === "circle"}
                      isBig={spec.subType === "big"}
                    />
                  );
                }
              })}
            </RadioButtons>
          );
        }
        return (
          <RadioButtons>
            {spec.options?.map((option) => (
              <RadioButton
                key={option.value}
                name={spec.name}
                value={option.value}
                label={option.label}
                description={option.description}
                isCircle={spec.subType === "circle"}
                isBig={spec.subType === "big"}
              />
            ))}
          </RadioButtons>
        );
      case "color":
        return (
          <RadioButtons>
            {spec.options?.map((option) => (
              <ColorButton
                key={option.value}
                backgroundColor={option.value}
                name={spec.name}
              />
            ))}
          </RadioButtons>
        );
      case "text":
        if (spec.subType === "color") {
          return <CustomColor name={spec.name} type={"color"} />;
        }
        return (
          <TextOption
            type={"text"}
            name={spec.name}
            placeholder={spec.placeholder}
          />
        );
      case "car-select":
        return <CarModelSelect />;
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <header>
        <h3 className="text-3xl">{title}</h3>
      </header>

      <section className="flex flex-col gap-2.5">
        {specs.map((spec) => (
          <OptionContainer key={spec.name} title={spec.title} id={spec.name}>
            {form.formState.errors[spec.name] && (
              <span className="text-red-500">
                {form.formState.errors[spec.name]?.message?.toString()}
              </span>
            )}
            {createSpec(spec)}
          </OptionContainer>
        ))}
      </section>
    </div>
  );
}
