import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from '../Request';

const Main = () => {

    const [movies,setMovies]= useState([])
    
    const movie = movies[Math.floor(Math.random() * movies.length)]    
    
    useEffect(()=>{
        axios.get(requests.requestPopular)
        .then(response => setMovies(response.data.results))
        .catch(err => console.error(err));
      
  },[]);

    const truncateString=(String,Number) =>{
        if(String?.length> Number){
            return String.slice(0,Number) +'...'
        }else{
            return String
        }
    }
  console.log(movies);
  return (
    <div className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black '></div>
        <img className='object-cover w-full h-full'  src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='absolute top-[20%] w-full p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
            <div className='flex gap-4 my-5'>
            <button className='bg-white text-black px-4 py-2 '>Play</button>
            <button className='border border-white px-4 py-2'>Watch Later</button>
            </div>
            <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
            <p className='max-w-[70%] lg:max-w-[50%] w-full xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview,150)} </p>
        </div>
      </div>
    </div>
  )
}

export default Main
