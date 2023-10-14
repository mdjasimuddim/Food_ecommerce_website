import React from 'react'

const CategoryCard = ({img, name, count}) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
        <div className="flex justify-between items-center p-2">
            <div className="space-y-4">
                <h4 className='font-medium text-xl'>{name}</h4>
                <p className="text-gray-500">{count}</p>
            </div>
            <img src={img} className = "w-[90px] h-[90px] rounded-full" alt={name} />
        </div>
    </div>
  )
}

export default CategoryCard