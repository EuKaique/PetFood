const PetShop = () => {
    return (
            <li className="petshop d-inline-block">
                <div className="d-inline-block">
                    <img className="img-fluid petshop-image" src="https://www.abcdacomunicacao.com.br/wp-content/uploads/PetLove-Logo.png" alt="Petlove" />
                </div>
                <div className="d-inline-block">
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
                </div>
            </li>
           )
}

export default PetShop;