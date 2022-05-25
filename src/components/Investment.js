import React from 'react'
import '../assets/investment.css'
import {FaCrown} from 'react-icons/fa'

function Investment() {
    return (
        <div className='Investment_container flex justify-between items-center mx-auto bg-slate-100 mb-4 rounded-lg p-4 text-left'>
            <div className="flex flex-row">
                <div className=""></div>
                <div className="">
                    <h3 className='text-xl font-semibold '>Equity and gold</h3>
                    <h5 className='text-xs mt-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        assumenda dolores quia? </h5>
                </div>
            </div>
            <div className="Investment_container2">
                <h4 className='font-bold mb-2 flex items-center'><FaCrown className='text-amber-400' />&nbsp; Trending</h4>
                <h5 className='text-xs'> Lorem ipsum dolor sit amet. </h5>
            </div>
            <div className="">
                <button className='Investment_viewbtn text-sm border-2 p-2' type="submit">View SmallCase</button>
            </div>
        </div>
    )
}

export default Investment