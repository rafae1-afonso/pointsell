import styled from "styled-components";

const StyledDiv = styled.div`
    width: ${props => (props.rowdirection ? '155px' : '125px')};
    display: flex;
    flex-direction: ${props => (props.rowdirection ? 'row' : 'column' )};
    align-items: center;
    gap: 10px;
    padding: 8px;
    box-shadow: #0000001c 0 3px 8px 1px;
    border-radius: 8px;
`

const TagCategoria = ({ children, rowDirection = false }) => {
    return (
        <StyledDiv rowdirection={rowDirection}>{children}</StyledDiv>
    )
};

export default TagCategoria;