import React from 'react'

function Navbar() {
    return (
        <div className='flex fixed w-full drop-shadow-lg justify-between bg-white h-12 p-2'>
            <div className=" flex  mx-12">
                <h5 className='mx-2'>Home</h5>
                <h5 className='mx-2'>Discover</h5>
                <h5 className='mx-2'>Create</h5>
            </div>
            <div className="flex mr-12">
                <h5 className='mx-2'> Watchlist</h5>
                <h5 className='mx-2'>Investments</h5>
            </div>
        </div>
    )
}

export default Navbar