import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import styled from "styled-components"

const AmountContainer = styled.main`
    background-color: white;
    border-radius: 50px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    justify-self: flex-start;
    background-color: ${props => props.backgrondcolor};
`;

const AmountComponent = ({removeButton, amount = 0, onAmountChange }) => {
    const [counter, setCounter] = useState(amount);

    function updateCounter(value) {
        if ((counter + value) >= 0) {
            setCounter(counter + value);
        }
        onAmountChange(counter + value, value);
    };

    return <AmountContainer>
        {
            !removeButton ?
                counter > 0 && <AmountButton backgrondcolor="#9898983b" onClick={() => updateCounter(-1)}>
                    <Minus size={18} color="#41414F" />
                </AmountButton>
                :
                counter > 1 ?
                    <AmountButton backgrondcolor="#9898983b" onClick={() => updateCounter(-1)}>
                        <Minus size={18} color="#41414F" />
                    </AmountButton>
                    :
                    <AmountButton backgrondcolor="#fd0b0b40" onClick={() => updateCounter(-1)}>
                        <Trash2 size={18} color="#E82727" />
                    </AmountButton>
        }
        <div>
            {counter}
        </div>
        <AmountButton backgrondcolor="#f680203b" onClick={() => updateCounter(1)}>
            <Plus size={18} color="#F67F20" />
        </AmountButton>
    </AmountContainer>
}

export default AmountComponent