import { BadgeCent, Boxes, CreditCard, DollarSign, FileText, Home, icons, Layers, Package, ReceiptText, Ruler, ShoppingCart, Truck, Users } from "lucide-react";
import Link from "next/link";
import SidebarLink from "./sidebar-link";


const menuItems = [
    {
        label: "Home",
        icon: <Home size={18} />,
        href: "/dashboard",
    },
    {
        label: "Inventory",
        icon: <Boxes size={18} />,
        children: [
            { label: "Products", icon: <Package size={18} />, href: "/dashboard/inventory/products" },
            { label: "Categories", icon: <Layers size={18} />, href: "/dashboard/inventory/categories" },
            { label: "Units", icon: <Ruler size={18} />, href: "/dashboard/inventory/units" },
            { label: "Brands", icon: <BadgeCent size={18} />, href: "/dashboard/inventory/brands" },
        ],
    },
    {
        label: "Sale",
        icon: <ShoppingCart size={18} />,
        children: [
            { label: "Sales List", icon: <ReceiptText size={18} />, href: "/dashboard/sales/list" },
            { label: "Create Sale", icon: <FileText size={18} />, href: "/dashboard/sales/create" },
            { label: "Customers", icon: <Users size={18} />, href: "/dashboard/sales/customers" },
            { label: "Invoices", icon: <CreditCard size={18} />, href: "/dashboard/sales/invoices" },
        ],
    },
    {
        label: "Purchase",
        icon: <Truck size={18} />,
        children: [
            { label: "Purchase List", icon: <ReceiptText size={18} />, href: "/dashboard/purchases/list" },
            { label: "Add Purchase", icon: <FileText size={18} />, href: "/dashboard/purchases/add" },
            { label: "Suppliers", icon: <Truck size={18} />, href: "/dashboard/purchases/suppliers" },
        ],
    },
    {
        label: "Expense",
        icon: <DollarSign size={18} />,
        children: [
            { label: "Expense List", icon: <ReceiptText size={18} />, href: "/dashboard/expenses/list" },
            { label: "Add Expense", icon: <FileText size={18} />, href: "/dashboard/expenses/add" },
        ],
    },

];

function Menu() {
    return (
        <div
            className="mt-10 text-sm flex flex-col gap-3"
        >
            {menuItems.map(i => (

                <SidebarLink
                    key={i.label}
                    href={i.href || ""}
                    icon={i.icon}
                    label={i.label}
                    children={i.children}
                />

            ))}
        </div>
    )
}

export default Menu