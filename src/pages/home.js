import React from "react";
import { NavBar } from "../components/navbar/navbar.jsx";
import { ImgFond } from '../components/imgFond/imgFond.jsx';
import { TitleImgMain } from '../components/titlemain/titleimgmain.jsx';
import { DescripOrange } from '../components/descriporange/descriporange.jsx';
import { TitleService } from '../components/titleservice/titleservice.jsx';
import { ServicePlan } from '../components/serviceplan/serviceplan.jsx';
import { GeneralTitle } from '../components/generaltitle/generaltitle.jsx';
import { Technologi } from '../components/technologi/technologi.jsx'
import javaScript from '../asset/icon/javascript-removebg-preview.png';
import cssImg from '../asset/icon/css3-removebg-preview.png';
import htmlImg from '../asset/icon/html5-2-removebg-preview.png';
import nodeJsImg from '../asset/icon/node-js-removebg-preview.png';
import reactImg from '../asset/icon/react-removebg-preview.png';
import sassImg from '../asset/icon/sass-removebg-preview.png';
import wordpressImg from '../asset/icon/wordpress-removebg-preview.png';
import FigmaImg from '../asset/icon/Figma.png';
import bootstrapImg from '../asset/icon/bootstrap-removebg-preview.png';
import imgOrangeSecFive from '../asset/img/imagenOrangeFineSec5.jpg';


export function Home(){

    /* const listIcon = [javaScript,cssImg,htmlImg,nodeJsImg,reactImg,sassImg,wordpressImg]; */

    /* const listTechno = () =>{
        listIcon.map(elem => 
            
            <Technologi
                img={elem}
            />
        )
    } */
    

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
                    <section className="sec4">
                        <GeneralTitle
                            title="Tecnologias que usamos"
                        />
                        <article className="contentTech">
                            <Technologi
                                img={javaScript}
                            />
                            <Technologi
                                img={htmlImg}
                            />
                            <Technologi
                                img={cssImg}
                            />
                            <Technologi
                                img={sassImg}
                            />
                            <Technologi
                                img={nodeJsImg}
                            />
                            <Technologi
                                img={reactImg}
                            />
                            <Technologi
                                img={wordpressImg}
                            />
                            <Technologi
                                img={FigmaImg}
                            />
                            <Technologi
                                img={bootstrapImg}
                            />
                        </article>
                    </section>
                    <section className="sec5">
                        <div className="contentImgUno" style={{
                            backgroundImage: `url(${imgOrangeSecFive})`,
                            backgroundSize:'contain',
                            backgroundPosition:'top',
                            backgroundRepeat:'no-repeat'
                        }}>
                        </div>
                    </section>
                </section>
            </main>
        </div>
        
            
    )
}