import styled from "styled-components"

const StyledButton = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 8px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    border: 1px solid ${props => props.theme.color};
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;

    &:active {
        background-color: #1DBF73;
        border: none;
        color: white;
    }
`;

const Button = ({children, width = '277px', height = '53px', onButtonClick = null, theme = 'primary'}) => {

    const themes = {
        primary: {
            color: 'white',
            backgroundColor: '#F26B38'
        },
        secondary: {
            color: '#F26B38',
            backgroundColor: 'white'
        },
    }

    return <StyledButton width={width} height={height} theme={themes[theme]} onClick={onButtonClick}>
        {children}
    </StyledButton>
}

export default Button