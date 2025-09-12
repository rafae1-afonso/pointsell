import styled from "styled-components";

const CaroucelMenu = styled.section`
  display: flex;
  width: 100%;
  max-width: 100vw;

  & > ul {
    display: flex;
    gap: 12px;
    overflow-x: scroll;
    scrollbar-width: none;
    padding: 10px 20px;
    margin: 0;
  }
`;

const ScrollCarousel = ({children}) => {
    return <CaroucelMenu>
        <ul>
            {children}
        </ul>
    </CaroucelMenu>
};

export default ScrollCarousel;