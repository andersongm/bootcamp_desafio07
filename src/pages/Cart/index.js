import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { Container } from './styles';

function Cart({ cart }) {
    console.log(cart);

    return (
        <Container>
            <Text>Cart Page</Text>
        </Container>
    );
}

Cart.navigationOptions = {
    title: 'Meu Carrinho',
};

const mapStateToProps = state => ({
    cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
