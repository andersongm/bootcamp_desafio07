import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { Container, Logo, CartContainer, ItemCount, Wrapper } from './styles';

export default function Header({ navigation }) {
    const cartSize = useSelector(state => state.cart.length);

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
