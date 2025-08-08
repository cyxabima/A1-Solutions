import React from 'react'
import { Unit, columns } from './columns'
import { DataTable } from '@/components/data-table';
import { apiUrl } from '@/lib/config';
async function getUnits(): Promise<Unit[]> {
    const res = await fetch(`${apiUrl}/api/v1/units`)
    const data = await res.json();
    return data.data
}

async function ProductPage() {
    const data = await getUnits();
    return (
        <div className='container'>
            <h1 className='text-3xl font-bold'>Units</h1>
            <div className='py-3'>
                <DataTable columns={columns} data={data} name='Units' />
            </div>
        </div>
    )
}

export default ProductPage