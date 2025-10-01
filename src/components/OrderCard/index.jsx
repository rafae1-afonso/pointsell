import styled from 'styled-components'
import AmountComponent from '../AmountComponent';
import CurrencyFormatNumber from '../../services/CurrencyFormatNumber';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

const CardContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const CardImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 8px;
`;

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-right: auto;

    & > h1 {
        margin: 0;
        font-size: 14px;
        font-weight: 600;
    }

    & > p {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        color: #F26B38;
    }
`;

const OrderCard = ({ id, imgSrc, title, price, quantity, onChangeParentHandler }) => {
    const {
        cart,
        addProduct,
        removeProduct,
    } = useContext(ShoppingCartContext);

    function handleAmountChange(currentAmount, variation) {
        if (variation > 0) {
            const product = cart.find(item => item.id === id);
            addProduct(product);
        } else {
            if (currentAmount >= 0) {
                removeProduct(id);
            }
        }
    };

    return (
        <CardContainer onChange={onChangeParentHandler}>
            <CardImage src={imgSrc} alt={title} />
            <MainContainer>
                <h1>{title}</h1>
                <p>{CurrencyFormatNumber(price * quantity)}</p>
            </MainContainer>
            <AmountComponent id={id} removeButton amount={quantity} onAmountChange={handleAmountChange} />
        </CardContainer>
    )
}

export default OrderCard