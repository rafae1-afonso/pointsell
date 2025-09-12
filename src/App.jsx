import styled from "styled-components";;
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import './styles/embla.css';

import Banner1 from './images/Inicio/Banner.jpg';
import Banner2 from './images/Inicio/Banner2.png';
import Banner3 from './images/Inicio/Banner3.png';
import Pizza from "./images/Inicio/Pizza.png";
import Caesar from "./images/Inicio/Caesar.png";
import Sauvignon from "./images/Inicio/Sauvignon.png";

import Button from "./components/Button";
import NewsCard from "./components/NewsCard";
import ScrollCarousel from "./components/ScrollCarousel";

import { CaroucelButtons } from "./constants";
import Header from "./components/Header";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  gap: 10px;

  @media screen and ( min-width: 1024px ) {
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
`;

const StyledImg = styled.img`
  width: 342px;
  height: 218px;
  object-fit: cover;
  border-radius: 12px;
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

  return <AppContainer>
    <Header tagsCarouselVisible={false} />
    <MainContainer>
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
      <ScrollCarousel>
        {
          CaroucelButtons.map((button, key) => (
            <li>
              <Button key={key}>
                <button.icon /> {button.content}
              </Button>
            </li>
          ))
        }
      </ScrollCarousel>
      <NewsSection>
        <h1>Novidades!</h1>
        <ScrollCarousel>
          <NewsCard imageSrc={Pizza} Title="Pizza de Margerita" Description="Clássico tomate e mozzarella" />
          <NewsCard imageSrc={Caesar} Title="Salada Caesar" Description="Crisp romaine com parmesão" />
          <NewsCard imageSrc={Sauvignon} Title="Sauvignon Blanc" Description="Aromas cítricos marcantes" />
        </ScrollCarousel>
      </NewsSection>
    </MainContainer>
  </AppContainer>

};

export default App;
