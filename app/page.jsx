import NewsItem from '@/components/NewsItem';
import Image from 'next/image'

export default async function Home() {
  const res=await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`);
  const data=await res.json();
  const newsData=data?.articles;
  return (
   <main className='px-5 py-10 sm:px-10 lg:px-20'>
    
      <h1 className='mb-6 text-3xl font-bold text-black'>Breaking News</h1>
 <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        {newsData?.map((item)=>{
          return <NewsItem key={item?.title} article={item} />
        })}
      </div>
     
   </main>
  )
}
/*
      
*/
