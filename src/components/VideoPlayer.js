import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer() {
    return (
        <div>
            <ReactPlayer  width="100%" volume muted controls url="https://www.youtube.com/watch?v=RtURL0FW3KI"/>
            
        </div>
    )
}

export default VideoPlayer
