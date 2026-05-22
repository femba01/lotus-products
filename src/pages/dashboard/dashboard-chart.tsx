import React from 'react'
import type { Product } from '../../types/products';

type Props = {
    productdata?: Product[];
}

const DashboardChart = ({productdata}: Props) => {
    return (
        <div className='grid md:grid-cols-2 gap-6'>
            <div>
                <h2 className="text-xl font-semibold mb-4">Sales Over Time</h2>
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Chart Placeholder]</span>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-4">Top Selling Products</h2>
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Chart Placeholder]</span>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-4">Revenue by Category</h2>
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Chart Placeholder]</span>
                </div>
            </div>

        </div>
    )
}

export default DashboardChart;