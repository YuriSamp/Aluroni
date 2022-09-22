import { Menu } from 'components/menu';
import { PaginaPadrao } from 'components/paginaPadrao';
import { Cardapio } from 'pages/cardapio';
import { Inicio } from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />} >
            <Route index element={<Inicio/>} />
            <Route path='cardapio' element={<Cardapio />} />
          </Route >
        </Routes>
      </Router>
    </main>
  );
};