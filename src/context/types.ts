// types.ts

export type SaleItem = {
    saleId: string;
    productId: string;
    qty: number;
    productName: string;
    salePrice: number;
    buyingPrice: number;
    profit: number,
    customerId: string
};

export type Invoice = {
    customerId: string | null;
    customerName: string;
    customerEmail?: string;
    saleNumber: number | null;
    saleType: "PROJECT" | "RETAIL";
    saleAmount: number;
    paidAmount: number;
    profit: number;
    balanceAmount: number;
    paymentStatus: "PAID" | "PENDING";
    paymentMethod: string;
    transactionCode: string;
    transactionAccount: string;
    shopId: string | null;
    saleItems: SaleItem[];
};
