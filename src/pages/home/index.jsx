import './style.css';
import Header from '../../components/header';
import PetShop from '../../components/petshop';

const Home = () => {
    return (
            <div className="h-100">
                <Header />
                <div className="col-12 px-4 text-center">
                    <h5>Mais próximos de você (5)</h5>
                </div>
                <ul className="col-12 petshop-list">
                    <PetShop />
                </ul>
            </div>
           )
}

export default Home;