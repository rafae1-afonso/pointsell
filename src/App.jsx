import styled from "styled-components";;
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import './styles/embla.css';

import Banner1 from './images/Inicio/Banner.jpg';
import Banner2 from './images/Inicio/Banner2.png';
import Banner3 from './images/Inicio/Banner3.png';

import NewsCard from "./components/NewsCard";
import ScrollCarousel from "./components/ScrollCarousel";

import { CaroucelButtons, produtosAPI } from "./constants";
import Header from "./components/Header";
import TagCategoria from "./components/TagCategoria";
import useWindowDimensions from "./hooks/UseWindowDimensions.js";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding-bottom: 70px;
  padding-top: 100px;

  @media screen and ( min-width: 1024px ) {
    padding-bottom: 0;
  }
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  gap: 10px;

  @media screen and ( min-width: 1024px ) {
    justify-content: start;
    align-items: flex-start;
    width: 82vw;
  }
`;

const BannersSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const StyledImg = styled.img`
  width: 300px;
  height: 218px;
  object-fit: cover;
  border-radius: 12px;

  @media screen and ( min-width: 1024px ) {
    width: 380px;
  }
`;

const NewsSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100vw;

  & > h1 {
    color: black;
    font-size: 20px;
    font-weight: 600;
    padding: 0 20px;
  }
`;

function App() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const { width } = useWindowDimensions();

  return (
    <AppContainer>
      <Header tagsCarouselVisible={false} />
      <MainContainer>
        {
          width >= 1024 ?
            <BannersSection>
              <StyledImg src={Banner1} />
              <StyledImg src={Banner2} />
              <StyledImg src={Banner3} />
            </BannersSection>
            :
            <section className="embla">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  <div className="embla__slide">
                    <StyledImg src={Banner1} />
                  </div>
                  <div className="embla__slide">
                    <StyledImg src={Banner2} />
                  </div>
                  <div className="embla__slide">
                    <StyledImg src={Banner3} />
                  </div>
                </div>
              </div>
            </section>
        }
        <ScrollCarousel>
          {
            CaroucelButtons.map((button, key) => (
              <li key={key}>
                <TagCategoria>
                  <button.icon /> {button.content}
                </TagCategoria>
              </li>
            ))
          }
        </ScrollCarousel>
        <NewsSection>
          <h1>Novidades!</h1>
          <ScrollCarousel>
            {
              produtosAPI.novidade.map(produto => (
                <NewsCard key={produto.id} imageSrc="https://theme-assets.getbento.com/sensei/e68cf53.sensei/assets/images/catering-item-placeholder-704x520.png" Title={produto.nome} Description={produto.descricao} />

              ))
            }
          </ScrollCarousel>
        </NewsSection>
      </MainContainer>
    </AppContainer>
  )

};

export default App;
