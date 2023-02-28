import React from "react";
import "./css/video.css"

export default function Video(){
    return(//tryyin to vercel detect commit
        <div className="video-container">
            <video playsInline loop muted autoPlay>
                <source src="https://firebasestorage.googleapis.com/v0/b/felipe728-c4a03.appspot.com/o/preVi2.mp4?alt=media&token=66155df9-5e81-4503-9820-932bce59cc02" type="video/mp4"/>
            </video>
        </div>
    )
}