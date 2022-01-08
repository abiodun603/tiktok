import React, {useRef, useState} from 'react'
import VideoFooter from '../../components/videoFooter/VideoFooter';
import VideoSidebar from '../../components/videoSidebar/VideoSidebar';
import "./Video.css"

const Video = ({url, channel, description, song, likes, messages, shares}) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null);
    const handleVideoPress = () => {
        // if video is playing
        // stop it.....
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play();
            setPlaying(true);
        }

        // otherwise if its not playing
        // play it......
    }
    return (
        <div className = "video">
            <video
                onClick={handleVideoPress}
                loop
                className='video__player'
                ref = {videoRef}
                src = {url} 
            >
            </video>
            <VideoFooter
                channel = {channel}
                description={description}
                song={song}
            />
            <VideoSidebar
                message={messages}
                share = {shares}
                likes = {likes}
            /> 
        </div>
    )
}

export default Video
