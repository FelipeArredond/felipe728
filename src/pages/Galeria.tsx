import { useStore } from "@nanostores/react";
import React from "react";
import GaleriaItem from "../components/GaleriaItem";
import { isNavOpen } from "../navStore";
import "./css/galeria.css"

export default function Galeria(){

    const $isNavOpen = useStore(isNavOpen);

    const gallery = [
        "../../assets/fast.jpg",
        "../../assets/front.jpg",
        "../../assets/left1.jpg",
        "../../assets/left2.jpg",
        "../../assets/right.jpg",
        "../../assets/right2.jpg",
        "../../assets/water.jpg",
        "../../assets/water2.jpg"
    ]

    return(
        <>{!$isNavOpen?<><h1 className="main-tittle">Galeria</h1>
                    <div className="images-container">
                        {!$isNavOpen?gallery.map((e: any) => {
                                return(
                                    <GaleriaItem src={e}/>
                                )
                            }):null
                        }
                    </div>
                </>:null
            }
            <div className="container"></div>
        </>
    )
}