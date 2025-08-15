"use client"
import CustomSelect, { selectItems } from '@/components/custom-select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { CustomerInput, CustomerSchema } from '@/lib/schema/customer-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { apiUrl } from '@/lib/config'
import { toast } from 'sonner'
import addCustomer from '@/actions/add-customer'

function AddCustomer() {
    const GenderList: selectItems[] = [
        {
            name: "Male",
            value: "MALE"
        },
        {
            name: "Female",
            value: "FEMALE"
        }
    ]

    const CustomerTypeList: selectItems[] = [
        { name: "Retail", value: "RETAIL" },
        { name: "Wholesale", value: "WHOLESALE" },
        { name: "Distributor", value: "DISTRIBUTOR" },
        { name: "Project Based", value: "PROJECT_BASED" },
        { name: "Service Based", value: "SERVICE_BASED" },
        { name: "Other", value: "OTHER" }
    ]


    const { register, handleSubmit, control, formState: { errors, isSubmitting }, reset } = useForm<CustomerInput>({
        resolver: zodResolver(CustomerSchema)
    });

    const onSubmit = async (data: CustomerInput) => {

        const result = await addCustomer(data)

        if (result.success) {
            toast.success(result.message)
            reset()
        } else {
            toast.error(result.error)
        }
    }



    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Add New Customer</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-10 gap-4'>
                <div className="md:col-span-5">
                    <Label htmlFor='first-name'>First Name*</Label>
                    <Input type='text' id='first-name' {...register('firstName')} />
                    {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

                </div>
                <div className="md:col-span-3">
                    <Label htmlFor='last-name'>Last Name*</Label>
                    <Input type='text' id='last-name' {...register('lastName')} />
                    {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                </div>
                <div className="md:col-span-2">
                    <Label htmlFor='gender'>Gender*</Label>
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <CustomSelect items={GenderList} name='gender' value={field.value} onChange={field.onChange} />

                        )}
                    />
                    {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
                </div>

                <div className="md:col-span-2">
                    <Label htmlFor='customerType'>Customer Type*</Label>
                    <Controller
                        name="customerType"
                        control={control}
                        render={({ field }) => (
                            <CustomSelect items={CustomerTypeList} name='Customer Type' value={field.value} onChange={field.onChange} />
                        )}
                    />
                    {errors.customerType && <p className="text-red-500">{errors.customerType.message}</p>}
                </div>
                <div className="md:col-span-3">
                    <Label htmlFor='phone'>Phone</Label>
                    <Input type='phone' id='phone' {...register('phone')} defaultValue={'+92'} />
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                </div>
                <div className="md:col-span-3">
                    <Label htmlFor='email'>Email</Label>
                    <Input type='email' id='email' {...register('email')} />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div className="md:col-span-3">
                    <Label htmlFor='country'>Country*</Label>
                    <Input type='text' defaultValue={"Pakistan"} id='country' {...register('country')} />
                    {errors.country && <p className="text-red-500">{errors.country.message}</p>}
                </div>
                <div className="md:col-span-3">
                    <Label htmlFor='location'>Location*</Label>
                    <Input type='text' defaultValue={"Shah Latif Town Karachi"} id='location' {...register('location')} />
                    {errors.location && <p className="text-red-500">{errors.location.message}</p>}
                </div>
                <div className='md:col-span-2'>
                    <Label htmlFor='maxCreditLimit'>Max Credit Amount</Label>
                    <Input type='number' defaultValue={0} id='maxCreditLimit' {...register('maxCreditLimit', { valueAsNumber: true })} />
                    {errors.maxCreditLimit && <p className="text-red-500">{errors.maxCreditLimit.message}</p>}
                </div>
                <div className="md:col-span-3">
                    <Label htmlFor='maxCreditDays'>Max Credit Days</Label>
                    <Input type='number' defaultValue={0} id='maxCreditDays' {...register('maxCreditDays', { valueAsNumber: true })} />
                    {errors.maxCreditDays && <p className="text-red-500">{errors.maxCreditDays.message}</p>}
                </div>
                <div className="md:col-span-3">
                    <Label htmlFor='unpaidCreditAmount'>Unpaid Amount</Label>
                    <Input type='number' defaultValue={0} disabled {...register('unpaidCreditAmount', { valueAsNumber: true })} />
                    {errors.unpaidCreditAmount && <p className="text-red-500">{errors.unpaidCreditAmount.message}</p>}
                </div>
                <Button type="submit" className="text-white col-span-full" disabled={isSubmitting}
                >{isSubmitting ? "Adding Customer..." : "Add Customer"}</Button>
            </form>
        </div>
    )
}

export default AddCustomer