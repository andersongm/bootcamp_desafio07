import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    background: #000;
`;

export const ProductList = styled.View`
    background: #fff;
    /* height: 320px; */
    margin-left: 5%;
    margin-right: 5%;
    border-radius: 4px;
`;

export const QuantControls = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const QuantContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-radius: 4px;
    background: #eee;
    padding: 8px;
    align-items: center;
`;

export const Subtotal = styled.View`
    align-content: center;
    justify-content: center;
`;

export const SubtotalText = styled.Text`
    text-align: center;
    padding: 5px 5px;
    font-size: 16px;
    font-weight: bold;
`;

export const ItemContainer = styled.View`
    /* flex-direction: row; */
    height: 200px;
    padding: 5px 10px;
    /* background: #fff; */
    margin-top: 10px;
    align-content: center;
`;

export const OrderContainer = styled.View`
    /* background: #ccc; */
    align-items: center;
    justify-content: center;
`;

export const Image = styled.Image`
    width: 100px;
    height: 100px;
`;
export const Product = styled.View`
    flex: 1;
    padding: 5px;
`;

export const ProductData = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
    margin-top: 5px;
    font-size: 20px;
    font-weight: bold;
`;

export const ButtonDelete = styled.TouchableOpacity``;
export const ButtonRemove = styled.TouchableOpacity``;
export const ButtonAdd = styled.TouchableOpacity``;

export const InputQtd = styled.Text`
    width: 40px;
    /* height: 10px; */
    border-radius: 4px;
    margin-left: 5px;
    margin-right: 5px;
    background: #fff;
    text-align: center;
`;
export const TotalContainer = styled.View`
    justify-content: center;
    align-items: center;
    /* margin-top: 10px; */
    padding: 15px;
`;
export const Total = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;
// export const EndButton = styled.TouchableOpacity.attrs(props => ({
//     disabled:
// }))`

export const EndButton = styled.TouchableOpacity`
    background: #7159c1;
    width: 95%;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`;
export const EndButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
`;
