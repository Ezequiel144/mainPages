import React from "react";
import styleCardPerfil from "./CardPerfil.module.css";
import ImgPerfil from "../../asset/img/cartoon-gc30538618_1280.jpg";

export function CardPerfil() {
  return ( 
    <article className={styleCardPerfil.cardcontent} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <section className={styleCardPerfil.styleCardPerfil}>
            <div className={styleCardPerfil.perfilCircle}>
                <img className={styleCardPerfil.imgPerfil} src={ImgPerfil} alt="imgPerfil"/>
            </div>
        </section>
        
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>
    </article>
  
  )
}
