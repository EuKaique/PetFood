import './style.css';
import { Dock } from 'react-dock';
import Product from '../product/list';
import { useState, useEffect } from 'react';

const Sidebar = () => {
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        window.addEventListener('openCart', () => {
            console.log('teste');
            setOpened(true);
        });
    }, []);

    return (
            <Dock position="right" isVisible={opened} onVisibleChange={(visible) => {setOpened(visible)}}>
                <div className="container-fluid h-100 pt-4 sidebar">
                    <h5>Minha Sacola (5)</h5>
                    <div className="row products">
                        {[1,2,3,4,5,7,8,9].map((p) => (<Product />))}
                    </div>
                    <div className="row align-items-end footer">
                        <div className="col-12 d-flex justify-content-between align-items-center div-sidebar">
                            <b className="d-inline-block">Total</b>
                            <h3 className="d-inline-block">R$ 90,00</h3>
                        </div>
                        <div className="d-grid gap-2 sidebar-footer">
                            <button className="btn primary btn-lg rounded-0 btn-sidebar align-items-center">Finalizar compra</button>
                        </div>
                    </div>            
                </div>
            </Dock>
           )
}

export default Sidebar;