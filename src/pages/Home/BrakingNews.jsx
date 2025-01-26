import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import { to } from './../../../node_modules/moment/src/lib/moment/to';

const BrakingNews = () => {
  return (
    <div className='flex'>
        <button className='btn btn-primary'>Braking News</button>
        <Marquee pauseOnHover={true} speed={100}>
          <Link to='/' className='mr-2'>
          I can be a react component , multiple react componets , or just some text.</Link>
          <Link to='/' className='mr-2'>
          I can be a react component , multiple react componets , or just some text.</Link>
          <Link to='/' className='mr-2'>
          I can be a react component , multiple react componets , or just some text.</Link>
        </Marquee>
    </div>
  )
}

export default BrakingNews