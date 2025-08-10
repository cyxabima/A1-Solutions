import React from 'react'
import { Sale, columns } from './columns'
import { DataTable } from '@/components/data-table';
import { apiUrl } from '@/lib/config';
async function getSales(): Promise<Sale[]> {
    const res = await fetch(`${apiUrl}/api/v1/sales`)
    if (!res.ok) {
        return []
    }
    const data = await res.json();
    return data.data
}

async function ProductPage() {
    const data = await getSales();
    return (
        <div className='container'>
            <h1 className='text-3xl font-bold'>Invoices</h1>
            <div className='py-3'>
                <DataTable columns={columns} data={data} name='Invoice' searchIn='customerName' />
            </div>
        </div>
    )
}

export default ProductPage