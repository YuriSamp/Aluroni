import { Footer } from 'components/footer';
import { Menu } from 'components/menu';
import { PaginaPadrao } from 'components/paginaPadrao';
import { Cardapio } from 'pages/cardapio';
import { Inicio } from 'pages/Inicio';
import { NotFound } from 'pages/NotFound';
import { Prato } from 'pages/Prato';
import { Sobre } from 'pages/sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />} >
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
          </Route >
          <Route path='prato/:id' element={<Prato />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};