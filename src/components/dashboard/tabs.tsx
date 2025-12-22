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

    async function getSalesReport() {
        try {
            const res = await fetch(`${apiUrl}/api/v1/sales/shop/6890bbfeca9339b8fd22fdc0`)
            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                throw new Error(errorData.message || `Error ${res.status}: ${res.statusText}`);
            }
            const result = await res.json();
            setResult(result);
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("unexpected error occur");
            }
            console.error("Sales Report Fetch Error:", error);
        }
    }

    useEffect(() => {
        (async () => {
            // fetch(`${apiUrl}/api/v1/sales/shop/6890bbfeca9339b8fd22fdc0`)
            //     .then((res) => res.json())
            //     .then((res) => { setResult(res) })
            //     .catch((error) => { toast(String(error)) })
            getSalesReport();
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