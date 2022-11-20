import './style.css';

const Product = () => {
    return (<div className="product col-3">
                <img className="img-fluid align-center" src="https://www.petlove.com.br/images/products/224901/product/Ra%C3%A7%C3%A3o_Magnus_Premium_Carne_para_C%C3%A3es_Adultos_3107920.jpg?1627721198" alt="Produto" />
                <button className="btn primary rounded-circle">+</button>
                <h4>
                    <label className="badge third">R$ 90,00</label>
                </h4>
                <small>
                    <b>Ração Magnus Todo Dia Sabor Carne para Cães Adultos - 15kg</b>    
                </small> 
            </div>)
}

export default Product;