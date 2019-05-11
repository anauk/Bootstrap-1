import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Features extends Component{
    render(){
        return (
            <section className="py-5">
            <Container>
                <h2 className="section-title text-center">Tinyone features</h2>
                <p className="section-description text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                    Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>

                <Row>
                    <Col md={4}>
                        <Row>
                            <Col md={3}>
                                <a className="text-dark display-4 " href=""><FontAwesomeIcon icon={['fas', 'mobile-alt']} size="xs"/></a>
                            </Col>
                            <Col md={9} className="mt-2">
                                <h2 className="feature-name">Fully Layered PSD</h2>
                                <p className="feature-description font-weight-light">Lorem ipsum dolor sit amet,
                                    consectetur
                                    adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={4}>
                        <Row>
                            <Col md={3}>
                                <a className="text-dark display-4" href=""><FontAwesomeIcon icon={['fas', 'lemon']} size="xs"/></a>
                            </Col>
                            <Col md={9} className="mt-2">
                                <h2 className="feature-name">Font Awesome Icons</h2>
                                <p className="feature-description font-weight-light">Lorem ipsum dolor sit amet,
                                    consectetur
                                    adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={4}>
                        <Row>
                            <Col md={3}>
                                <a className="text-dark display-4" href=""><FontAwesomeIcon icon={['fas', 'folder']} size="xs"/></a>
                            </Col>
                            <Col md={9} className="mt-2">
                                <h2 className="feature-name">HTML3 & CSS3 </h2>
                                <p className="feature-description font-weight-light">Lorem ipsum dolor sit amet,
                                    consectetur
                                    adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Row>
                            <Col md={3}>
                                <a className="text-dark display-4" href=""><FontAwesomeIcon icon={['fas', 'code']} size="xs"/></a>
                            </Col>
                            <Col md={9} className="mt-2">
                                <h2 className="feature-name">Email Template</h2>
                                <p className="feature-description font-weight-light">Lorem ipsum dolor sit amet,
                                    consectetur
                                    adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={4}>
                        <Row>
                            <Col md={3}>
                                <a className="text-dark display-4" href=""><FontAwesomeIcon icon={['fas', 'envelope']} size="xs"/></a>
                            </Col>
                            <Col md={9} className="mt-2">
                                <h2 className="feature-name">Free to download</h2>
                                <p className="feature-description font-weight-light">Lorem ipsum dolor sit amet,
                                    consectetur
                                    adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={4}>
                        <Row>
                            <Col md={3}>
                                <a className="text-dark display-4" href=""><FontAwesomeIcon icon={['fas', 'bookmark']} size="xs"/></a>
                            </Col>
                            <Col md={9} className="mt-2">
                                <h2 className="feature-name">Free to download</h2>
                                <p className="feature-description font-weight-light">Lorem ipsum dolor sit amet,
                                    consectetur
                                    adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </section>
        )
    }
}