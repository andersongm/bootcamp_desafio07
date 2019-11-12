import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #000;
`;

export const ProductList = styled.FlatList`
    flex-wrap: wrap;
`;

export const ProductItem = styled.View`
    background: #fff;
    border: 1px solid #ccc;
    /* padding: 10px 10px; */
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    height: 250px;
    border-radius: 4px;
`;

export const ViewBtn = styled.View`
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Image = styled.Image`
    width: 100px;
    height: 100px;
`;
export const Description = styled.Text`
    width: 80%;
    padding: 5px;
`;
export const Price = styled.Text`
    font-weight: bold;
    font-size: 18px;
    padding: 5px;
`;
export const ButtonAddCart = styled.TouchableOpacity`
    background: #7159c1;
    width: 80%;
    height: 40px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
`;
export const ButtonAddCartText = styled.Text`
    color: #fff;
    font-weight: bold;
`;
