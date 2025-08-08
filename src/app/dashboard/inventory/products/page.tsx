import React from 'react'
import { Products, columns } from './columns'
import { DataTable } from '@/components/data-table';
import { apiUrl } from '@/lib/config';
async function getProducts(): Promise<Products[]> {
    const res = await fetch(`${apiUrl}/api/v1/products`)

    const data = await res.json();
    return data.data
}

async function ProductPage() {
    const data = await getProducts();
    return (
        <div className='container'>
            <h1 className='text-3xl font-bold'>Products</h1>
            <div className='py-3'>
                <DataTable columns={columns} data={data} name='Products' />
            </div>
        </div>
    )
}

export default ProductPage