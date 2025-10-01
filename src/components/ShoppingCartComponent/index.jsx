import styled from 'styled-components'
import useWindowDimensions from '../../hooks/UseWindowDimensions';
import { ShoppingCart } from 'lucide-react';
import ShoppingCartPage from '../ShoppingCartPage';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

const ShoppingCartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;

const ShoppingCartComponent = () => {
    const { width } = useWindowDimensions();
    const {cart, setCartVisible} = useContext(ShoppingCartContext);

    return <>
        <ShoppingCartContainer onClick={() => setCartVisible(true)}><ShoppingCart color='black' fill={cart.length > 0 ? '#B33131' : 'transparent'} size={width > 1024 ? 26 : 36} strokeWidth={1} /></ShoppingCartContainer>
        <ShoppingCartPage />
    </>
}

export default ShoppingCartComponent