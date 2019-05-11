import React, {Component} from 'react';

import './App.css';

import styled from 'styled-components';
import Header from "./components/Header";
import Features from "./components/Features";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas} from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);
const HeaderWraper = styled.header`
background-color: #fcdb00;
padding: 80px 0 80px 0;
`

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderWraper>
            <Header/>
                </HeaderWraper>
            <Features/>
            <Contacts/>
            <Footer/>
            </div>
        );
    }
}