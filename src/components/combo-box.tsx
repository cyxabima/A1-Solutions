"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export type ComboboxItem = {
    id: string
    name: string
}

type ComboboxProp = {
    list: ComboboxItem[]
    nameOfCombo: string
    value: string
    onChange?: (id: string) => void
}

export function Combobox({ list, nameOfCombo, value, onChange }: ComboboxProp) {
    const [open, setOpen] = React.useState(false)
    const [selectedId, setSelectedId] = React.useState(value)

    const selectedItem = list.find((item) => item.id === selectedId)

    const handleSelect = (id: string) => {
        setSelectedId(id)
        onChange?.(id)
        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between"
                >
                    {selectedItem ? selectedItem.name : `Select ${nameOfCombo}...`}
                    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder={`Search ${nameOfCombo}...`} />
                    <CommandList>
                        <CommandEmpty>No {nameOfCombo} found.</CommandEmpty>
                        <CommandGroup>
                            {list.map((item) => (
                                <CommandItem
                                    key={item.id}
                                    value={item.name} // search uses this
                                    onSelect={() => handleSelect(item.id)} // store ID instead
                                >
                                    <CheckIcon
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedId === item.id ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {item.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
