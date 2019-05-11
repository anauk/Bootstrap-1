import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default class Contacts extends Component {
    render() {
        return (
            <section className="contacts py-5 bg-dark">
                <Container>
                    <h2 className="contacts-title text-center text-warning">Keep in touch with us</h2>
                    <p className="contacts-description text-center text-secondary font-weight-light">Lorem ipsum dolor
                        sit amet,
                        consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum
                        sed sem quis
                        venenatis.</p>
                    <div className="d-flex justify-content-center">
                        <form className="form-inline" action="">
                            <Row>
                            <Col sm={12} lg={8} className="mb-2">
                                <input type="email" className="form-control-lg" id="email"
                                       placeholder="Enter your email to update"/>
                            </Col>
                            <Col sm={12} lg={4}>
                                <button className="btn btn-lg btn-block btn-warning" type="submit">Submit
                                </button>
                            </Col>
                            </Row>
                        </form>
                    </div>
                    <div className="contacts-icons d-flex justify-content-center mt-5">
                        <a className="text-warning mx-2 display-4" href=""><FontAwesomeIcon icon={['fab', 'facebook-square']} size="xs"/></a>
                        <a className="text-warning mx-2 display-4" href=""><FontAwesomeIcon icon={['fab', 'twitter-square']} size="xs"/></a>
                        <a className="text-warning mx-2 display-4" href=""><FontAwesomeIcon icon={['fab', 'google-plus-square']} size="xs"/></a>
                        <a className="text-warning mx-2 display-4" href=""><FontAwesomeIcon icon={['fab', 'pinterest-square']} size="xs"/></a>
                    </div>
                </Container>
            </section>
        );
    }
}