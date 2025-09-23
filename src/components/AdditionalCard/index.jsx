import styled from "styled-components"
import CurrencyFormatNumber from "../../services/CurrencyFormatNumber";
import AmountComponent from "../AmountComponent";

const AdditionalCardContainer = styled.div`
    display: flex;

    & > div {
        margin-right: auto;
        
        h1 {
            font-size: 16px;
            font-weight: 500;
            margin: 0;
            margin-bottom: 3px;
        }
        
        p {
            color: #757575;
            font-size: 14px;
            font-weight: 400;
            margin: 0;
        }
    }
`;

const AdditionalCard = ({title, price}) => {
    return <AdditionalCardContainer>
        <div>
            <h1>{title}</h1>
            <p>+{CurrencyFormatNumber(price)}</p>
        </div>
        <AmountComponent />
    </AdditionalCardContainer>
};

export default AdditionalCard;