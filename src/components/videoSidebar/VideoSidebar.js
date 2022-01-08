import React, { useState } from 'react'
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import MessageIcon from "@material-ui/icons/Message"
import ShareIcon from "@material-ui/icons/Share"
import "./VideoSidebar.css"

const VideoSidebar = ({likes, share, message}) => {
    const [liked, setLiked] = useState(false)


    return (
        <div className='videoSidebar'>
            <div className='videoSidebar__button'>
                {liked ? (
                    <FavoriteIcon
                        fontSize="large"
                        onClick = {(e) => setLiked(false)}
                        style={{color: "red"}}

                    />
                ):(
                    <FavoriteBorderIcon
                        fontSize="large"
                        onClick={(e) => setLiked(true)}
                    />
                )
                }
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className='videoSidebar__button'>
                <MessageIcon fontSize="large" />
                <p style={{color:"white"}}>{message}</p>
            </div>
            <div className='videoSidebar__button'>
                <ShareIcon fontSize="large" />
                <p>{share}</p> 
            </div>
        </div>
    )
}

export default VideoSidebar
