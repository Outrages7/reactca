import React, { useState } from 'react';
import { Wheat, Apple, Carrot } from 'lucide-react';
import Filter from './Filter';

const Categories = () => {
  const [category, setCategory] = useState('');
  const categories = [
    { icon: <Wheat className="w-8 h-8" />, name: 'Grains' },
    { icon: <Apple className="w-8 h-8" />, name: 'Fruits' },
    { icon: <Carrot className="w-8 h-8" />, name: 'Vegetables' }
  ];

  const filterData = [
    { id: 1, title: 'All' },
    { id: 2, title: 'Grains' },
    { id: 3, title: 'Fruits' },
    { id: 4, title: 'Vegetables' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
        <Filter category={category} setCategory={setCategory} filterData={filterData} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {categories.map((categoryItem, index) => (
            <button
              key={index}
              className={`flex flex-col items-center p-6 rounded-xl shadow-sm hover:shadow-md transition
                ${category && category.toLowerCase() === categoryItem.name.toLowerCase()
                  ? 'bg-green-500 text-white' // Change background color when selected
                  : 'bg-white text-gray-700'
                }`}
            >
              {categoryItem.icon}
              <span className="mt-4 text-lg font-medium">{categoryItem.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
