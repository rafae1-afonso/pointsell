import { Search } from 'lucide-react';
import styled from 'styled-components';
import logoImage from '/logo.png';
import { CaroucelButtons } from '../../constants';
import ScrollCarousel from '../ScrollCarousel';
import TagCategoria from '../TagCategoria';
import ShoppingCartComponent from '../ShoppingCartComponent';

const HeaderContainer = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    background-color: white;
    display: flex;
    flex-direction: column;
`;

const StyledHeader = styled.header`
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 10px;
    width: 95vw;

    @media screen and (min-width: 1024px) {
        display: flex;
        padding: 21px 30px;
        width: 95vw;
    }
`;

const StyledImage = styled.img`
    width: 45px;
    border-radius: 10px;

    @media screen and (min-width: 1024px) {
        width: 40px;
    }
`;

const StyledForm = styled.form`
    display: none;
    justify-content: start;
    width: 500px;
    border-radius: 50px;
    border: 1px solid #DDDDDD;
    padding: 10px 20px;

    @media screen and (min-width: 1024px) {
        display: flex;
    }
`

const ShoppingCartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
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
    return <HeaderContainer>
        <StyledHeader>
            <StyledImage src={logoImage} />
            <StyledForm>
                <SearchInput type='search' placeholder='Pesquisar Prato' />
                <Search color='#BBBBBB' size={24} />
            </StyledForm>
            <ShoppingCartComponent />
        </StyledHeader>
    </HeaderContainer>
}

export default Header