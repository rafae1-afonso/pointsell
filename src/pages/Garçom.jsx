import styled from 'styled-components'
import Button from '../components/Button';
import Header from '../components/Header';

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
            font-size: 18px;
            font-weight: 500;
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
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
        position: fixed;
        bottom: 0;
        padding-bottom: 100px;

        @media screen and ( min-width: 1024px ) {
            padding-bottom: 0;
            padding-top: 300px;
            top: 0;
        }
    }
`;

const Garçom = () => {
    return <>
        <Header />
        <PageContainer>
            <PageHeader>
                <div>
                    <h1>Precisa de ajuda?</h1>
                </div>
                <h2>Pressione o botão abaixo para chamar um garçom à sua mesa.</h2>
            </PageHeader>
            <MainContainer>
                <div>
                    <Button width='326px'>
                        Chamar Garçom
                    </Button>
                </div>
            </MainContainer>
        </PageContainer>
    </>
}

export default Garçom;