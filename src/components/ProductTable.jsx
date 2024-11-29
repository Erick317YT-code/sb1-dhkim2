import React from 'react';
import { formatDate, formatCurrency } from '../utils/dateUtils';
import DeleteButton from './DeleteButton';

export default function ProductTable({ products, onDelete }) {
  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Fecha</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Producto</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Color</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">XS</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">S</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">M</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">L</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">XL</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Valor Unidad</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Valor Total</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {products.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900">{formatDate(new Date(product.date))}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{product.product}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{product.color}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{product.xs}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{product.s}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{product.m}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{product.l}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{product.xl}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{product.total}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{formatCurrency(product.valuePerUnit)}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{formatCurrency(product.totalValue)}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                      <DeleteButton onClick={() => onDelete(index)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}