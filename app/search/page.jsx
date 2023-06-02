import NewsItem from '@/components/NewsItem';
import SearchBox from '@/components/SearchBox'
import React from 'react'

const SearchPage =async ({searchParams}) => {
    let newsData=[];
   let searchParam=searchParams.q;
   if(searchParam?.length>0){
   const res=await fetch( `https://newsapi.org/v2/everything?q=${searchParam}&apiKey=${process.env.NEWS_API_KEY}` );
   const data=await res.json();
    newsData= data?.articles;
   }
  return (
    <div className='px-5 py-10 sm:px-10 lg:px-20'>
      
    <h1 className='mb-6 text-3xl font-bold text-black'>Search News </h1>
    <SearchBox/>
    <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
    {newsData?.map((item)=>{
          return <NewsItem key={item?.title} article={item} />
        })}
    </div>
 </div>
  )
}

export default SearchPage