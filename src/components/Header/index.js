import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, CartContainer, ItemCount } from './styles';

export default class Header extends Component {
    render() {
        return (
            <Container>
                <Logo />
                <CartContainer>
                    <Icon name="shopping-basket" size={30} color="#FFF" />
                    <ItemCount>5</ItemCount>
                </CartContainer>
            </Container>
        );
    }
}
