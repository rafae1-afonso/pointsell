import styled from "styled-components";
import ScrollCarousel from "../components/ScrollCarousel";
import { produtosAPI } from "../constants";
import CardapioSection from "../components/CardapioSection";
import CardapioCard from "../components/CardapioCard";

import Header from "../components/Header";

const PageBodyContainer = styled.div`
    display: flex;
    flex-direction: column
`;

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    padding-top: 30px;
`;

const Cardapio = () => {
    return <PageBodyContainer>
        <Header />
        <MainContainer>
            <CardapioSection title="Menu do Dia">
                <ScrollCarousel>
                    {
                        produtosAPI.menuDoDia.map(produto => (
                            <CardapioCard title={produto.nome} price={produto.preco} imgSrc="https://theme-assets.getbento.com/sensei/e68cf53.sensei/assets/images/catering-item-placeholder-704x520.png" />
                        ))
                    }
                </ScrollCarousel>
            </CardapioSection>
            <CardapioSection title="Mais Pedidos">
                <ScrollCarousel>
                    {
                        produtosAPI.maisPedidos.map(produto => (
                            <CardapioCard title={produto.nome} price={produto.preco} imgSrc="https://theme-assets.getbento.com/sensei/e68cf53.sensei/assets/images/catering-item-placeholder-704x520.png" />
                        ))
                    }
                </ScrollCarousel>
            </CardapioSection>
            <CardapioSection title="Novidades">
                <ScrollCarousel>
                    {
                        produtosAPI.novidade.map(produto => (
                            <CardapioCard title={produto.nome} price={produto.preco} imgSrc="https://theme-assets.getbento.com/sensei/e68cf53.sensei/assets/images/catering-item-placeholder-704x520.png" />
                        ))
                    }
                </ScrollCarousel>
            </CardapioSection>
            <CardapioSection title="Promoções">
                <ScrollCarousel>
                    {
                        produtosAPI.promocao.map(produto => (
                            <CardapioCard title={produto.nome} price={produto.preco} imgSrc="https://theme-assets.getbento.com/sensei/e68cf53.sensei/assets/images/catering-item-placeholder-704x520.png" />
                        ))
                    }
                </ScrollCarousel>
            </CardapioSection>
        </MainContainer>
    </PageBodyContainer>
};

export default Cardapio;