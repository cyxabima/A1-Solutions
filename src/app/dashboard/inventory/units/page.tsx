import React from 'react'
import { Unit, columns } from './columns'
import { DataTable } from '@/components/data-table';
import { apiUrl } from '@/lib/config';
import AddNew from '@/components/add-new-dialog';
async function getUnits(): Promise<Unit[]> {
    const res = await fetch(`${apiUrl}/api/v1/units`, { next: { tags: ['units'] } })
    if (!res.ok) {
        return []
    }
    const data = await res.json();
    return data.data
}

async function ProductPage() {
    const data = await getUnits();
    return (
        <div className='container'>
            <div className='flex items-center gap-2'>
                <h1 className='text-3xl font-bold'>Units
                </h1>
                {/* Add New */}
                <AddNew name='units' />
            </div>
            <div className='py-3'>
                <DataTable columns={columns} data={data} name='Units' />
            </div>
        </div>
    )
}

export default ProductPage