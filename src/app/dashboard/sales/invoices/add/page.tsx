"use client"
import InvoiceForm from '@/components/invoice/invoice-form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { InvoiceProvider } from '@/context/invoice-context'
import { Plus } from 'lucide-react'
import React from 'react'

function AddInvoice() {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6"> Add New Invoice</h1>
            <InvoiceProvider>
                <InvoiceForm />
            </InvoiceProvider>
        </div>
    )
}

export default AddInvoice