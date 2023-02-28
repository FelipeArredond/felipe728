import { useStore } from "@nanostores/react";
import React from "react";
import { isNavOpen } from "../navStore";
import "../pages/css/bars.css"

export default function Bars(){

    const $isNavOpen = useStore(isNavOpen);

    return(
        <div className="container-barsim" id="bars">
            <div className={$isNavOpen?"first-active":"first"}></div>
            <div className={$isNavOpen?"second-active":"second"}></div>
            <div className={$isNavOpen?"third-active":"third"}></div>
        </div>
    )
}