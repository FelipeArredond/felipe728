import { useStore } from "@nanostores/react";
import React from "react";
import GaleriaItem from "../components/GaleriaItem";
import { isNavOpen } from "../navStore";
import "./css/galeria.css"

export default function Galeria(){

    const $isNavOpen = useStore(isNavOpen);

    const gallery = [
        "https://firebasestorage.googleapis.com/v0/b/felipe728-c4a03.appspot.com/o/fast.jpg?alt=media&token=49aa15ee-d715-4ee3-903e-165a4c9c513d",
        "https://firebasestorage.googleapis.com/v0/b/felipe728-c4a03.appspot.com/o/front.jpg?alt=media&token=d50130e5-5d9b-4070-90cd-fe1bffbc24b3",
        "https://firebasestorage.googleapis.com/v0/b/felipe728-c4a03.appspot.com/o/left1.jpg?alt=media&token=0918dbcd-d9fe-4054-81c9-c29b1b19c750",
        "https://firebasestorage.googleapis.com/v0/b/felipe728-c4a03.appspot.com/o/left2.jpg?alt=media&token=56f11b88-fddc-4fd3-99b5-d785e14ebb99",
        "https://firebasestorage.googleapis.com/v0/b/felipe728-c4a03.appspot.com/o/right.jpg?alt=media&token=dd4aeeae-6fce-4555-9cc7-0246f2e4e9fc",
        "https://firebasestorage.googleapis.com/v0/b/felipe728-c4a03.appspot.com/o/right2.jpg?alt=media&token=a87c2047-5130-40c2-9c71-8d1ec594a544",
        "https://firebasestorage.googleapis.com/v0/b/felipe728-c4a03.appspot.com/o/water.jpg?alt=media&token=66045e52-84e5-471e-b09c-3970d55aa846",
        "https://firebasestorage.googleapis.com/v0/b/felipe728-c4a03.appspot.com/o/water2.jpg?alt=media&token=f4fc05bd-7b97-4bd5-81fe-79f4a0762797"
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