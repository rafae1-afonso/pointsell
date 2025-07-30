import styled from 'styled-components'

const StyledHeader = styled.header`
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 21px 31px;
    padding-bottom: 61px;
`;

const StyledForm = styled.form`
    display: flex;
    justify-content: start;
    width: 500px;
    border-radius: 50px;
    border: 1px solid #DDDDDD;
    padding: 10px 20px;
`

const SearchInput = styled.input`
    width: 100%;
    border: none;
    

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #999999;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <StyledForm>
                <SearchInput type='search' placeholder='Pesquisar Prato' />
            </StyledForm>
            <div></div>
        </StyledHeader>
    )
}

export default Header