import React from "react";
import "./css/palmares.css";
import { isNavOpen } from "../navStore";
import { useStore } from "@nanostores/react";

export default function Palmares() {
    
    const $isNavOpen = useStore(isNavOpen);

  return (
    <>
      {!$isNavOpen ?<><h1 className="main-tittle">Palmarés</h1> 
      <div className="palmares">
        <p>Campeon Nacional 2017 🇨🇴</p>
        <p>Campeon Nacional 2018 🇨🇴</p>
        <p>Campeon Lationo Americano 2019 🇲🇽</p>
        <p>Campeon Ibero Americano 2019 🇲🇽</p>
        <p>Top 15 Campeonato Español de SBK 2020 🇪🇸</p>
      </div></>: null}
      <div className="container"></div>
    </>
  );
}
