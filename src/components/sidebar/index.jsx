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
                </div>
            </Dock>
           )
}

export default Sidebar;