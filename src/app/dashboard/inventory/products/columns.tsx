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

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Products = {
    id: string
    name: string
    description: string
    alertQty: number
    stockQty: number
    buyingPrice: number
    sku: string
    productCode: string
    slug: string
    supplierId: string
    unitId: string
    brandId: string
    categoryId: string
}

export const columns: ColumnDef<Products>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },

    },
    {
        accessorKey: "sku",
        header: "SKU",
    },
    {
        accessorKey: "stockQty",
        header: "Stocks",

    },
    {
        accessorKey: "buyingPrice",
        header: "Buying Price",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("buyingPrice"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "PKR",
            }).format(amount)

            return <div className="font-medium">{formatted}</div>
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const product = row.original

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
                            onClick={() => navigator.clipboard.writeText(product.id)}
                        >
                            Copy Product ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            View Product Details</DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]