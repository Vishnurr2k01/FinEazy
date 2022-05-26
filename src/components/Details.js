import React from "react";
import axios from "axios";
const Investment = () => {
   
    return <>
    <div className="box mx-4 bg-[#F9FAFB] rounded-md my-5 p-10">
  <div className="flex flex-row">
      <div className="image  rounded-lg">
        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" className="rounded-md my-3 mx-2 w-24 "/>
      </div>
      <div className="info">
        <div className="heading font-medium text-xl">
           Bluechips
        </div>
        <div className="sub text-xs text-[#B2B5B9]">
            managed by altcoin jordan
        </div>
        <div className="explanation">
            Invest in the future,invest in metaverse
        </div>
      </div>
      <div className="returns mx-auto">
          <div>
              24hr returns
          </div>
          <div className="percentage text-green-500">
                +10%
          </div>
      </div>

  </div>
    </div>
    <fieldset className="border-2 mx-8">
        <legend>
            Popular
        </legend>
        Crossed more than 50k investors
    </fieldset>
    <div className="overview">
        <div className="n text-xl font-bold">
            Overview
        </div>
        <div className="exp text-gray-900">
            This Basket invests in 50% into bitcoin and 50% into ethereum
        </div>
    </div>
    
    
    </>
}
export default Investment;