import React, { Component } from 'react';

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
    ViewBtn,
} from './styles';
import Header from '../../components/Header';

export default class Main extends Component {
    static navigationOptions = {
        title: 'Rocketshoes',
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
                            <ViewBtn>
                                <ButtonAddCart>
                                    <ButtonAddCartText>
                                        Adicionar ao Carrinho
                                    </ButtonAddCartText>
                                </ButtonAddCart>
                            </ViewBtn>
                        </ProductItem>
                    )}
                />
            </Container>
        );
    }
}
