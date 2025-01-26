import React from 'react'
import moment from 'moment'

const Header = () => {
  return (
    <div className='text-center'>
        <h2 className='text-4xl mx-auto text-gray-400'>The Dragon News</h2>
        <p>Journalism Without Fear or Favor</p>
        <p className='text-xl'>{moment().format("ddd,MMMM D YYYY")}</p>
    </div>
  )
}

export default Header