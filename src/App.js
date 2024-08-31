import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Menu />
            <Header />
            Tenia pensado hacer tablas como hard Skills and soft Skills
            <Skills/>
            <div className='relleno'></div>
            {/* Aquí puedes agregar otros componentes como el contenido principal */}
            <Footer />
        </div>
    );
};

export default App;
