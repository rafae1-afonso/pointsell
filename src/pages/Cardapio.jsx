import styled from "styled-components";
import ScrollCarousel from "../components/ScrollCarousel";
import { CaroucelButtons, produtosAPI } from "../constants";
import CardapioSection from "../components/CardapioSection";
import CardapioCard from "../components/CardapioCard";

import Header from "../components/Header";
import { useContext } from "react";
import PedidoModal from "../components/PedidoModal";
import { ProductModalContext } from "../contexts/ProductModalContext";
import TagCategoria from "../components/TagCategoria";

const PageBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 70px;
    padding-top: 70px;
`;

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    padding-top: 30px;

    @media screen and ( min-width: 1024px ) {
        width: 85vw;
    }

`;

const Cardapio = () => {

    const {
        modalVisible
    } = useContext(ProductModalContext);

    return <>
        <Header />
        {
            !modalVisible ? <PageBodyContainer>
                <MainContainer>
                    <ScrollCarousel>
                        {
                            CaroucelButtons.map((button, key) => (
                                <li key={key}>
                                    <TagCategoria rowDirection={true}>
                                        <button.icon /> {button.content}
                                    </TagCategoria>
                                </li>
                            ))
                        }
                    </ScrollCarousel>
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