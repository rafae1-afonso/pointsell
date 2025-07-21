import AsideNav from "./components/AsideNav";
import Header from "./components/Header";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.main`
  display: flex;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContainer>
        <AsideNav />
      </MainContainer>
    </AppContainer>
  )
}

export default App
