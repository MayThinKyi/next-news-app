import NewsItem from '@/components/NewsItem';
import Head from 'next/head';
import React from 'react'

const CategoryPage = async({params}) => {
   const category=params.category;
   const res=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`);
   const data=await res.json();
   const categoryData=data?.articles;
  return (
    <div className='px-5 py-10 sm:px-10 lg:px-20'>
       <head>
        <title>{`Category - ${category.toUpperCase()}`}</title>
      </head>
    <h1 className='mb-6 text-3xl font-bold text-black'>Category : {category.toUpperCase()}</h1>
    <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
      {categoryData?.map((item)=>{
        return <NewsItem key={item?.title} article={item} />
      })}
    </div>
 </div>
  )
}

export default CategoryPage