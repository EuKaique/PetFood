import './style.css';
import Logo from '../../assets/logo.png';
import LogoWhite from '../../assets/logo-white.png';

const Header = ({ whiteVersion, hideCart }) => {

    const openDrawer = () => {
        const event = new CustomEvent('openCart');
        window.dispatchEvent(event);
    }

    return (<div className="col-12">
                <header className="py-4 px-4 text-center">
                    <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid" alt='Logo' />
                </header>
                {!hideCart && (<button className="btn secondary cart-button" onClick={() => openDrawer()}>
                    <i className="bi bi-cart-fill"></i> 2 itens
                </button>)}
            </div>
            )
}

export default Header;