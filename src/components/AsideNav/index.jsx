import { HandPlatter, House, LayoutGrid, ReceiptText, Settings } from "lucide-react";
import styled from "styled-components";
import NavButtonLink from "../NavButton";

const AsideContainer = styled.aside`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: fixed;
    z-index: 2;
    bottom: 0;
    padding: 15px;
    background-color: white;
    width: 100%;

    @media screen and (min-width: 1024px) {
        height: 80vh;
        flex-direction: column;
        padding: 15px 25px;
        justify-content: start;
        width: 4%;
    }
`;

const NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;

    @media screen and (min-width: 1024px) {
        flex-direction: column;
        justify-content: start;
        gap: 30px;
    }
`;

const ConfigContainer = styled.div`
    display: none;
    flex-direction: column;
    justify-content: end;
    height: 100%;

    @media screen and (min-width: 1024px) {
        display: flex;
    }
`;

const AsideNav = () => {
    return (
        <AsideContainer>
            <NavContainer>
                <NavButtonLink toLink='/'>
                    <House size={28} />
                    <p>Início</p>
                </NavButtonLink>
                <NavButtonLink toLink='/cardapio'>
                    <LayoutGrid size={28} />
                    <p>Cardápio</p>
                </NavButtonLink>
                <NavButtonLink toLink='/conta'>
                    <ReceiptText size={28} />
                    <p>Conta</p>
                </NavButtonLink>
                <NavButtonLink toLink='/garcom'>
                    <HandPlatter size={28} />
                    <p>Garçom</p>
                </NavButtonLink>
            </NavContainer>
            <ConfigContainer>
                <NavButtonLink>
                    <Settings size={28} />
                </NavButtonLink>
            </ConfigContainer>
        </AsideContainer>
    )
}

export default AsideNav