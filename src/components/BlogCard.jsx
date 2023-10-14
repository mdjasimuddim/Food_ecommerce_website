import React from 'react'

const BlogCard = ({img, title, date, comment}) => {
  return (
    <div className='space-y-4 overflow-hidden'>
        <img src={img} alt="post" className='rounded-lg h-[300px] w-full hover:scale-105 transition-transform' />
        <div className="text-accent font-medium">
            <span>{date}</span> / 
            <span> {comment} Comments</span>
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
    </div>
  )
}

export default BlogCard