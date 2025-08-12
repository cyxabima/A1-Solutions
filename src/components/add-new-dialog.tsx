"use client"
import React, { useActionState } from 'react'
import { Plus } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { toast } from 'sonner';
import addNew from '@/actions/add-new';

type AddNewProp = {
    name: string
}
function AddNew({ name }: AddNewProp) {
    const [formState, action] = useActionState(addNew.bind(null, name), { errors: {} })
    return (
        <Dialog>
            <DialogTrigger><Plus className='' /></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new {name}</DialogTitle>
                </DialogHeader>
                <form action={action} className='flex flex-col gap-4'>

                    <Label htmlFor='name'>Name</Label>
                    <Input name='name' id='name' />
                    {formState.errors.name && <p className="text-sm text-red-600">{formState.errors.name}</p>}


                    {name == "units" &&
                        <>
                            <Label htmlFor='abbreviation'>Abbreviation</Label>
                            <Input name='abbreviation' />
                            {formState.errors.abbreviation && <p className="text-sm text-red-600">{formState.errors.abbreviation}</p>}
                        </>
                    }

                    {formState.errors.formError && <div className="text-sm bg-red-500 mb-3 p-2 text-white rounded font-semibold">{formState.errors.formError}</div>}

                    <Button type='submit'
                        className='text-white'
                    >
                        Add {name}
                    </Button>

                </form>

            </DialogContent>
        </Dialog>
    )
}

export default AddNew