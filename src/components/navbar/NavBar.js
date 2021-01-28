import React from 'react'
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand">&nbsp;&nbsp;UNIR</span>
            <button 
                className="navbar-toggler" 
                type="button" data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div 
                className="collapse navbar-collapse" 
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">
                            Aulas
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">
                            Agenda
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">
                            Exámenes
                        </a>
                    </li>                    
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">
                            Secretaría
                        </a>
                    </li>
                    <span className="nav-item">
                        <NavLink exact to="/" activeClassName="nav-link active" className="nav-link">
                            Programación
                        </NavLink>
                    </span>
                    <span className="nav-item">
                        <NavLink to="/description" activeClassName="nav-link active"  className="nav-link">
                            ¿Cómo se hizo?
                        </NavLink>
                    </span>
                </ul>
            </div>
        </nav>
    );
}
