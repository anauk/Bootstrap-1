import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class FeatureItem extends Component {
    render() {
        return (
            <Col md={4}>
                <Row>
                    <Col md={3}>
                        <a className="text-dark display-4" href=""><i className="fas fa-mobile-alt"></i></a>
                    </Col>
                    <Col md={9}>
                        <h2 className="feature-name">Fully Layered PSD</h2>
                        <p className="feature-description font-weight-light">Lorem ipsum dolor sit amet,
                            consectetur
                            adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                    </Col>
                </Row>
            </Col>
        );
    }
}