import React from 'react';
import { Card } from '../ui/card';
import { formatAmount } from '@/lib/utils';

function SummaryCard({ type, quantity }: { type: string; quantity: number }) {
    return (
        <Card
            className="
                flex-1 min-w-40 p-6 rounded-xl text-white shadow-md
                odd:bg-gradient-to-br odd:from-orange-300 odd:via-orange-400 odd:to-orange-500
                even:bg-gradient-to-br even:from-blue-500 even:via-blue-600 even:to-blue-700
            "
        >
            <div className="text-lg font-semibold capitalize">{type}</div>
            <div className="text-3xl font-bold mt-2">{formatAmount(quantity)}</div>
        </Card>
    );
}

export default SummaryCard;
