import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import styled from 'styled-components'

import AsideNav from './components/AsideNav/index.jsx'

import Cardapio from './pages/Cardapio.jsx'
import Conta from './pages/Conta.jsx'

import ProductModalProvider from './providers/ProductModalProvider/index.jsx'
import ShoppingCartProvider from './providers/ShoppingCartProvider/index.jsx'
import Garçom from './pages/Garçom.jsx'

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
    <ShoppingCartProvider>
      <ProductModalProvider>
        <AppContainer>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/cardapio' element={<Cardapio />} />
            <Route path='/conta' element={<Conta />} />
            <Route path='/garcom' element={<Garçom />} />
          </Routes>
          <MainContainer>
            <AsideNav />
          </MainContainer>
        </AppContainer>
      </ProductModalProvider>
    </ShoppingCartProvider>
  </BrowserRouter>,
)
