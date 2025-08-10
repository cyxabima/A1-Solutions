import React from 'react'
import { Category, columns } from './columns'
import { DataTable } from '@/components/data-table';
import { apiUrl } from '@/lib/config';
import AddNew from '@/components/add-new-dialog';
async function getCategories(): Promise<Category[]> {
    const res = await fetch(`${apiUrl}/api/v1/categories`, { next: { tags: ['categories'] } })
    if (!res.ok) {
        return []
    }
    const data = await res.json();
    return data.data
}

async function ProductPage() {
    const data = await getCategories();
    return (
        <div className='container'>
            <div className='flex items-center gap-2'>
                <h1 className='text-3xl font-bold'>Categories
                </h1>
                {/* Add New */}
                <AddNew name='categories' />
            </div>
            <div className='py-3'>
                <DataTable columns={columns} data={data} name='Categories' />
            </div>
        </div>
    )
}

export default ProductPage