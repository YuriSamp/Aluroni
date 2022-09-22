import { useState } from 'react';
import styles from './Cardapio.module.scss';
import { Buscador } from 'pages/cardapio/buscador';
import { Filtros } from './filtros';
import { Ordenador } from './select';
import { Itens } from './itens';

export const Cardapio = () => {
  const [filtro, setFiltro] = useState<number | null>(null);
  const [busca, setBusca] = useState('');
  const [ordenador, setOrdenador] = useState('');
  return (
    <section className={styles.cardapio}>
      <h3 className={styles.cardapio__titulo}>Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca} />
      <div className={styles.filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  );
};