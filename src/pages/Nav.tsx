import { useStore } from "@nanostores/react";
import React, { useState } from "react";
import { isNavOpen } from "../navStore";
import "./css/nav.css"

export default function Nav() {

    const $isNavOpen = useStore(isNavOpen);

    const home = import.meta.env.DOMAIN;

    return $isNavOpen ? <ul className="nav-comp">
        <li id="inicio"><a href={"https://felipe728.vercel.app/"}>Inicio</a></li>
        <li id="galeria"><a href="galeria">Galeria</a></li>
        {/* <li id="equipo"><a href="#">Equipo</a></li> */}
        <li id="palmares"><a href="palmares">Palmarés</a></li>
    </ul> : null
}