"use client"
import React from 'react'
import SummaryCard from './summary-card'

type DashboardReportProps = {
    total: number;
    balance: number;
    paid: number;
    // profit:number;
}
function DashboardReport({ data }: { data: DashboardReportProps }) {
    return (
        <div>

            <div className='flex justify-between gap-4 flex-wrap'>
                <SummaryCard type={"Total Sales"} quantity={data.total} />
                <SummaryCard type={"Balance"} quantity={data.balance} />
                <SummaryCard type={"Paid"} quantity={data.paid} />
                <SummaryCard type={"Profits"} quantity={data.balance} />

                {/* <div className='w-full'>
                    <div className='w-full lg:w-1/3 bg-background flex flex-col gap-3 rounded-xl p-4 justify-center items-center'>
                    </div>
                    <div className='w-full lg:w-2/3'>

                    </div>

                </div> */}
            </div>

        </div>
    )
}

export default DashboardReport