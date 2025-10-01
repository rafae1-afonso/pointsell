import styled from "styled-components"
import TagCategoria from "../TagCategoria";
import { Categorias } from "../../constants";
import CurrencyFormatNumber from "../../services/CurrencyFormatNumber";
import { CircleChevronLeft } from "lucide-react";
import { useContext } from "react";
import { ProductModalContext } from "../../contexts/ProductModalContext";
import Button from "../Button";
import ShoppingCartPage from "../ShoppingCartPage";
import CustomizeProduct from "../CustomizeProduct";

const ModalMainContainer = styled.main`
   display: flex;
   flex-direction: column;
   width: 100%;

    @media screen and ( min-width: 1024px ) {
        width: 80%;
    }
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

const PedidoModal = () => {

    const {page, setPage} = useContext(ProductModalContext);

    function getPage(page) {
        switch (page) {
            case 1:
                return (<>
                    <CustomizeProduct pageProps={[page, setPage]} />
                    <ShoppingCartPage />
                </>
                )
            case 2:
                return (
                    <ShoppingCartPage />
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