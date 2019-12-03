import React, { Component } from 'react';
import { connect } from 'react-redux'; // Conecta o Componente ao Estado do Redux
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
    Container,
    ProductList,
    ProductItem,
    Image,
    Description,
    Price,
    ButtonAddCart,
    ButtonAddCartText,
    ButtonIconText,
    ButtonIcon,
} from './styles';

class Main extends Component {
    // static navigationOptions = {
    //     title: 'Produtos',
    // };

    navigation = this.props;

    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('/products');

        console.tron.log(response);

        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        this.setState({
            products: data,
        });
    }

    handleAddToCart = id => {
        const { addToCartRequest } = this.props;
        addToCartRequest(id);
    };

    render() {
        const { products } = this.state;
        const { amount } = this.props;

        return (
            <Container>
                <ProductList
                    data={products}
                    keyExtractor={product => String(product.id)}
                    horizontal
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <ProductItem>
                            <Image source={{ uri: item.image }} />
                            <Description>{item.title}</Description>
                            <Price>{item.priceFormatted}</Price>
                            <ButtonAddCart
                                onPress={() => this.handleAddToCart(item.id)}
                            >
                                <ButtonIcon>
                                    <Icon
                                        name="add-shopping-cart"
                                        size={20}
                                        color="#FFF"
                                    />
                                    <ButtonIconText>
                                        {amount[item.id] || 0}
                                    </ButtonIconText>
                                </ButtonIcon>
                                <ButtonAddCartText>
                                    ADICIONAR AO CARRINHO
                                </ButtonAddCartText>
                            </ButtonAddCart>
                        </ProductItem>
                    )}
                />
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
