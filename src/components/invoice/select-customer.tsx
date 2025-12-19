import React, { useEffect, useState } from 'react'
import { Select } from '../ui/select'
import { apiUrl } from '@/lib/config'
import { toast } from 'sonner'
import { useInvoice } from '@/context/invoice-context'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command'
import { cn } from '@/lib/utils'


type customer = {
    id: string;
    firstName: string;
    lastName: string;
    email?: string | null

}

function SelectCustomer() {
    const [allCustomers, setAllCustomers] = useState<customer[]>([])
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${apiUrl}/api/v1/customers`)
                const result = await res.json();
                if (!res.ok) {
                    throw new Error(result.message)
                }
                setAllCustomers(result.data)
            } catch (error) {
                if (error instanceof Error)
                    toast.error(error.message)
                else
                    toast.error("Something went wrong")
            }
        })()
    }, []);

    const { setCustomer } = useInvoice();

    const [open, setOpen] = React.useState(false)
    const [selectedId, setSelectedId] = React.useState("")

    const selectedItem = allCustomers.find((item) => item.id === selectedId)

    const handleSelect = (id: string, name: string, email: string) => {
        setSelectedId(id)
        setCustomer(id, name, email)
        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between w-full"
                >
                    {selectedItem ? selectedItem.firstName + " " + selectedItem.lastName : `Select Customer...`}
                    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[60vw] p-0">
                <Command>
                    <CommandInput placeholder={`Search Customer...`} />
                    <CommandList>
                        <CommandEmpty>No Customer found.</CommandEmpty>
                        <CommandGroup>
                            {allCustomers.map((item) => (
                                <CommandItem
                                    key={item.id}
                                    value={item.firstName + " " + item.lastName} // search uses this
                                    onSelect={() => handleSelect(item.id, item.firstName + " " + item.lastName, item.email ?? "")}
                                >
                                    <CheckIcon
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedId === item.id ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {item.firstName + " " + item.lastName}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}


export default SelectCustomer