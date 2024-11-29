import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

export default function DeleteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-red-600 hover:text-red-800 transition-colors duration-200"
      title="Eliminar registro"
    >
      <TrashIcon className="h-5 w-5" />
    </button>
  );
}