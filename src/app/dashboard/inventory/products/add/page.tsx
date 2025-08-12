"use client"
import { Combobox } from "@/components/combo-box";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { apiUrl } from "@/lib/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema, ProductInput } from "@/lib/schema";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import addProduct from "@/actions/add-product";
import { generateSlug } from "@/lib/utils";

export default function AddNewProduct() {
    const [suppliers, setSuppliers] = useState<any[]>([]);
    const [units, setUnits] = useState<any[]>([]);
    const [brands, setBrands] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);

    const { register, handleSubmit, control, formState: { errors } } = useForm<ProductInput>({
        resolver: zodResolver(productSchema),
    });

    const getAnythingByName = async (name: string) => {
        try {
            const res = await fetch(`${apiUrl}/api/v1/${name}`, { cache: "no-store" });
            const data = await res.json();
            return data.data || [];
        } catch {
            toast.error(`Failed to load ${name}`);
            return [];
        }
    };

    const getFormData = async () => {
        const [suppliersData, unitsData, brandsData, categoriesData] = await Promise.all([
            getAnythingByName("suppliers"),
            getAnythingByName("units"),
            getAnythingByName("brands"),
            getAnythingByName("categories"),
        ]);
        setSuppliers(suppliersData);
        setUnits(unitsData);
        setBrands(brandsData);
        setCategories(categoriesData);
    };

    useEffect(() => {
        getFormData();
    }, []);

    const onSubmit = async (data: ProductInput) => {

        const new_data = {
            ...data,
            slug: generateSlug(data.name)

        }
        const result = await addProduct(new_data);
        console.log("hey man i am here on client")
        if (result.success) {
            toast.success(result.message || "Product created successfully")
        } else {
            // If `error` is an array (Zod validation), join messages as i am using .issue which gives array of objects of errors
            if (Array.isArray(result.error)) {
                toast.error(result.error.map(err => err.message).join(", "))
            } else {
                toast.error(result.error || "Something went wrong")
            }
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-11 gap-4 gap-y-8">
                {/* Name */}
                <div className="md:col-span-7">
                    <Label>Name</Label>
                    <Input {...register("name")} className="bg-white" />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                {/* Buying Price */}
                <div className="md:col-span-2">
                    <Label>Buying Price</Label>
                    <Input type="number" {...register("buyingPrice", { valueAsNumber: true })} className="bg-white" />
                    {errors.buyingPrice && <p className="text-red-500">{errors.buyingPrice.message}</p>}
                </div>

                {/* Stock Qty */}
                <div className="md:col-span-2">
                    <Label>Stock Qty</Label>
                    <Input type="number" {...register("stockQty", { valueAsNumber: true })} className="bg-white" />
                    {errors.stockQty && <p className="text-red-500">{errors.stockQty.message}</p>}
                </div>

                {/* Alert Qty */}
                <div className="md:col-span-1">
                    <Label>Alert Qty</Label>
                    <Input type="number" {...register("alertQty", { valueAsNumber: true })} className="bg-white" />
                    {errors.alertQty && <p className="text-red-500">{errors.alertQty.message}</p>}
                </div>

                {/* Unit */}
                <div className="md:col-span-2 flex flex-col">
                    <Label>Unit</Label>
                    {/* as this is not a simple html element so to control the input from this combo box we have controllers */}
                    <Controller
                        name="unitId"
                        control={control}
                        render={({ field }) => (
                            <Combobox list={units} nameOfCombo="unit" value={field.value} onChange={field.onChange} />
                        )}
                    />
                    {errors.unitId && <p className="text-red-500">{"required*"}</p>}
                </div>

                {/* Brand */}
                <div className="md:col-span-3 flex flex-col">
                    <Label>Brand</Label>
                    <Controller
                        name="brandId"
                        control={control}
                        render={({ field }) => (
                            <Combobox list={brands} nameOfCombo="brand" value={field.value} onChange={field.onChange} />
                        )}
                    />
                    {errors.brandId && <p className="text-red-500">{"required*"}</p>}
                </div>

                {/* Category */}
                <div className="md:col-span-4 flex flex-col">
                    <Label>Category</Label>
                    <Controller
                        name="categoryId"
                        control={control}
                        render={({ field }) => (
                            <Combobox list={categories} nameOfCombo="category" value={field.value} onChange={field.onChange} />
                        )}
                    />
                    {errors.categoryId && <p className="text-red-500">{"required*"}</p>}
                </div>

                {/* Supplier */}
                <div className="md:col-span-5 flex flex-col">
                    <Label>Supplier</Label>
                    <Controller
                        name="supplierId"
                        control={control}
                        render={({ field }) => (
                            <Combobox list={suppliers} nameOfCombo="supplier" value={field.value} onChange={field.onChange} />
                        )}
                    />
                    {errors.supplierId && <p className="text-red-500">{"required*"}</p>}
                </div>

                {/* Sku */}
                <div className="md:col-span-1">
                    <Label>Sku</Label>
                    <Input {...register("sku")} className="bg-white" />
                    {errors.sku && <p className="text-red-500">{errors.sku.message}</p>}
                </div>

                {/* Product Code */}
                <div className="md:col-span-3">
                    <Label>Product Code</Label>
                    <Input {...register("productCode")} className="bg-white" />
                    {errors.productCode && <p className="text-red-500">{errors.productCode.message}</p>}
                </div>

                {/* Description */}
                <div className="md:col-span-full">
                    <Label>Description</Label>
                    <Textarea {...register("description")} className="bg-white" />
                    {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                </div>

                <Button type="submit" className="text-white col-span-full">Submit</Button>
            </form>
        </div>
    );
}
