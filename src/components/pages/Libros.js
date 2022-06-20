import React from "react";
import './estilo.css';

const url="http://castrowebapi.somee.com/api/productos";
class Libros extends React.Component{

    render(){
        return(
            <html>
                <div className="sec__one">
                    <section class="home-section">
                        <div class="main content">
                            <div class="content-page">
                                <div class="title-section">Lista de libros</div>
                                    <div class="product-list">

                                        <div class="product-box">
                                            <a>
                                                <div class="product">
                                                    <img src="https://www.utpl.edu.ec/libro-viajero/sites/default/files/styles/libro-viajero_estilo/public/9788401347528.jpg?itok=Oj0MA9R5"/>
                                                    <div class="detail-id">Id: 1</div>
                                                    <div class="detail-title">Nombre: El diario de Ana Frank</div>
                                                    <div class="detail-autor">Autora: Ana Frank</div>
                                                    <div class="detail-paginas">Páginas: 215</div>
                                                    <div class="detail-stock">Stock: 4</div>
                                                </div>
                                            </a> 
                                        </div>
                                        <div class="product-box">
                                            <a>
                                                <div class="product">
                                                    <img src="https://es.web.img3.acsta.net/c_310_420/pictures/19/03/07/11/12/4023279.jpg"/>
                                                    <div class="detail-id">Id: 2</div>
                                                    <div class="detail-title">Nombre: Cien años de Soledad</div>
                                                    <div class="detail-autor">Autor: Gabriel Garcia Marquez</div>
                                                    <div class="detail-paginas">Páginas: 471</div>
                                                    <div class="detail-stock">Stock: 8</div>
                                                </div>
                                            </a> 
                                        </div>
                                        <div class="product-box">
                                            <a>
                                                <div class="product">
                                                    <img src="https://www.clarin.com/img/2020/10/10/el-inolvidable-dibujo-que-retrata___V7CtgA7ca_720x0__1.jpg"/>
                                                    <div class="detail-id">Id: 3</div>
                                                    <div class="detail-title">Nombre: El Principito</div>
                                                    <div class="detail-autor">Autor: Antoine de Saint-Exupery</div>
                                                    <div class="detail-paginas">Páginas: 120</div>
                                                    <div class="detail-stock">Stock: 3</div>
                                                </div>
                                            </a> 
                                        </div>
                                        <div class="product-box">
                                            <a>
                                                <div class="product">
                                                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elle-romeoyjulieta-1597086456.jpg?crop=1xw:1xh;center,top&resize=980:*"/>
                                                    <div class="detail-id">Id: 4</div>
                                                    <div class="detail-title">Nombre: Romeo Y Julieta</div>
                                                    <div class="detail-autor">Autor: William Shakespeare</div>
                                                    <div class="detail-paginas">Páginas: 216</div>
                                                    <div class="detail-stock">Stock: 4</div>
                                                </div>
                                            </a> 
                                        </div>
                                        <div class="product-box">
                                            <a>
                                                <div class="product">
                                                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/frankestein-1524221027.jpg?crop=1xw:1xh;center,top&resize=980:*"/>
                                                    <div class="detail-id">Id:5</div>
                                                    <div class="detail-title">Nombre: Frankenstein</div>
                                                    <div class="detail-autor">Autora: Mary Shelley</div>
                                                    <div class="detail-paginas">Páginas: 220</div>
                                                    <div class="detail-stock">Stock: 1</div>
                                                </div>
                                            </a> 
                                        </div>

                                    </div>
                            </div>
                        </div>
                    </section>
                </div>
            </html>
        );

    }
}

export default Libros