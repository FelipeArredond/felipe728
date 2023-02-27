import React from "react";
import "./css/video.css"

export default function Video(){
    return(//tryyin to vercel detect commit
        <div className="video-container">
            {/* <video playsInline loop muted autoPlay>
                <source src="../../assets/preVi2.mp4" type="video/mp4"/>
            </video> */}
            <img src="../../assets/mainImage.jpg" alt="" />
        </div>
    )
}