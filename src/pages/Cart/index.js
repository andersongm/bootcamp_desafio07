import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

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
} from './styles';
import { formatPrice } from '../../util/format';

const styles = StyleSheet.create({
    textTotal: {
        color: '#aaa',
        alignContent: 'stretch',
    },
});

function Cart({ navigation, products, total, dispatch }) {
    function handleRemoveItem(id) {
        console.tron.log('Remover ID:', id);

        dispatch({
            type: 'REMOVE_FROM_CART',
            id,
        });

        console.log(products);
    }

    return (
        <Container>
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
                                <ButtonRemove>
                                    <Icon
                                        name="remove-circle-outline"
                                        size={20}
                                        color="#7159c1"
                                    />
                                </ButtonRemove>

                                <InputQtd>{product.amount}</InputQtd>
                                <ButtonAdd>
                                    <Icon
                                        name="add-circle-outline"
                                        size={20}
                                        color="#7159c1"
                                    />
                                </ButtonAdd>
                            </QuantControls>
                            <Subtotal>
                                <SubtotalText>{product.subtotal}</SubtotalText>
                            </Subtotal>
                        </QuantContainer>
                    </ItemContainer>
                ))}
                <OrderContainer>
                    <TotalContainer>
                        <Text style={styles.textTotal}>TOTAL</Text>
                        <Total>{total}</Total>
                    </TotalContainer>
                    <EndButton disabled={!products}>
                        <EndButtonText>FINALIZAR PEDIDO</EndButtonText>
                    </EndButton>
                </OrderContainer>
            </ProductList>
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

export default connect(mapStateToProps)(Cart);
