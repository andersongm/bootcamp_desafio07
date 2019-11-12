import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Image } from './styles';
import logo from '../../assets/images/logo.svg';

export default class Header extends Component {
    render() {
        return (
            <Container>
                <Image source={logo} color="#FFF" />
                <Icon name="shopping_cart" size={20} color="#FFF" />
            </Container>
        );
    }
}
