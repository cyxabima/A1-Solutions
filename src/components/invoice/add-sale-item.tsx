"use client"
import React, { useState } from 'react'
import { Plus } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '../ui/input';



function AddSaleItem() {
    const [search, setSearch] = useState("")
    return (
        <Dialog>
            <DialogTrigger className='cursor-pointer' ><Plus /></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add item </DialogTitle>
                </DialogHeader>
                <div>
                    <Input type='text' onChange={(e) => setSearch(e.target.value)} />
                    {search}
                </div>
            </DialogContent>
        </Dialog>
    )
}


export default AddSaleItem