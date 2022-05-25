import React from 'react'
import Investment from '../components/Investment'
import '../assets/investment.css'
import { GoVerified } from 'react-icons/go'
import { ImBookmarks } from 'react-icons/im'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { GiCoffeeMug } from 'react-icons/gi'

function Home() {
    return (
        <div>
            <div className="Home_overview flex justify-between bg-slate-100 mx-auto p-4 text-left mb-12 rounded-lg" >
                <div className="">
                    <h3 className='text-2xl font-semibold'>Overview</h3>
                    <h5 className='text-xs'>Markets&your investments</h5>
                </div>
                <div className="">
                    <h4>NIFTY</h4>
                    <h3>142412</h3>
                </div>
                <div className="">
                    <h4>NIFTY</h4>
                    <h3>142412</h3>
                </div>
                <div className="">
                    <h4>NIFTY</h4>
                    <h3>142412</h3>
                </div>
                <div className="">
                    <button className='bg-[#2685ef] text-white p-1 rounded' type="submit">Discover smallcases</button>
                </div>
            </div>
            <h3 className='text-2xl mb-8 font-bold text-center'>Investment Insighs</h3>
            <div className="flex lg:ml-60">
                <div className="">
                    <Investment />
                    <Investment />
                    <Investment />
                </div>
                <div className="Home_container2 p-4 ml-8 text-left rounded">
                    <h3 className='font-bold mb-4'>How to start investing in smallcases</h3>
                    <h5 className='mb-4 flex items-center'><GoVerified className='text mt-1 text-green-400' /> &nbsp; Viewed Home</h5>
                    <h5 className='mb-4 flex items-center'><ImBookmarks className='text mt-1 ' /> &nbsp; Watchlist a smallcase</h5>
                    <h5 className='mb-4 flex items-center'><BsFillBriefcaseFill className='text mt-1 ' /> &nbsp; Invest in smallcase</h5>
                    <h5 className='mb-4 flex items-center'><GiCoffeeMug className='text mt-1 ' /> &nbsp; Start SIP</h5>
                </div>
            </div>
        </div>
    )
}

export default Home