import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Categorias from './Categorias/Categorias';
import Secciones from './Secciones/Secciones';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">AO</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
                <Secciones/>
                <Categorias/>
            </ul>
        </div>
        <CartWidget cantCarrito={10}/>
    </div>
</nav>
    );
}

export default NavBar;
