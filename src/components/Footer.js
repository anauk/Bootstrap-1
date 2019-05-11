import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "./Link";
import Container from "react-bootstrap/Container";
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-dark py-5">
                <Container>
                    <Row>
                        <Col md={4}>
                            <p className="footer-adress text-white">HALOVIETNAM LTD
                                66, Dang Van ngu, Dong Da
                                Hanoi, Vietnam</p>
                            <p className="footer-adress text-white">contact@halovietnam.com</p>
                            <p className="footer-adress text-white">+844 35149182</p>

                        </Col>
                        <Col md={8}>
                            <Row>
                                <Col md={3} sm={5}>
                                    <ul>
                                        <li className="list-unstyled"><a className="text-white " href="#">Example</a></li>
                                        <li className="list-unstyled"><a className="text-white" href="">Shop</a></li>
                                        <li className="list-unstyled"><a className="text-white" href="">Lisens</a></li>
                                    </ul>
                                </Col>
                                <Col md={3} sm={5}>
                                    <ul>
                                        <li className="list-unstyled"><a className="text-white" href="">Example</a></li>
                                        <li className="list-unstyled"><a className="text-white" href="">Shop</a></li>
                                        <li className="list-unstyled"><a className="text-white" href="">Lisens</a></li>
                                        <li className="list-unstyled"><a className="text-white" href="">Lisens</a></li>
                                    </ul>
                                </Col>
                                <Col md={3} sm={5}>
                                    <ul>
                                        <li className="list-unstyled"><a className="text-white" href="">Example</a></li>
                                        <li className="list-unstyled"><a className="text-white" href="">Shop</a></li>
                                        <li className="list-unstyled"><a className="text-white" href="">Lisens</a></li>
                                    </ul>
                                </Col>
                                <Col md={3} sm={5}>
                                    <ul>
                                        <li className="list-unstyled"><a className="text-white" href="">Example</a></li>
                                        <li className="list-unstyled"><a className="text-white" href="">Shop</a></li>
                                        <li className="list-unstyled"><a className="text-white" href="">Lisens</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </footer>
    )
    }
}