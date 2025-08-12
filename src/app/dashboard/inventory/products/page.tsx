import React from 'react'
import { Products, columns } from './columns'
import { DataTable } from '@/components/data-table';
import { apiUrl } from '@/lib/config';
import { Plus } from 'lucide-react';
import Link from 'next/link';
async function getProducts(): Promise<Products[]> {
    const res = await fetch(`${apiUrl}/api/v1/products`, { next: { tags: ["products"] } })
    if (!res.ok) {
        return []
    }
    const data = await res.json();
    return data.data
}

async function ProductPage() {
    const data = await getProducts();
    return (
        <div className='container'>
            <div className='flex items-center gap-2'>
                <h1 className='text-3xl font-bold'>Products</h1>
                <Link href={"/dashboard/inventory/products/add"}>
                    <Plus className='' />
                </Link>
            </div>
            <div className='py-3'>
                <DataTable columns={columns} data={data} name='Products' />
            </div>
        </div>
    )
}

export default ProductPage