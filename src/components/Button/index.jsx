import styled from "styled-components"

const StyledButton = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 8px;
    color: white;
    background-color: #F26B38;
    font-weight: 600;
    font-size: 16px;

    &:active {
        background-color: #1DBF73;
    }
`;

const Button = ({children, width = '277px', height = '53px', onButtonClick = null}) => {
    return <StyledButton width={width} height={height} onClick={onButtonClick}>
        {children}
    </StyledButton>
}

export default Button