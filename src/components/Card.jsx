import React from 'react'
import {CiLocationOn} from 'react-icons/Ci';

export default function Card({title, location, url, start, end, desc, image}) {
    return (
        <div className='Content  flex justify-center '>
            <img src={image} className=' mx-6 rounded-md shadow-lg'></img>
            <div className='Content-point '>
                
                <p className='flex items-center mt-4 mb-1'><CiLocationOn />{location}<a href={url} className='mx-2 text-gray-400 underline'>View On Google Maps</a></p>
                <h1 className='mb-1'>{title}</h1>
                <strong>{start} - {end}</strong>
                <p className='my-1'>{desc}</p>
                
            </div>
        </div>
    )
}