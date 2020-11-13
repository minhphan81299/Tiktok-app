import React from 'react'
import './VideoFooter.css'
import Ticker from 'react-ticker'
function VideoFooter() {
    return (
        
            <div className="videoFooter">
                <div className="videoFooter__text">

                <h3>@Minh Phan</h3>
                <p>Created by Minh Phan</p>
                <Ticker className="ticker" mode="smooth">
                    {
                        ()=>(
                               
                                    <p>Minh Phan 812</p>
                             
                        )
                    }
                </Ticker>
                </div>
               
            </div>
       
    )
}

export default VideoFooter
