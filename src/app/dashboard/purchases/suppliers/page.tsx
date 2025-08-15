import React from 'react'
import { Supplier, columns } from './columns'
import { DataTable } from '@/components/data-table';
import { apiUrl } from '@/lib/config';
import Link from 'next/link';
import { Plus } from 'lucide-react';

async function getSuppliers(): Promise<Supplier[]> {
    const res = await fetch(`${apiUrl}/api/v1/suppliers`, {
        next: {
            tags: ["suppliers"]
        }
    })
    if (!res.ok) {
        return []
    }
    const data = await res.json();
    return data.data
}

async function SuppliersPage() {
    const data = await getSuppliers();
    return (
        <div className='container'>
            <div className='flex items-center gap-2'>
                <h1 className='text-3xl font-bold'>Suppliers</h1>
                <Link href={"/dashboard/purchases/suppliers/add"}>
                    <Plus />
                </Link>
            </div>
            <div className='py-3'>
                <DataTable
                    columns={columns}
                    data={data}
                    name='Supplier'
                    searchIn='name'
                />
            </div>
        </div>
    )
}

export default SuppliersPage
