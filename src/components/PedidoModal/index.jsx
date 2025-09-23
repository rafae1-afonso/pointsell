import styled from "styled-components"
import TagCategoria from "../TagCategoria";
import { Categorias } from "../../constants";
import CurrencyFormatNumber from "../../services/CurrencyFormatNumber";
import { CircleChevronLeft } from "lucide-react";
import { useContext, useState } from "react";
import { ProductModalContext } from "../../contexts/ProductModalContext";
import Button from "../Button";
import AdditionalCard from "../AdditionalCard";

const ModalMainContainer = styled.main`
   display: flex;
   flex-direction: column;
   width: 100%;
`;

const ProductImage = styled.div`
    background-image: url(${props => props.imagesrc});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: auto;
    width: 100vw;
    height: 418px;
    
    & > button {
        position: fixed;
        margin: 25px 10px;
        background-color: transparent;
        display: flex;
        align-items: center;
    }
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    padding-bottom: 300px;
`;

const PullLine = styled.div`
    background-color: black;
    width: 60px;
    height: 4px;
    border-radius: 12px;
`;

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;

    & > p {
        font-weight: 600;
        font-size: 24px;
        color: #F26B38;
    }
`;

const DescriptionMainContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > h1 {
        font-weight: 600;
        font-size: 24px;
    }

    & > p {
        font-weight: 400;
        font-size: 16px;
    }
`;

const NextButtonContainer = styled.div`
    width: 100vw;
    position: fixed;
    bottom: 0;
    margin-bottom: 110px;
    display: flex;
    justify-content: center;
`;

// eslint-disable-next-line no-unused-vars
const page1Components = {
    MainContainer: styled.main`
        display: flex;
        flex-direction: column;
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
    `,
}

const PedidoModal = () => {

    const [page, setPage] = useState(0)

    function getPage(page) {
        switch (page) {
            case 1:
                return (
                    <page1Components.MainContainer>
                        <page1Components.Header>
                            <button onClick={() => setPage(--page)}>
                                <CircleChevronLeft color="black" size={28} />
                            </button>
                            <h1>Customize o seu Pedido</h1>
                        </page1Components.Header>
                        <page1Components.AdditionalsContainer>
                            <h2>Adicionais</h2>
                            <ul>
                                <li><AdditionalCard title="Adicional" price={1.5}/></li>
                                <li><AdditionalCard title="Adicional" price={2}/></li>
                                <li><AdditionalCard title="Adicional" price={1}/></li>
                            </ul>
                        </page1Components.AdditionalsContainer>
                        <page1Components.RemoveContainer>
                            <h2>Retirar</h2>
                            <ul>
                            </ul>
                        </page1Components.RemoveContainer>
                    </page1Components.MainContainer>
                )
            case 2:
                return (
                    <>

                    </>
                )
            default:
                return (
                    <>
                        <ProductImage imagesrc={productInfo.imgSrc} >
                            <button onClick={() => setModalVisible(false)}>
                                <CircleChevronLeft color="white" size={28} />
                            </button>
                        </ProductImage>
                        <DescriptionContainer>
                            <PullLine />
                            <HeaderContainer>
                                <TagCategoria rowDirection>
                                    <Categorias.menuDoDia.icon /> {Categorias.menuDoDia.content}
                                </TagCategoria>
                                <p>{CurrencyFormatNumber(productInfo.price)}</p>
                            </HeaderContainer>
                            <DescriptionMainContainer>
                                <h1>{productInfo.title}</h1>
                                <p>
                                    {productInfo.desc}
                                </p>
                            </DescriptionMainContainer>
                        </DescriptionContainer>
                        <NextButtonContainer>
                            <Button width={'326px'} onButtonClick={() => {
                                setPage(++page)
                            }}>
                                Próximo
                            </Button>
                        </NextButtonContainer>
                    </>
                )
        }
    }

    const {
        productInfo,
        setModalVisible
    } = useContext(ProductModalContext);

    return <ModalMainContainer>
        {getPage(page)}
    </ModalMainContainer>
}

export default PedidoModal