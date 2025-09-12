import styled from "styled-components";

const StyledButton = styled.button`
    width: ${props => (props.rowDirection ? '155px' : '125px')};
    display: flex;
    flex-direction: ${props => (props.rowDirection ? 'row' : 'column' )};
    align-items: center;
    gap: 10px;
    padding: 8px;
    box-shadow: #0000001c 0 3px 8px 1px;
    border-radius: 8px;
`

const Button = ({ children, rowDirection = false }) => {
    return (
        <StyledButton rowDirection={rowDirection}>{children}</StyledButton>
    )
};

export default Button;