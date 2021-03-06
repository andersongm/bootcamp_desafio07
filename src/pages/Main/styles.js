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
    /* border: 1px solid #ccc; */
    padding: 10px;
    margin: 15px;
    border-radius: 4px;
    width: 220px;
    align-items: center;
    justify-content: center;
    /* height: 250px; */
`;

export const ViewBtn = styled.View`
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Image = styled.Image`
    width: 200px;
    height: 200px;
`;
export const Description = styled.Text`
    /* width: 80%;
    padding: 5px; */
    font-size: 14px;
`;
export const Price = styled.Text`
    margin: 14px 0px;
    margin-bottom: 14px;
    font-weight: bold;
    font-size: 20px;
`;

export const ButtonIconText = styled.Text`
    color: #fff;
    padding: 0 4px;
`;

export const ButtonIcon = styled.View`
    /* flex: 1; */
    padding: 12px;
    flex-direction: row;
    align-items: center;
    background: #7159c1;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`;
export const ButtonAddCart = styled.TouchableOpacity`
    flex-direction: row;
    border-radius: 4px;
    background: #9176cc;
    margin-top: auto;
    /* width: 90%;
    height: 40px; */
    justify-content: center;
    align-items: center;
`;
export const ButtonAddCartText = styled.Text`
    flex: 1;
    color: #fff;
    text-align: center;
    font-weight: bold;
`;
