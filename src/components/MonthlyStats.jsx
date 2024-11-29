import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '../utils/dateUtils';

export default function MonthlyStats({ products }) {
  const monthlyData = products.reduce((acc, product) => {
    const date = new Date(product.date);
    const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`;
    
    if (!acc[monthYear]) {
      acc[monthYear] = {
        month: monthYear,
        totalProducts: 0,
        totalValue: 0,
        uniqueProducts: new Set(),
        productsBySize: {
          xs: 0, s: 0, m: 0, l: 0, xl: 0
        }
      };
    }
    
    acc[monthYear].totalProducts += product.total;
    acc[monthYear].totalValue += product.totalValue;
    acc[monthYear].uniqueProducts.add(product.product);
    acc[monthYear].productsBySize.xs += Number(product.xs);
    acc[monthYear].productsBySize.s += Number(product.s);
    acc[monthYear].productsBySize.m += Number(product.m);
    acc[monthYear].productsBySize.l += Number(product.l);
    acc[monthYear].productsBySize.xl += Number(product.xl);
    
    return acc;
  }, {});

  const chartData = Object.entries(monthlyData).map(([key, data]) => ({
    month: key,
    totalProducts: data.totalProducts,
    totalValue: data.totalValue,
    uniqueProducts: data.uniqueProducts.size,
    ...data.productsBySize
  })).sort((a, b) => {
    const [monthA, yearA] = a.month.split('/');
    const [monthB, yearB] = b.month.split('/');
    return yearA - yearB || monthA - monthB;
  });

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Estadísticas Mensuales</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {chartData.length > 0 && (
          <>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-800">Total Productos</h3>
              <p className="text-2xl font-bold text-blue-900">
                {chartData[chartData.length - 1].totalProducts}
              </p>
              <p className="text-sm text-blue-600">Último mes</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-800">Valor Total</h3>
              <p className="text-2xl font-bold text-green-900">
                {formatCurrency(chartData[chartData.length - 1].totalValue)}
              </p>
              <p className="text-sm text-green-600">Último mes</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-purple-800">Productos Únicos</h3>
              <p className="text-2xl font-bold text-purple-900">
                {chartData[chartData.length - 1].uniqueProducts}
              </p>
              <p className="text-sm text-purple-600">Último mes</p>
            </div>
          </>
        )}
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip 
              formatter={(value, name) => {
                if (name === 'Valor Total') return formatCurrency(value);
                return value;
              }}
            />
            <Legend />
            <Bar yAxisId="left" dataKey="totalProducts" name="Total Productos" fill="#8884d8" />
            <Bar yAxisId="right" dataKey="totalValue" name="Valor Total" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}