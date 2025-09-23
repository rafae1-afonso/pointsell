import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AsideNav from './components/AsideNav/index.jsx'
import styled from 'styled-components'
import Cardapio from './pages/Cardapio.jsx'
import ProdutoPage from './pages/ProdutoPage.jsx'
import ProductModalProvider from './providers/ProductModalProvider/index.jsx'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;

  @media screen and ( min-width: 1024px ) {
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
`;

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductModalProvider>
      <AppContainer>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/cardapio' element={<Cardapio />} />
          <Route path='/cardapio/:id' element={<ProdutoPage />} />
          <Route path='/conta' element={<App />} />
          <Route path='/garcom' element={<App />} />
        </Routes>
        <MainContainer>
          <AsideNav />
        </MainContainer>
      </AppContainer>
    </ProductModalProvider>
  </BrowserRouter>,
)
