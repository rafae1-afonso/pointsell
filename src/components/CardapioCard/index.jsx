import styled from "styled-components"

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: #0000001c 0 3px 8px 1px;
    width: 176px;
    background-color: transparent;

    & > img {
        width: 176px;
        height: 133px;
        border-top-left-radius: 18px;
        border-top-right-radius: 18px;
        object-fit: cover;
    }

    & > div {
        display: flex;
        flex-direction: column;
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
            margin-top: auto;
        }
    }
`;

const CardapioCard = ({ title, price, imgSrc }) => {
    return <CardContainer>
        <img src={imgSrc} alt={title} />
        <div>
            <h1>{title}</h1>
            <p>
                 {
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(price)
                 }
            </p>
        </div>
    </CardContainer>
}

export default CardapioCard