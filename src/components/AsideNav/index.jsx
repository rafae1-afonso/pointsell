import { HandPlatter, House, LayoutGrid, ReceiptText, Settings } from "lucide-react";
import styled from "styled-components";
import logoImage from '../../images/logo.png'

const AsideContainer = styled.aside`
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 23px 23px;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 23px;
`;

const StyledImage = styled.img`
    width: 35px;
    border-radius: 10px;
`;

const NavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 30px;
`;

const ConfigContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 100%;
`;

const Button = styled.button`
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    width: 50px;

    & > p {
        margin: 0;
        font-size: 14px
    }
`;

const AsideNav = () => {
    return (
        <AsideContainer>
            <LogoContainer>
                <StyledImage src={logoImage} />
            </LogoContainer>
            <NavContainer>
                <Button>
                    <House size={30} />
                    <p>Início</p>
                </Button>
                <Button>
                    <LayoutGrid size={30} />
                    <p>Cardápio</p>
                </Button>
                <Button>
                    <ReceiptText size={30} />
                    <p>Conta</p>
                </Button>
                <Button>
                    <HandPlatter size={30} />
                    <p>Garçom</p>
                </Button>
            </NavContainer>
            <ConfigContainer>
                <Button>
                    <Settings size={30} />
                </Button>
            </ConfigContainer>
        </AsideContainer>
    )
}

export default AsideNav