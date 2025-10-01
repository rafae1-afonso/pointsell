import styled from 'styled-components'

import Header from "../components/Header";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    width: 100%;
    padding-top: 100px;
`;

const PageHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > button {
            display: flex;
            align-items: center;
            margin: 0;
            position: absolute;
            margin: 10px;
        }

        & > h1 {
            font-size: 24px;
            font-weight: 600;
            margin-right: auto;
            margin: auto;
        }

    }

    & > h2 {
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        margin-top: 50px;
    }
`;

const MainContainer = styled.main`
    border-top: 1px solid #0000002f;
    border-bottom: 1px solid #0000002f;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`;

const NoOrdersContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px;

    & > p {
        margin: 0;
        color: #5C5C5C;
        font-size: 22px;
        text-align: center;
    }
`;

const Conta = () => {
    return <>
        <Header />
        <PageContainer>
            <PageHeader>
                <div>
                    <h1>Sua conta</h1>
                </div>
                <h2>O Bistrô da Esquina, Mesa 7 • Aberto 11h - 22h</h2>
            </PageHeader>
            <MainContainer>
                <NoOrdersContainer>
                    <p>Sem pedidos</p>
                </NoOrdersContainer>
            </MainContainer>
        </PageContainer>
    </>
}

export default Conta;