import React from 'react'
import { BiWorld } from 'react-icons/Bi';
import { IconContext } from "react-icons/lib";

export default function Nav() {
    return (
        <IconContext.Provider value={{ className: 'react-icons' }}>
            <header className=' bg-red-400 text-white shadow-lg py-2 flex justify-center w-screen '>
                <div className='flex items-center '>
                    <BiWorld />
                    <p className='px-2'>Travel Journey</p>
                </div>
            </header>
        </IconContext.Provider>
    )
}