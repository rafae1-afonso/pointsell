import { Minus, Plus, Trash2 } from "lucide-react";
import styled from "styled-components"

const AmountContainer = styled.main`
    background-color: white;
    border-radius: 50px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 12px;

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 16px;
        margin: 0 5px;
    }
`;

const AmountButton = styled.button`
    height: 28px;
    width: 28px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backgrondcolor};
`;

const AmountComponent = ({ removeButton }) => {
    return <AmountContainer>
        {
            !removeButton ?
                <AmountButton backgrondcolor="#9898983b">
                    <Minus size={18} color="#41414F" />
                </AmountButton>
                :
                <AmountButton backgrondcolor="#fd0b0b40">
                    <Trash2 size={18} color="#E82727" />
                </AmountButton>
        }
        <div>
            0
        </div>
        <AmountButton backgrondcolor="#f680203b">
            <Plus size={18} color="#F67F20" />
        </AmountButton>
    </AmountContainer>
}

export default AmountComponent