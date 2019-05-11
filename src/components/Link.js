import React, {Component} from 'react';

import styled from 'styled-components';
const StyledLink = styled.a`
color:${props=> props.active?'green':'dark'};
&:hover{
color: grey;
`

export default class Link extends Component{
    render(){
        return(
            <StyledLink href={this.props.link}>{this.props.text}</StyledLink>
        );
    }
}