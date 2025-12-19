"use client"
import { useInvoice } from '@/context/invoice-context'
import React, { useState } from 'react'
import SelectCustomer from './select-customer';
import { Label } from '../ui/label';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { generateInvoiceNumber } from '@/lib/utils';
import CustomSelect from '../custom-select';
import { Plus } from 'lucide-react';
import AddSaleItem from './add-sale-item';


const paymentStatus = [
    {
        name: "Paid",
        value: "PAID"
    },
    {
        name: "Credit",
        value: "CREDIT"
    }
]

const saleType = [
    {
        name: "Retail",
        value: "RETAIL"
    },
    {
        name: "Project",
        value: "PROJECT"
    },
    {
        name: "Service",
        value: "SERVICE"
    }
]

const PaymentMethod = [
    {
        name: "Cash",
        value: "CASH"
    },
    {
        name: "Bank",
        value: "BANK_TRANSFER"
    },
    {
        name: "Cheque",
        value: "CHEQUE"
    },
]

function InvoiceForm() {
    const { invoice } = useInvoice();
    const [invoiceNumber] = useState(generateInvoiceNumber())

    return (
        <div>
            {/* <pre>{JSON.stringify(invoice)}</pre> */}
            <form action="" className='grid  grid-cols-1 md:grid-cols-11 gap-4'>
                {/* CUSTOMERS  */}
                <div className='md:col-span-8'>
                    <Label>Select Customer</Label>
                    <SelectCustomer />
                </div>
                {/* SALE-NUMBER */}
                <div className='md:col-span-3'>
                    <Label>Invoice Number</Label>
                    <Input
                        type='text'
                        value={invoiceNumber}
                        disabled />
                </div>
                {/* PAYMENT STATUS */}
                <div className='md:col-span-3'>
                    <Label>Payment Status</Label>
                    <CustomSelect items={paymentStatus} name='paymentStatus' />
                </div>
                {/* sale Type */}
                <div className='md:col-span-3'>
                    <Label>Sale Type</Label>
                    <CustomSelect items={saleType} name='SaleType' />
                </div>

                {/* Payment Method */}
                <div className='md:col-span-3'>
                    <Label>Payment Method</Label>
                    <CustomSelect items={PaymentMethod} name='Payment Method' />
                </div>
                {/* LINE ITEMS */}
                <div className='md:col-span-11'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-bold'>Line Items</h1>

                        <AddSaleItem />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default InvoiceForm