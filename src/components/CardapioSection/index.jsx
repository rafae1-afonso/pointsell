import styled from 'styled-components'

const StyledSection = styled.section`
    color: black;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    & > h1 {
        font-size: 22px;
        margin: 10px;
        margin-left: 20px;
    }
`;

const CardapioSection = ({children, title}) => {
  return <StyledSection>
    <h1>{title}</h1>
    {children}
  </StyledSection>
}

export default CardapioSection