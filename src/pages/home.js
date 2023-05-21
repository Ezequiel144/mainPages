import React from "react";
import { NavBar } from "../components/navbar/navbar.jsx"
import { ImgFond } from '../components/imgFond/imgFond.jsx'
import { TitleImgMain } from '../components/titlemain/titleimgmain.jsx'

export function Home(){
    return(
        <div className="contentGeneral">
            <NavBar/>
            <main className="main">
                <ImgFond/>
                <TitleImgMain/>
            </main>
        </div>
        
            
    )
}