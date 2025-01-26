import React from 'react'
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {title,thumbnail_url,details,id} = news;
  return (
    <div className="card bg-base-100shadow-xl">
    <figure>
      <img src={thumbnail_url} alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
     <p className='text-lg'>
        {
            details.length > 100 ? <p>{details.slice(0,100)} <Link to={`/news/${id}`} className='text-blue-500'>Read More...</Link></p>: <p>{details}</p>
        }
     </p>
    </div>
  </div>
  )
}

export default NewsCard