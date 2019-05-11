import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark">

                <div className="display-4 mr-2"><FontAwesomeIcon icon={['fas', 'fingerprint']} size="sx"/></div>
                <a className="navbar-brand text-dark font-weight-bold" href="#">tinyone</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse d-flex-md justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav font-weight-bold">
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="#">Features</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="#">Support</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="#">Blog</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}