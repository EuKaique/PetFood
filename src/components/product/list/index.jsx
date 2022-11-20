import './style.css';

const Product = () => {
    return (
        <div className="col-12 product-list">
            <div className="row">
                <div className="col-3">
                    <img src="https://cobasi.vteximg.com.br/arquivos/ids/939251-400-400/racao-golden-special-para-caes-adultos-frango-e-carne-3310549-15kg-Lado.jpg?v=637855427288230000" className="img-fluid" alt="Ração"/>
                </div>
                <div className="col-6">
                    <h6>
                        <label className="badge bg-primary">R$ 30,00</label>
                    </h6>
                    <small>
                        <b>Ração Golden Premium para todos os tipos de gatos - 1kg</b>
                    </small>
                </div>
                <div className="col-3">
                    <button className="btn secondary rounded-circle">-</button>
                </div>
            </div>
        </div>
    )
}

export default Product;