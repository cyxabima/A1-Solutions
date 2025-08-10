import React from 'react'
import { Brand, columns } from './columns'
import { DataTable } from '@/components/data-table';
import { apiUrl } from '@/lib/config';
import AddNew from '@/components/add-new-dialog';

async function getBrands(): Promise<Brand[]> {
    const res = await fetch(`${apiUrl}/api/v1/brands`, { next: { tags: ['brands'] } })
    if (!res.ok) {
        return []
    }
    const data = await res.json();
    return data.data
}

async function ProductPage() {
    const data = await getBrands();
    return (
        <div className='container'>
            <div className='flex items-center gap-2'>
                <h1 className='text-3xl font-bold'>Brands
                </h1>
                {/* Add New */}
                <AddNew name='brands' />
            </div>
            <div className='py-3'>
                <DataTable columns={columns} data={data} name='brands' />
            </div>
        </div>
    )
}

export default ProductPage