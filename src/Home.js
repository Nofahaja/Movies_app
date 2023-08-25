import React from 'react'
import Firstscroll from './Trending'
import "./Home.css"
import Navbar from './Navbar'
import Popular from './Popular' 
import Toprated from './Toprated'
import Upcoming from './Upcoming'
import Latest from './Latest'
import Nowplaying from './Nowplaying'
import Series from './Series'
import Topseries from './Topseries'
import Onair from './Onair'
import Airingtoday from './Airingtoday'

export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className='bannermov'>
        <div className='ban'>
            
            <div className='moviebutton'>
                <button className='playbutton'>Play</button>
                <button className='playbutton'>My list</button>

            </div>
            <h1 className='descrp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, varius in dictum sit amet, consequat sed urna. Suspendisse eu fermentum neque, in ornare tortor. Duis pulvinar at leo eget interdum.</h1>
        </div>
      <div className="shade"></div>
    </div>
    <Firstscroll/>

    <Upcoming/>
    <Latest/>
    <Toprated/>
    <Nowplaying/>
   
<Popular/>
    <Series/>
    <Topseries/>
<Onair/>
<Airingtoday/>

    </div>
  )
}
