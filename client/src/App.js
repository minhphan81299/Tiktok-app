
import './App.css';
import React,{useEffect,useState} from 'react';
import Video from './Video'
import axios from './axios'
function App() {
  const [videos,setVideos]=useState([])
  useEffect(() => {
    async function fetchPosts(){
      const response = await axios.get('/v2/posts')
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);
  console.log(videos)
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video)=>(
          <Video url={video.url} ></Video>
        ))}

      </div>
    </div>
  );
}

export default App;
