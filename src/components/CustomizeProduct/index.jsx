import { useContext } from 'react';
import styled from 'styled-components'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { ProductModalContext } from '../../contexts/ProductModalContext';
import { CircleChevronLeft } from 'lucide-react';
import AdditionalCard from '../AdditionalCard';
import RemoveCard from '../RemoveCard';
import Button from '../Button';
import useWindowDimensions from '../../hooks/useWindowDimensions';

// eslint-disable-next-line no-unused-vars
const customizeProductComponents = {
    MainContainer: styled.main`
        display: flex;
        flex-direction: column;
        margin-bottom: 200px;

        @media screen and ( min-width: 1024px ) {
            margin-top: 100px;
        }
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

    AdditionalsContainer: styled.div`
        display: flex;
        flex-direction: column;
        padding: 0 50px;
        margin-bottom: 10px;

        & > h2 {
            font-size: 18px;
            font-weight: 700;
        }

        & > ul {
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 25px;
        }
    `,

    RemoveContainer: styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0 50px;

        & > h2 {
            font-size: 18px;
            font-weight: 700;
        }

        & > ul {
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 25px;
        }
    `,

    NextButtonContainer: styled.div`
        width: 100vw;
        position: fixed;
        bottom: 0;
        margin-bottom: 110px;
        display: flex;
        justify-content: center;

        @media screen and ( min-width: 1024px ) {
            width: 80vw;
        }
    `,
}

const CustomizeProduct = ({ pageProps }) => {
    let [page, setPage] = pageProps;

    const { width } = useWindowDimensions();

    const {
        addProduct,
        setCartVisible
    } = useContext(ShoppingCartContext);

    const {
        productInfo,
        setModalVisible
    } = useContext(ProductModalContext);

    return <customizeProductComponents.MainContainer>
        <customizeProductComponents.Header>
            <button onClick={() => {
                if (width < 1024) {
                    setPage(--page);
                } else {
                    setModalVisible(false);
                }
            }}>
                <CircleChevronLeft color="black" size={28} />
            </button>
            <h1>Customize o seu Pedido</h1>
        </customizeProductComponents.Header>
        <customizeProductComponents.AdditionalsContainer>
            <h2>Adicionais</h2>
            <ul>
                <li><AdditionalCard title="Adicional" price={1.5} /></li>
                <li><AdditionalCard title="Adicional" price={1.5} /></li>
                <li><AdditionalCard title="Adicional" price={2} /></li>
                <li><AdditionalCard title="Adicional" price={1} /></li>
            </ul>
        </customizeProductComponents.AdditionalsContainer>
        <customizeProductComponents.RemoveContainer>
            <h2>Retirar</h2>
            <ul>
                <li><RemoveCard title="Retirar" /></li>
                <li><RemoveCard title="Retirar" /></li>
                <li><RemoveCard title="Retirar" /></li>
            </ul>
        </customizeProductComponents.RemoveContainer>
        <customizeProductComponents.NextButtonContainer>
            <Button width={'326px'} onButtonClick={() => {
                addProduct(productInfo);
                setCartVisible(true);
                setModalVisible(false);
                setPage(0);
            }}>
                Adicionar ao Pedido
            </Button>
        </customizeProductComponents.NextButtonContainer>
    </customizeProductComponents.MainContainer>
}

export default CustomizeProduct