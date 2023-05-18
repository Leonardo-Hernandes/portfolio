import React from 'react'
import Logo from '../../Assets/rnLogo.png';

import {
    Navbar,
    Nav
} from 'react-bootstrap'

import './styles.css';

export default function AppBar() {
    return (
        <>
            <Navbar expand="lg" fixed="top" style={{ margin: "15px" }}>
                <img src={Logo} alt="icon" width="50px" />
                <Navbar.Brand style={{ color: "white", marginLeft: "10px" }}>Leonardo Hernandes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: "end" }}>
                    <Nav>
                        <Nav.Link className="navText">Página Inicial</Nav.Link>
                        <Nav.Link className="navText">Perfil</Nav.Link>
                        <Nav.Link className="navText">Habilidades</Nav.Link>
                        <Nav.Link className="navText">Projetos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
