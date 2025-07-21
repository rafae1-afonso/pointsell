import styled from "styled-components";

const AsideContainer = styled.aside`
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 0 31px 31px;
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
`;

const AsideNav = () => {
    return (
        <AsideContainer>
            <NavContainer>
                <Button>Início</Button>
                <Button>Cardápio</Button>
                <Button>Conta</Button>
                <Button>Garçom</Button>
            </NavContainer>
            <ConfigContainer>
                <Button>Configurações</Button>
            </ConfigContainer>
        </AsideContainer>
    )
}

export default AsideNav