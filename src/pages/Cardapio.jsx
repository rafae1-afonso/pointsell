import styled from "styled-components";
import ScrollCarousel from "../components/ScrollCarousel";
import { produtosAPI } from "../constants";
import CardapioSection from "../components/CardapioSection";
import CardapioCard from "../components/CardapioCard";

import Header from "../components/Header";
import { useContext } from "react";
import PedidoModal from "../components/PedidoModal";
import { ProductModalContext } from "../contexts/ProductModalContext";

const PageBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 70px;
    padding-top: 100px;
`;

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    padding-top: 30px;
`;

const Cardapio = () => {

    const {
        modalVisible
    } = useContext(ProductModalContext);

    return <>
        {
            !modalVisible ? <PageBodyContainer>
                <Header />
                <MainContainer>
                    <CardapioSection title="Menu do Dia">
                        <ScrollCarousel>
                            {
                                produtosAPI.menuDoDia.map(produto => (
                                    <CardapioCard key={produto.id} productId={produto.id} title={produto.nome} price={produto.preco} desc={produto.descricao} imgSrc="https://theme-assets.getbento.com/sensei/e68cf53.sensei/assets/images/catering-item-placeholder-704x520.png" />
                                ))
                            }
                        </ScrollCarousel>
                    </CardapioSection>

                    <CardapioSection title="Mais Pedidos">
                        <ScrollCarousel>
                            {
                                produtosAPI.maisPedidos.map(produto => (
                                    <CardapioCard key={produto.id} productId={produto.id} title={produto.nome} price={produto.preco} desc={produto.descricao} imgSrc="https://theme-assets.getbento.com/sensei/e68cf53.sensei/assets/images/catering-item-placeholder-704x520.png" />
                                ))
                            }
                        </ScrollCarousel>
                    </CardapioSection>

                    <CardapioSection title="Novidades">
                        <ScrollCarousel>
                            {
                                produtosAPI.novidade.map(produto => (
                                    <CardapioCard key={produto.id} productId={produto.id} title={produto.nome} price={produto.preco} desc={produto.descricao} imgSrc="https://theme-assets.getbento.com/sensei/e68cf53.sensei/assets/images/catering-item-placeholder-704x520.png" />
                                ))
                            }
                        </ScrollCarousel>
                    </CardapioSection>

                    <CardapioSection title="Promoções">
                        <ScrollCarousel>
                            {
                                produtosAPI.promocao.map(produto => (
                                    <CardapioCard key={produto.id} productId={produto.id} title={produto.nome} price={produto.preco} desc={produto.descricao} imgSrc="https://theme-assets.getbento.com/sensei/e68cf53.sensei/assets/images/catering-item-placeholder-704x520.png" />
                                ))
                            }
                        </ScrollCarousel>
                    </CardapioSection>
                </MainContainer>
            </PageBodyContainer> : <PedidoModal />
        }
    </>
};

export default Cardapio;