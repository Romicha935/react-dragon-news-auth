import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav'
import RightSideNav from '../../Shared/RightSideNav/RightSideNav'
import BrakingNews from './BrakingNews'
import { useLoaderData } from 'react-router-dom'
import NewsCard from './NewsCard'

const Home = () => {
    const news = useLoaderData()
    console.log(news);
    
  return (
    <div>
        <Header/>
        <BrakingNews/>
        <Navbar/>
        <h3 className='text-3xl font-poppins'>this is home page</h3>
        <div className='grid grid-cols-1  md:grid-cols-4 gap-5'>
            <div className=''>
                <LeftSideNav/>
            </div>
            {/* news container */}
            <div className='col-span-2'>
                <h2 className="text-4xl">
                    {
                        news.map(aNews => <NewsCard key={aNews.id} news={aNews}></NewsCard>)
                    }
                </h2>
            </div>
            <div className=''>
                <RightSideNav/>
            </div>
        </div>
    </div>
  )
}

export default Home