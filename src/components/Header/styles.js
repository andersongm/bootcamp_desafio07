import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 15px;
    width: 100%;
`;

export const Logo = styled.Image.attrs({
    source: logo,
    resizeMode: 'cover',
})`
    width: 185px;
    height: 24px;
`;

export const ButtonIconText = styled.Text``;

export const ButtonIcon = styled.View``;

export const CartContainer = styled.View``;

export const ItemCount = styled.Text`
    position: absolute;
    text-align: center;
    top: -8px;
    right: -8px;
    min-width: 18px;
    min-height: 18px;
    background: #7159c1;
    color: #fff;
    font-size: 12px;
    padding: 2px;
    border-radius: 9px;
    overflow: hidden;
`;
