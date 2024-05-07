"use client";
import HStack from "@/components/layouts/h-stack";
import ProductForm from "@/components/product-form";
import PanoPhoto from "@/components/product-form/components/pano-photo";
import ProductSpecifications from "@/components/product-form/components/product-specifications";
import { pano } from "@/data/kombinasyon-pano";


export default function KombinasyonPanosu() {
    const defaultValues = pano.specs.reduce(
        (acc, spec) => {
            return { ...acc, [spec.name]: spec.default || "" };
        },
        { email: "" }
    );

    return (
        <ProductForm defaultValues={{ defaultValues, color: "#ebebeb" }}>
            <HStack>
                <PanoPhoto />
                <div className="w-1/2">
                    <ProductSpecifications
                        title={pano.title}
                        specs={pano.specs}
                    />
                </div>
            </HStack>
        </ProductForm>

    );
}
