import React from "react";
import { NavBar } from "../components/navbar/navbar.jsx"
import { ImgFond } from '../components/imgFond/imgFond.jsx'
import { TitleImgMain } from '../components/titlemain/titleimgmain.jsx'
import { DescripOrange } from '../components/descriporange/descriporange.jsx'

export function Home(){
    return(
        <div className="contentGeneral">
            <NavBar/>
            <main className="main">
                <section className="main-cont">
                    <ImgFond/>
                    <section className="sec1">
                        <TitleImgMain/>
                    </section>
                    <section className="sec2">
                        <DescripOrange/>
                    </section>
                </section>
            </main>
        </div>
        
            
    )
}