import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 184px;

    & > img {
        width: 184px;
        height: 184px;
        border-radius: 12px;
        margin-bottom: 8px;
        object-fit: cover;
    };

    & > h1 {
        color: #1D1C1C;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 5px;
    };

    & > p {
        color: #757575;
        font-size: 14px;
        width: auto;
        margin-top: 0;
    };

`;

const NewsCard = ({ imageSrc, Title, Description }) => {
    return (
        <CardContainer>
            <img src={imageSrc} alt={Title} />
            <h1>{Title}</h1>
            <p>{Description}</p>
        </CardContainer>
    )
};

export default NewsCard;