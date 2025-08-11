"use client"
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardReport from './report'
import { apiUrl } from '@/lib/config'
import { toast } from 'sonner'

function DashboardTabs() {
    const [result, setResult] = useState({
        data: {
            today: {
                total: 0,
                balance: 0,
                paid: 0,
            },
            thisWeek: {
                total: 0,
                balance: 0,
                paid: 0,
            },
            thisMonth: {
                total: 0,
                balance: 0,
                paid: 0,
            }
        }
    })

    useEffect(() => {
        (async () => {
            fetch(`${apiUrl}/api/v1/sales/shop/6890bbfeca9339b8fd22fdc0`)
                .then((res) => res.json())
                .then((res) => { setResult(res) })
                .catch((error) => { toast(String(error)) })
        })();
    }, [])



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