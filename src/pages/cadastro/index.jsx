import Header from '../../components/header';
import Illustration from '../../assets/illustration.png';

const Cadastro = () => {
    return (
            <div className="container-fluid primary">
                <Header whiteVersion/>
                <div className="row">
                    <div className="col-6 text-right my-auto">
                        <img src={Illustration} className="img-fluid" alt='Illustration' />
                    </div>
                    <div className="col-6">
                        <div className="box col-8">
                            <h2 className="text-center mb-4">Falta pouco para fazer o seu pet feliz.</h2>
                            <input type="text" className="form-control form-control-lg mb-3" placeholder="Nome completo" />
                            <input type="email" className="form-control form-control-lg mb-3" placeholder="E-mail" />
                            <input type="text" className="form-control form-control-lg mb-3" placeholder="Telefone" />
                            <input type="text" className="form-control form-control-lg mb-3" placeholder="CPF" />
                            <input type="date" className="form-control form-control-lg mb-3" placeholder="Data de nascimento" />
                            <div className="d-grid gap-2">
                                <button className="btn btn-lg btn-block secondary">Finalizar pedido</button>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
           )
}

export default Cadastro;