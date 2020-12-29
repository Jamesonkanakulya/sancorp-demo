import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer() {
    return (
        <div>
            <ReactPlayer  width="100%" volume muted controls url="https://chamu.nebula.to/1a23bb58ddf81bec7295ea9465433b20bbef7854.mp4?md5=_R5g-IMNy1cR1ujNdfRuug&expires=1608815667"/>
            
        </div>
    )
}

export default VideoPlayer
