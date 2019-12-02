import React, { Component } from 'react';
import { connect } from 'react-redux'; // Conecta o Componente ao Estado do Redux
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

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

    handleAddToCart = product => {
        const { dispatch } = this.props;

        dispatch({
            type: 'ADD_TO_CART',
            product,
        });
    };

    render() {
        const { products } = this.state;

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
                                onPress={() => this.handleAddToCart(item)}
                            >
                                <ButtonIcon>
                                    <Icon
                                        name="add-shopping-cart"
                                        size={20}
                                        color="#FFF"
                                    />
                                    <ButtonIconText>0</ButtonIconText>
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

export default connect()(Main);
