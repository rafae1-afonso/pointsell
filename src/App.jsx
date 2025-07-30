import AsideNav from "./components/AsideNav";
import Header from "./components/Header";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <AsideNav />
      <MainContainer>
        <Header />
      </MainContainer>
    </AppContainer>
  )
}

export default App
