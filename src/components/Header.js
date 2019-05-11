import React, {Component} from 'react';
import styled from 'styled-components';
import Navbar from "./Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Slider from "./Slider";

class Header extends Component {
    render() {
        return (
        <Container>
        <Navbar/>
        <Row>
        <Col md={6}>
        <h1 className="slogan">Inspirit your inspiration</h1>
        <h2 className="sub-slogan">Simple to use for your app, products showcase and your
        inspiration</h2>
        <p className="p-slogan">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        vitae eros eget
        tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a
        eros volutpat
        tempor. In quis arcu et eros porta lobortis sit </p>
        <div className="my-4">
        <a href="#" className="text-dark "><FontAwesomeIcon icon={['fab', 'apple']} size="2x"/></a>
        <a href="#" className="text-dark ml-3 "><FontAwesomeIcon icon={['fab', 'android']}
        size="2x"/></a>
        <a href="#" className="text-dark ml-3"><FontAwesomeIcon icon={['fab', 'windows']}
        size="2x"/></a>
        </div>
        <Button href="#" variant="btn btn-outline-dark mb-3">DOWNLOAD</Button>
        </Col>
        <Col md={6}>
            <Slider/>
        </Col>
        </Row>
        </Container>
        );
    }
}

export default Header;