import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';

import {
    Container,
    ItemContainer,
    Image,
    Product,
    QuantContainer,
    InputQtd,
    TotalContainer,
    Total,
    ButtonDelete,
    ButtonRemove,
    ButtonAdd,
    EndButton,
    EndButtonText,
    ProductData,
    ProductTitle,
    ProductPrice,
    Subtotal,
    SubtotalText,
    QuantControls,
    OrderContainer,
    ProductList,
    CartEmpty,
    CartEmptyText,
} from './styles';
import { formatPrice } from '../../util/format';

const styles = StyleSheet.create({
    textTotal: {
        color: '#aaa',
        alignContent: 'stretch',
    },
});

function Cart({
    navigation,
    products,
    total,
    removeFromCart,
    updateAmountRequest,
}) {
    function handleRemoveItem(id) {
        removeFromCart(id);
    }

    function increment(product) {
        updateAmountRequest(product.id, product.amount + 1);
    }

    function decrement(product) {
        updateAmountRequest(product.id, product.amount - 1);
    }

    return (
        <Container>
            {products.length === 0 ? (
                <CartEmpty>
                    <Icon name="remove-shopping-cart" size={64} color="#eee" />
                    <CartEmptyText>Carrinho Vazio</CartEmptyText>
                </CartEmpty>
            ) : (
                <ProductList>
                    {products.map(product => (
                        <ItemContainer key={product.id}>
                            <ProductData>
                                <Image
                                    source={{
                                        uri: product.image,
                                    }}
                                />
                                <Product>
                                    <ProductTitle>{product.title}</ProductTitle>
                                    <ProductPrice>
                                        {product.priceFormatted}
                                    </ProductPrice>
                                </Product>
                                <ButtonDelete
                                    onPress={() => handleRemoveItem(product.id)}
                                >
                                    <Icon
                                        name="delete-forever"
                                        size={24}
                                        color="#7159c1"
                                    />
                                </ButtonDelete>
                            </ProductData>
                            <QuantContainer>
                                <QuantControls>
                                    <ButtonRemove
                                        onPress={() => decrement(product)}
                                    >
                                        <Icon
                                            name="remove-circle-outline"
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </ButtonRemove>

                                    <InputQtd>{product.amount}</InputQtd>
                                    <ButtonAdd
                                        onPress={() => increment(product)}
                                    >
                                        <Icon
                                            name="add-circle-outline"
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </ButtonAdd>
                                </QuantControls>
                                <Subtotal>
                                    <SubtotalText>
                                        {product.subtotal}
                                    </SubtotalText>
                                </Subtotal>
                            </QuantContainer>
                        </ItemContainer>
                    ))}
                    <OrderContainer>
                        <TotalContainer>
                            <Text style={styles.textTotal}>TOTAL</Text>
                            <Total>{total}</Total>
                        </TotalContainer>
                        <EndButton>
                            <EndButtonText>FINALIZAR PEDIDO</EndButtonText>
                        </EndButton>
                    </OrderContainer>
                </ProductList>
            )}
        </Container>
    );
}

const mapStateToProps = state => ({
    products: state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
    })),
    total: formatPrice(
        state.cart.reduce(
            (total, product) => total + product.price * product.amount,
            0
        )
    ),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
