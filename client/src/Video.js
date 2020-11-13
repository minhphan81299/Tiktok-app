import React,{useRef,useState} from 'react'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
import "./Video.css"
function Video(props) {
    const videoRef=useRef(null);
    const [playing,setPlaying]=useState(false);
    const handleVideoPress =()=>{
        if (playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className="video">
          <video onClick={handleVideoPress} className="video__player" loop ref={videoRef} src={props.url}></video>
            <VideoFooter></VideoFooter>
            <VideoSidebar></VideoSidebar>
        </div>

    )
}

export default Video
