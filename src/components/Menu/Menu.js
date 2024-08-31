import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const menuItems = ['Sobre mí', 'Proyectos', 'Habilidades', 'Contacto'];

    const changeMenu = (index) => {
        setActiveIndex(index)
    }

    return (
        <body className='content-menu'>
            <nav className="navbar">
                <ul className="menu">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <span className={activeIndex === index ? 'active' : ''} onClick={() => changeMenu(index)}>
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
            <img src='http://localhost:3000/logo192.png' alt='Not logo found'></img>
        </body>

    );
};

export default Menu;
