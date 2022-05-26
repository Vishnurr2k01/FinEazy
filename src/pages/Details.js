import React, { useRef } from 'react'
import ChartPie from '@garvae/react-pie-chart'
import {FaDotCircle} from 'react-icons/fa'
import axios from 'axios'

function Details() {
    const data = [{
        color: '#e74949',
        order: 1,
        segmentId: '001',
        value: 10,
    },
    {
        color: '#49bae7',
        order: 2,
        segmentId: '002',
        value: 10,
    }]
    const investHandler = () => {
        console.log('hello');
        axios.post('https://fineazy.herokuapp.com/getprice/buy').then(res => { console.log(res.data) }).catch(err => { console.log(err) })
       }
       const sell=()=>{
        axios.post('https://fineazy.herokuapp.com/getprice/sell').then(res => { console.log(res.data) }).catch(err => { console.log(err) })
       }
    const ref = useRef(null)
    return (
        <div>
            <div className="flex justify-between lg:mx-52 bg-gray-100 p-8 rounded-lg items-center">
                <div className="flex">
                    <div className="">
                        <h3 className='text-2xl font-bold mb-2'>Equity and Gold</h3>
                        <h6 className='text-xs mb-2'>Managed by abcd </h6>
                        <h5 className='max-w-[40ch] text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>

                    </div>
                </div>
                <div className="">
                    <h4 className='text-xl'>24h Change</h4>
                    <h4 className='text-xl text-green-500'>14.4%</h4>
                </div>
            </div>
            <fieldset className='border-4 w-[30rem] ml-[15rem] mt-12 p-4'>
                <legend className='ml-4'><h3>Popular</h3></legend>
                <h4>Lorem ipsum dolor sit amet.</h4>
            </fieldset>
            <div className="flex ml-[15rem] mt-12">
                <div className="">
                    <h3 className='text-xl  '>Ovreview</h3>

                    <h4 className='text-xl mt-4'>About the smallcase</h4>
                    <p className='max-w-[75ch] mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tempore quae labore nostrum consectetur provident beatae nulla voluptate cum et.</p>
                </div>
                <div className="ml-12">
                    <h5 className='text-xs'>Minimum Investment amount</h5>
                    <h3 className='text-2xl mt-4 font-bold'> 20 USDT</h3>
                    <h6 className='mt-4 text-sm'>Get free access forever</h6>
                    <h5 className='text-sm font-bold'>See more benifits</h5>
                    <button type="submit" className='mt-4 w-[10rem] py-2 border-2' onClick={investHandler}> Invest Now</button> <br />
                    <button type="submit" className='mt-4 w-[10rem] py-2 border-2'>Add to Watchlist</button> <br />
                    <button type="submit" className='mt-4 w-[10rem] py-2 border-2' onClick={sell}>sell</button>
                </div>
            </div>
            <div className="ml-[15rem] mt-8">
                <h3 className='text-xl'>Weights</h3>
                <div
                    ref={ref}
                    // here we use parent container size to resize chart depends on it 
                    style={{
                        display: 'flex',
                        width: '200px',
                        height: '200px',

                    }}
                    className="mt-12"
                    // donutHoleRadius=
                >
                    <ChartPie data={data} parentRef={ref} />
                </div>
<h4 className='text-[#e74949] flex items-center text-xl mt-4'><FaDotCircle/> &nbsp; BTC : 50%</h4>
<h4 className='text-[#49bae7] flex items-center text-xl my-2'><FaDotCircle/>&nbsp; ETH : 50%</h4>
            </div>

        </div>
    )
}

export default Details