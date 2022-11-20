import './style.css';
import Header from '../../components/header';
import Product from '../../components/product/list';

const Checkout = () => {
    return (<div>
                <Header />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-6">
                            <span className="span-title">Dados de entrega</span>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <input type="text" className="form-control form-control-lg" placeholder="CEP" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <input type="text" className="form-control form-control-lg" placeholder="Cidade" />
                                </div>
                                <div className="col-6 ps-0">
                                    <input type="text" className="form-control form-control-lg" placeholder="Logradouro" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-5">
                                    <input type="text" className="form-control form-control-lg" placeholder="Número" />
                                </div>
                                <div className="col-5 ps-0">
                                    <input type="text" className="form-control form-control-lg" placeholder="Bairro" />
                                </div>
                                <div className="col-2 ps-0">
                                    <input type="text" className="form-control form-control-lg" placeholder="UF" />
                                </div>
                            </div>

                            <span className="span-title">Dados de pagamento</span>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <input type="text" className="form-control form-control-lg" placeholder="Número do cartão" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <input type="text" className="form-control form-control-lg" placeholder="Validade" />
                                </div>
                                <div className="col-6 ps-0">
                                    <input type="text" className="form-control form-control-lg" placeholder="CVV" />
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-12 d-flex justify-content-between align-items-center">
                                    <b>Total</b>
                                    <h3>R$ 39,99</h3>
                                </div>
                                <div class="d-grid gap-2">
                                    <button className="btn primary btn-lg">Finalizar compra</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box col mb-4 box-sidebar">
                                <h4>Minha Sacola (5)</h4>

                                <div className="row products">
                                    {[1,2,3,4,5,7,8,9].map((p) => (<Product />))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           )
}

export default Checkout;