import React from "react";
import { NavBar } from "../components/navbar/navbar.jsx";
import { ImgFond } from '../components/imgFond/imgFond.jsx';
import { TitleImgMain } from '../components/titlemain/titleimgmain.jsx';
import { DescripOrange } from '../components/descriporange/descriporange.jsx';
import { TitleService } from '../components/titleservice/titleservice.jsx';
import { ServicePlan } from '../components/serviceplan/serviceplan.jsx';

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
                    <section className="sec3">
                        <TitleService/>
                        <article className="sec3_contentService">
                            <ServicePlan
                                name="plan basic"
                                price="precio(ejemplo:$250)"
                                subtitle="Subtitle"
                                despOne="Responsive"
                                despTwo="8 Secciones"
                                despThree="UX/IX"
                                despFour="Web Designed"
                                despFive="Ecommers"
                            />
                            <ServicePlan
                                name="plan medium"
                                price="precio(ejemplo:$250)"
                                subtitle="Subtitle"
                                despOne="Responsive"
                                despTwo="8 Secciones"
                                despThree="UX/IX"
                                despFour="Web Designed"
                                despFive="Ecommers"
                            />
                            <ServicePlan
                                name="plan pro"
                                price="precio(ejemplo:$250)"
                                subtitle="Subtitle"
                                despOne="Responsive"
                                despTwo="8 Secciones"
                                despThree="UX/IX"
                                despFour="Web Designed"
                                despFive="Ecommers"
                            />       
                        </article>
                    </section>
                </section>
            </main>
        </div>
        
            
    )
}