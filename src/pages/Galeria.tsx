import React from "react";
import GaleriaItem from "../components/GaleriaItem";
import "./css/galeria.css"

export default function Galeria(){

    const gallery = [
        "https://via.placeholder.com/200x200",
        "https://via.placeholder.com/200x200",
        "https://via.placeholder.com/200x200",
        "https://via.placeholder.com/200x200",
        "https://via.placeholder.com/200x200",
        "https://via.placeholder.com/200x200",
        "https://via.placeholder.com/200x200",
        "https://via.placeholder.com/200x200"
    ]

    return(
        <>
            <h1 className="main-tittle">Galeria</h1>
            <div className="images-container">
                {
                    gallery.map((e: any) => {
                        return(
                            <GaleriaItem src={e}/>
                        )
                    })
                }
            </div>
        </>
    )
}