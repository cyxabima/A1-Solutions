import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export type selectItems = {
    name: string;
    value: string;
}
type CustomSelectProps = {
    items: selectItems[]
    name: string
    value?: string
    onChange?: (value: string) => void;
}

function CustomSelect({ items, name, value, onChange }: CustomSelectProps) {
    return (
        <Select name={name} value={value} onValueChange={onChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={name} />
            </SelectTrigger>
            <SelectContent>
                {items.map((item) => (
                    <SelectItem key={item.name} value={item.value}>{item.name}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default CustomSelect