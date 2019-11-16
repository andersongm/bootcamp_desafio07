import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { Container, Logo, CartContainer, ItemCount, Wrapper } from './styles';

function Header({ navigation, cartSize }) {
    return (
        <Wrapper>
            <Container>
                <Logo onPress={() => navigation.navigate('Main')} />
                <CartContainer>
                    <Icon
                        name="shopping-basket"
                        size={30}
                        color="#FFF"
                        onPress={() => navigation.navigate('Cart')}
                    />
                    <ItemCount>{cartSize}</ItemCount>
                </CartContainer>
            </Container>
        </Wrapper>
    );
}

export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);
