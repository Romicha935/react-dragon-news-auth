import React from 'react'
import Header from '../pages/Header'
import { useParams } from 'react-router-dom'
import RightSideNav from '../Shared/RightSideNav/RightSideNav'
import Navbar from '../pages/Navbar'

const News = () => {
    const {id} = useParams()
    console.log(id);
    
  return (
    <div>
        <Header/>
        <Navbar/>
        <div className='grid md:grid-cols-4'>
            <div className='col-span-3'>
                <h2 className='text-5xl'>News Detail</h2>
                <p>{id}</p>
            </div>
            <div>
                <RightSideNav/>
            </div>
        </div>
    </div>
  )
}

export default News