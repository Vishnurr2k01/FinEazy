import React from 'react'
import '../assets/investment.css'

function Investment() {
    return (
        <div className='Investment_container flex justify-between'>
            <div className="flex flex-row">
                <div className=""></div>
                <div className="">
                    <h3>Equity and gold</h3>
                    <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        assumenda dolores quia? </h5>
                </div>
            </div>
            <div className="flex flex-row">
                <h4>Trending</h4>
                <h5> Lorem ipsum dolor sit amet. </h5>
            </div>
            <div className="">
                <button className='Investment_viewbtn' type="submit">View SmallCase</button>
            </div>
        </div>
    )
}

export default Investment