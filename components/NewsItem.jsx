import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewsItem = ({article}) => {
  return (
    <Link href={article?.url} target='_blank' className='bg-[#fff] rounded-lg'>
        <img className='rounded-t-lg max-h-[200px] object-cover' width={500} height={200} src={article?.urlToImage ? article?.urlToImage: '/placeholder.png'} alt={article?.title} />
       <div className='px-5 pb-3'>
            <h1 className='line-clamp-3 text-xl font-semibold text-black my-2'>{article?.title}</h1>
            <h1 className='line-clamp-3'>{article?.content ? article?.content :'No Content....'}</h1>
       </div>
    </Link>
  )
}

export default NewsItem