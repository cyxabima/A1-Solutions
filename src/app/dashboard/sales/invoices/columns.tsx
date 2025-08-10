"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Sale = {
    id: string
    customerId: string
    customerName: string
    customerEmail: string
    saleNumber: string
    saleType: string
    saleAmount: number
    paidAmount: number
    balanceAmount: number
    paymentStatus: string
    paymentMethod: string
    transactionCode: string
    transactionAccount: string
    createdAt: string
}

export const columns: ColumnDef<Sale>[] = [
    {
        accessorKey: "customerName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Customer Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },

    },
    {
        accessorKey: "customerEmail",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },

    },
    {
        accessorKey: "saleType",
        header: "Type"
    },
    {
        accessorKey: "paymentStatus",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("paymentStatus")


            return <Badge variant={`${status == "CREDIT" ? "destructive" : "secondary"}`}>{status as string}</Badge>
        }

    },
    {
        accessorKey: "paidAmount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Paid Amount
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
        ,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("paidAmount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "PKR",
            }).format(amount)

            return <div className="">{formatted}</div>
        },
    },
    {
        accessorKey: "saleAmount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total Amount
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
        ,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("saleAmount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "PKR",
            }).format(amount)

            return <div className="">{formatted}</div>
        },
    },
    {
        accessorKey: "balanceAmount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Balance
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
        ,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("balanceAmount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "PKR",
            }).format(amount)

            return <div className="">{formatted}</div>
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const sale = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel className="text-orange-400 font-bold">Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(sale.id)}
                        >
                            Copy Invoice ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            View Invoice Details</DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]