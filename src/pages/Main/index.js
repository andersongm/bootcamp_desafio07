import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import api from '../../services/api';

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

export default class Main extends Component {
    static navigationOptions = {
        title: 'Produtos',
    };

    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('/products');

        console.tron.log(response);

        this.setState({
            products: response.data,
        });
    }

    render() {
        const { products } = this.state;

        return (
            <Container>
                <Header />
                <ProductList
                    data={products}
                    keyExtractor={product => product.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <ProductItem>
                            <Image source={{ uri: item.image }} />
                            <Description>{item.title}</Description>
                            <Price>{item.price}</Price>
                            <ButtonAddCart>
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
