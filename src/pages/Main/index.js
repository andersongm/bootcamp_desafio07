import React, { Component } from 'react';
import { Text, View } from 'react-native';

import api from '../../services/api';
import { Container, ProductList } from './styles';
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
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.title}</Text>
                        </View>
                    )}
                />
            </Container>
        );
    }
}
