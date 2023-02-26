import React from "react";
import "../pages/css/galeriaItem.css"

export default function GaleriaItem(props: any){
    return(
        <div className="image">
            <img src={props.src} alt="" />
        </div>
    )
}