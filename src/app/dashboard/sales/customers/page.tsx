import React from 'react'
import { Customer, columns } from './columns'
import { DataTable } from '@/components/data-table';
import { apiUrl } from '@/lib/config';
import Link from 'next/link';
import { Plus } from 'lucide-react';
async function getCustomers(): Promise<Customer[]> {
    try {
        const res = await fetch(`${apiUrl}/api/v1/customers`, {
            next: {
                tags: ["customers"]
            }
        });
        if (!res.ok) {
            return [];
        }
        const data = await res.json();
        return data.data
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error: ", error.message);
        }
        console.error("Something went wrong")
        return [];
    }
}

async function ProductPage() {
    const data = await getCustomers();
    return (
        <div className='container'>
            <div className='flex items-center gap-2'>
                <h1 className='text-3xl font-bold'>Customers</h1>
                <Link href={"/dashboard/sales/customers/add"}>
                    <Plus className='' />
                </Link>
            </div>
            <div className='py-3'>
                <DataTable columns={columns} data={data} name='Customer' searchIn='firstName' />
            </div>
        </div>
    )
}

export default ProductPage