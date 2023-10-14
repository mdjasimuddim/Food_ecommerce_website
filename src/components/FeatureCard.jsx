import React from 'react'

const FeatureCard = ({title, icon}) => {
  return (
    <div className='flex items-center gap-4'>
        <div className='bg-gray-300 w-[50px] h-[50px] text-[24px] text-accentDark grid place-items-center rounded-full '>
            {icon}
        </div> 
        <div>
            <h3 className='text-xl font-medium text-accent'>{title}</h3>
            <p className='text-[14px] text-gray-500'>Lorem, ipsum dolor.</p>
        </div>
    </div>
  )
}

export default FeatureCard