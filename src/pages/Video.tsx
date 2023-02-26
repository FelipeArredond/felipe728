import React from "react";
import "./css/video.css"

export default function Video(){
    return(
        <div className="video-container">
            <video src="../../assets/preVi2.mov" playsInline loop muted autoPlay></video>
        </div>
    )
}