import './style.css';
import Header from '../../components/header';
import Product from '../../components/product/card';

const PetShop = () => {
    return (<div className="h-100">
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <img className="img-fluid petshop-image" src="https://www.abcdacomunicacao.com.br/wp-content/uploads/PetLove-Logo.png" alt="Petlove" />
                            <b>Petlove</b>
                            <div className="petshop-infos">
                                <span className="mdi mdi-star"></span>
                                <text>
                                    <b>4,5</b>
                                </text>
                                <i class="bi bi-cash"></i>
                                <text>
                                    $$$
                                </text>
                                <span className="mdi mdi-crosshairs-gps"></span>
                                <text>
                                    2,8km
                                </text>
                            </div>
                            <label className="badge third">Frete Grátis</label>
                        </div>
                        <div className="col-10">
                            <h5>Produtos</h5>
                            <br />
                            <div className="row">
                                {[1,2,3,4,5,6,7,8,9].map((p) => (<Product />))}
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
            )
}

export default PetShop;