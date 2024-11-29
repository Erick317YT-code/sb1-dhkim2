import React, { useState } from 'react';
import { formatInputDate, parseDate } from '../utils/dateUtils';

export default function ProductForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    date: formatInputDate(new Date()),
    product: '',
    color: '',
    xs: 0,
    s: 0,
    m: 0,
    l: 0,
    xl: 0,
    valuePerUnit: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = Number(formData.xs) + Number(formData.s) + Number(formData.m) + 
                 Number(formData.l) + Number(formData.xl);
    const totalValue = total * Number(formData.valuePerUnit);
    
    onSubmit({
      ...formData,
      date: parseDate(formData.date),
      total,
      totalValue
    });
    
    setFormData({
      ...formData,
      product: '',
      color: '',
      xs: 0,
      s: 0,
      m: 0,
      l: 0,
      xl: 0,
      valuePerUnit: 0
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Fecha</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Producto</label>
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Color</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">XS</label>
          <input
            type="number"
            name="xs"
            value={formData.xs}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">S</label>
          <input
            type="number"
            name="s"
            value={formData.s}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">M</label>
          <input
            type="number"
            name="m"
            value={formData.m}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">L</label>
          <input
            type="number"
            name="l"
            value={formData.l}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">XL</label>
          <input
            type="number"
            name="xl"
            value={formData.xl}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Valor por Unidad</label>
          <input
            type="number"
            name="valuePerUnit"
            value={formData.valuePerUnit}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Agregar Producto
        </button>
      </div>
    </form>
  );
}