import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardReport from './report'
import { apiUrl } from '@/lib/config'

async function DashboardTabs() {
    const res = await fetch(`${apiUrl}/api/v1/sales/shop/6890bbfeca9339b8fd22fdc0`)
    if (!res.ok) {
        try {

            return <div>{await res.json()}</div>
        } catch (error) {

            return <div>{res}</div>
        }
    }

    const result = await res.json()
    return (
        <Tabs defaultValue="today" className="w-full">
            <TabsList className='m-auto'>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="thisWeek">This Week</TabsTrigger>
                <TabsTrigger value="thisMonth">This Month</TabsTrigger>
            </TabsList>
            <TabsContent value="today">
                <DashboardReport data={result.data.today} />
            </TabsContent>
            <TabsContent value="thisWeek">
                <DashboardReport data={result.data.thisWeek} />
            </TabsContent>
            <TabsContent value="thisMonth">
                <DashboardReport data={result.data.thisMonth} />
            </TabsContent>
        </Tabs>
    )
}

export default DashboardTabs