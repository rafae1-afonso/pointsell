import { Link } from "react-router";
import styled from "styled-components"
import CurrencyFormatNumber from "../../services/CurrencyFormatNumber";
import { useContext } from "react";
import { ProductModalContext } from "../../contexts/ProductModalContext";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: #0000001c 0 3px 8px 1px;
    width: 176px;
    min-height: 280px;
    background-color: transparent;
    border-radius: 10px;
    cursor: pointer;
    
    @media screen and ( min-width: 1024px ) {
        background-color: white;
        padding: 10px;
        border: .5px solid #0000002f;
    }

    & > img {
        width: 176px;
        height: 133px;
        border-top-left-radius: 18px;
        border-top-right-radius: 18px;
        object-fit: cover;

        @media screen and ( min-width: 1024px ) {
            border-radius: 10px;
        }
    }

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 5px 15px;
        height: 100%;

        & > h1 {
            font-size: 18px;
            margin-bottom: 6px;
        }

        & > p {
            font-size: 18px;
            font-weight: 600;
            color: #F26B38;
            margin: 0;
        }
    }
`;

const CardapioCard = ({ productId, title, price, imgSrc, desc }) => {

    const { width } = useWindowDimensions();

    const {
        setProductInfo,
        setModalVisible,
        setPage,
    } = useContext(ProductModalContext);

    return <CardContainer onClick={() => {
        if (width >= 1024) {
            setPage(1);
        }
        setProductInfo({
            id: productId,
            title: title,
            price: price,
            imgSrc: imgSrc,
            desc: desc
        });
        setModalVisible(true);
    }}>
        <img src={imgSrc} alt={title} />
        <div>
            <h1>{title}</h1>
            <p>
                {
                    CurrencyFormatNumber(price)
                }
            </p>
        </div>
    </CardContainer>
}

export default CardapioCard