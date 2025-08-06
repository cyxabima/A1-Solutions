import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatAmount(amount: number) {
  return amount.toLocaleString('ur-PK', {
    style: 'currency',
    currency: 'PKR',
    maximumFractionDigits: 0
  });
}
