"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Invoice, SaleItem } from "./types";

type InvoiceContextType = {
    invoice: Invoice;
    setCustomer: (id: string, name: string, email: string) => void;
    addSaleItem: (item: SaleItem) => void;
    setPaidAmount: (paidAmount: number) => void;
    resetInvoice: () => void;
};

const defaultInvoice: Invoice = {
    customerId: null,
    customerName: "",
    customerEmail: "",
    saleNumber: null,
    saleType: "PROJECT",
    saleAmount: 0,
    paidAmount: 0,
    profit: 0,
    balanceAmount: 0,
    paymentStatus: "PAID",
    paymentMethod: "",
    transactionCode: "",
    transactionAccount: "",
    shopId: null,
    saleItems: []
};

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);

export const InvoiceProvider = ({ children }: { children: ReactNode }) => {
    const [invoice, setInvoice] = useState<Invoice>(defaultInvoice);

    const setCustomer = (id: string, name: string, email: string) => {
        setInvoice(prev => ({
            ...prev,
            customerId: id,
            customerName: name,
            customerEmail: email
        }));
    };

    const addSaleItem = (item: SaleItem) => {
        setInvoice(prev => ({
            ...prev,
            saleItems: [...prev.saleItems, item],
            saleAmount: prev.saleAmount + item.salePrice * item.qty,
            profit: prev.profit + item.profit
        }));
    };

    const setPaidAmount = (paidAmount: number) => {
        setInvoice(prev => ({
            ...prev,
            paidAmount,
            balanceAmount: prev.saleAmount - paidAmount
        }))
    }

    const resetInvoice = () => setInvoice(defaultInvoice);

    return (
        <InvoiceContext.Provider value={{ invoice, setCustomer, addSaleItem, setPaidAmount, resetInvoice }}>
            {children}
        </InvoiceContext.Provider>
    );
};


export const useInvoice = () => {
    const context = useContext(InvoiceContext);
    if (!context) {
        throw new Error("useInvoice must be used within an InvoiceProvider");
    }
    return context;
};
