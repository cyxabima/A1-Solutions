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

// from Internet 
export function generateSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')         // spaces → hyphen
    .replace(/[^\w-]+/g, '')      // remove non-alphanumeric except hyphen
    .replace(/--+/g, '-');        // collapse multiple hyphens
}

