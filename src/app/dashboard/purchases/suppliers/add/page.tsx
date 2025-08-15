"use client"

import CustomSelect, { selectItems } from '@/components/custom-select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { SupplierInput, SupplierSchema } from '@/lib/schema/supplier-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Textarea } from '@/components/ui/textarea'
import addSupplier from '@/actions/add-supplier'

function AddSupplier() {
    const SupplierTypeList: selectItems[] = [
        { name: "Manufacturer", value: "MANUFACTURER" },
        { name: "Distributor", value: "DISTRIBUTOR" },
        { name: "Wholesaler", value: "WHOLESALER" },
        { name: "Retailer", value: "RETAILER" },
        { name: "Other", value: "OTHER" }
    ]

    const { register, handleSubmit, control, formState: { errors, isSubmitting }, reset } = useForm<SupplierInput>({
        resolver: zodResolver(SupplierSchema)
    });

    const onSubmit = async (data: SupplierInput) => {
        const result = await addSupplier(data)

        if (result.success) {
            toast.success(result.message)
            reset()
        } else {
            toast.error(result.error)
        }
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Add New Supplier</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-10 gap-4'>

                {/* Supplier Type */}
                <div className="md:col-span-3">
                    <Label htmlFor='supplierType'>Supplier Type*</Label>
                    <Controller
                        name="supplierType"
                        control={control}
                        render={({ field }) => (
                            <CustomSelect
                                items={SupplierTypeList}
                                name='supplierType'
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    {errors.supplierType && <p className="text-red-500">{errors.supplierType.message}</p>}
                </div>

                {/* Name */}
                <div className="md:col-span-4">
                    <Label htmlFor='name'>Supplier Name*</Label>
                    <Input type='text' id='name' {...register('name')} />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                {/* Contact Person */}
                <div className="md:col-span-3">
                    <Label htmlFor='contactPerson'>Contact Person*</Label>
                    <Input type='text' id='contactPerson' {...register('contactPerson')} />
                    {errors.contactPerson && <p className="text-red-500">{errors.contactPerson.message}</p>}
                </div>

                {/* Phone */}
                <div className="md:col-span-3">
                    <Label htmlFor='phone'>Phone*</Label>
                    <Input type='text' id='phone' defaultValue={'+92'} {...register('phone')} />
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                </div>

                {/* Email */}
                <div className="md:col-span-3">
                    <Label htmlFor='email'>Email</Label>
                    <Input type='email' id='email' {...register('email')} />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                {/* Location */}
                <div className="md:col-span-4">
                    <Label htmlFor='location'>Location*</Label>
                    <Input type='text' id='location' {...register('location')} />
                    {errors.location && <p className="text-red-500">{errors.location.message}</p>}
                </div>

                {/* Country */}
                <div className="md:col-span-3">
                    <Label htmlFor='country'>Country*</Label>
                    <Input type='text' defaultValue={'Pakistan'} id='country' {...register('country')} />
                    {errors.country && <p className="text-red-500">{errors.country.message}</p>}
                </div>

                {/* Website */}
                <div className="md:col-span-4">
                    <Label htmlFor='website'>Website</Label>
                    <Input type='url' id='website' {...register('website')} />
                    {errors.website && <p className="text-red-500">{errors.website.message}</p>}
                </div>

                {/* Tax PIN */}
                <div className="md:col-span-3">
                    <Label htmlFor='taxPin'>Tax PIN</Label>
                    <Input type='text' id='taxPin' {...register('taxPin')} />
                    {errors.taxPin && <p className="text-red-500">{errors.taxPin.message}</p>}
                </div>

                {/* Registration Number */}
                <div className="md:col-span-3">
                    <Label htmlFor='registrationNumber'>Registration Number</Label>
                    <Input type='text' id='registrationNumber' {...register('registrationNumber')} />
                    {errors.registrationNumber && <p className="text-red-500">{errors.registrationNumber.message}</p>}
                </div>

                {/* Bank Account */}
                <div className="md:col-span-4">
                    <Label htmlFor='bankAccountNumber'>Bank Account Number</Label>
                    <Input type='text' id='bankAccountNumber' {...register('bankAccountNumber')} />
                    {errors.bankAccountNumber && <p className="text-red-500">{errors.bankAccountNumber.message}</p>}
                </div>

                {/* Bank Name */}
                <div className="md:col-span-3">
                    <Label htmlFor='bankName'>Bank Name</Label>
                    <Input type='text' id='bankName' {...register('bankName')} />
                    {errors.bankName && <p className="text-red-500">{errors.bankName.message}</p>}
                </div>

                {/* Payment Terms */}
                <div className="md:col-span-3">
                    <Label htmlFor='paymentTerms'>Payment Terms</Label>
                    <Input type='text' id='paymentTerms' {...register('paymentTerms')} />
                    {errors.paymentTerms && <p className="text-red-500">{errors.paymentTerms.message}</p>}
                </div>

                {/* Rating */}
                <div className="md:col-span-2">
                    <Label htmlFor='rating'>Rating*</Label>
                    <Input type='number' step="0.1" min={0} max={5} id='rating' {...register('rating', { valueAsNumber: true })} />
                    {errors.rating && <p className="text-red-500">{errors.rating.message}</p>}
                </div>

                {/* Notes */}
                <div className="md:col-span-8">
                    <Label htmlFor='notes'>Notes</Label>
                    <Textarea id='notes' {...register('notes')} />
                    {errors.notes && <p className="text-red-500">{errors.notes.message}</p>}
                </div>

                {/* Submit */}
                <Button type="submit" className="text-white col-span-full" disabled={isSubmitting}>
                    {isSubmitting ? "Adding Supplier..." : "Add Supplier"}
                </Button>
            </form>
        </div>
    )
}


export default AddSupplier
