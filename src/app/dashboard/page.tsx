import DashboardTabs from '@/components/dashboard/tabs'
import React from 'react'

function Dashboard() {

    return (
        <div className='w-full flex flex-col md:flex-row'>
            {/* LEFT */}
            <div className='w-full lg:w-2/3'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl font-bold'>Sales Report</h1>
                    <DashboardTabs />

                </div>

            </div>

            {/* RIGHT */}
            <div className='w-full lg:w-1/3'>
                r</div>

        </div>
    )
}

export default Dashboard