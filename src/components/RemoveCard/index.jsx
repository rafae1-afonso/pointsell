import styled from "styled-components";
import { useState } from "react";
import Checkbox from "../Checkbox";

const RemoveCardContainer = styled.div`
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

const RemoveCard = ({title}) => {
    const [checked, setChecked] = useState(false)

    return <RemoveCardContainer>
        <div>
            <h1>{title}</h1>
        </div>
        <Checkbox onChange={() => setChecked(!checked)} checked={checked}/>
    </RemoveCardContainer>
};

export default RemoveCard;