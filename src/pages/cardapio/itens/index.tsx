import cardapio from 'data/Cardapio.json';
import { Item } from './item';
import styles from './itens.module.scss';
import React, { useState, useEffect } from 'react';

interface Props {
  busca: string
  filtro: number | null
  ordenador: string
}

export const Itens = (props: Props) => {
  const { busca, filtro, ordenador } = props;

  const [lista, SetLista] = useState(cardapio);

  useEffect(() => {
    const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    SetLista(ordernar(novaLista));
  }, [busca, filtro, ordenador]);

  const testaBusca = (title: string) => {
    const Regex = new RegExp(busca, 'i');
    return Regex.test(title);
  };

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  function ordernar(novaLista: typeof cardapio) {
    switch (ordenador) {
    case 'porcao':
      return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
    case 'qtd_pessoas':
      return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1);
    case 'preco':
      return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);
    default: 
      return novaLista;
    }
  }

  return (
    <div className={styles.itens}>
      {lista.map(item => (
        <Item
          key={item.id}
          title={item.title}
          description={item.description}
          photo={item.photo}
          size={item.size}
          serving={item.serving}
          price={item.price}
          categotyLabel={item.category.label}
        />
      ))}
    </div>
  );
};