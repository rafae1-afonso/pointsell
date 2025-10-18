import styled from 'styled-components'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { CircleChevronLeft } from 'lucide-react';
import Button from '../Button';
import OrderCard from '../OrderCard';
import { ProductModalContext } from '../../contexts/ProductModalContext';
import CurrencyFormatNumber from '../../services/CurrencyFormatNumber';
import useWindowDimensions from '../../hooks/useWindowDimensions';

// eslint-disable-next-line no-unused-vars
const shoppingCartComponents = {
    MainContainer: styled.main`
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 100px;
    `,

    Header: styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 0;

        & > button {
            display: flex;
            align-items: center;
            margin: 0;
            margin-left: 10px;
            position: absolute;
        }

        & > h1 {
            font-size: 18px;
            font-weight: 500;
            margin-right: auto;
            margin: auto;
        }
    `,

    OrderItemList: styled.ul`
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        gap: 10px;
        overflow-y: scroll;
        height: 300px;
        max-height: 300px;
    `,

    OrderResumeContainer: styled.div`
        display: flex;
        flex-direction: column;
        padding: 0 20px;

        & > main {
            display: flex;
            flex-direction: column;
            border-bottom: 2px solid #000000;
            gap: 20px;
            margin-bottom: 24px;
            padding-bottom: 24px;

            & > div {
                display: flex;
                justify-content: space-between;

                & > h1 {
                    font-size: 16px;
                    font-weight: 700;
                    margin: 0;
                }

                & > p {
                    font-size: 13px;
                    font-weight: 500;
                    color: #A3A0A0;
                    margin: 0;
                }
            }
        }

        & > div {
            display: flex;
            justify-content: space-between;

            & > h1 {
                font-size: 16px;
                font-weight: 700;
                margin: 0;
            }
        }
    `,

    ButtonsContainer: styled.div`
        width: 100vw;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        @media screen and ( min-width: 1024px ) {
            width: 100%;
        }
    `,
}

const ShoppingCartPageContainer = styled.div`
    position: fixed;
    z-index: 1;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;

    @media screen and ( min-width: 1024px ) {
        width: 30vw;
        right: 0;
    }
`;

const EmptyCartContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-top: 65%;

    & > p {
        margin: 0;
        color: #5C5C5C;
        font-size: 22px;
        text-align: center;
    }
`;

const ShoppingCartPage = () => {
    const { width } = useWindowDimensions();

    const {
        cart,
        totalPrice,
        cartVisible,
        setCartVisible,
    } = useContext(ShoppingCartContext);

    return <>
        {cartVisible && <ShoppingCartPageContainer>
            <shoppingCartComponents.MainContainer>
                <shoppingCartComponents.Header>
                    <button onClick={() => setCartVisible(false)}>
                        <CircleChevronLeft color="black" size={28} />
                    </button>
                    <h1>Resumo do Pedido</h1>
                </shoppingCartComponents.Header>
                {cart.length > 0 ? <><shoppingCartComponents.OrderItemList>
                    {
                        cart.map(product => <OrderCard
                            id={product.id}
                            imgSrc={product.imgSrc}
                            title={product.title}
                            price={product.price}
                            quantity={product.quantity}
                        />)
                    }
                </shoppingCartComponents.OrderItemList>
                    <shoppingCartComponents.OrderResumeContainer>
                        <main>
                            <div>
                                <h1>Subtotal</h1>
                                <h1>{CurrencyFormatNumber(totalPrice)}</h1>
                            </div>
                            <div>
                                <p>Taxas</p>
                                <p>R$0,00</p>
                            </div>
                            <div>
                                <p>Descontos</p>
                                <p>R$0,00</p>
                            </div>
                        </main>
                        <div>
                            <h1>Total</h1>
                            <h1>{CurrencyFormatNumber(totalPrice)}</h1>
                        </div>
                    </shoppingCartComponents.OrderResumeContainer>
                    <shoppingCartComponents.ButtonsContainer>
                        {width < 1024 && <Button width={'326px'} theme="secondary" onButtonClick={() => setCartVisible(false)}>
                            Pedir mais
                        </Button>}
                        <Button width={'326px'}>
                            Enviar Pedido
                        </Button>
                    </shoppingCartComponents.ButtonsContainer></>
                    :
                    <EmptyCartContainer>
                        <p>+</p>
                        <p>Adicione os pratos do cardápio</p>
                    </EmptyCartContainer>
                }
            </shoppingCartComponents.MainContainer>
        </ShoppingCartPageContainer>}
    </>

}

export default ShoppingCartPage