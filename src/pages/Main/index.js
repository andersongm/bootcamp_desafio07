import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Conecta o Componente ao Estado do Redux
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

export default function Main({ navigation }) {
    const [products, setProducts] = useState([]);

    const amount = useSelector(state =>
        state.cart.reduce((amountSum, product) => {
            amountSum[product.id] = product.amount;
            return amountSum;
        }, {})
    );

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products');

            console.tron.log(response);

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));

            setProducts(data);
        }

        loadProducts();
    }, []);

    const dispatch = useDispatch();

    function handleAddToCart(id) {
        dispatch(CartActions.addToCartRequest(id));
    }

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
                        <ButtonAddCart onPress={() => handleAddToCart(item.id)}>
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
