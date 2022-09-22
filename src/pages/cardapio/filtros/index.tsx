import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';

interface Iopcao {
  id: number
  label : string
}

interface Props {
  filtro: number | null
  setFiltro: React.Dispatch<React.SetStateAction< number | null>>
}

export const Filtros = ( {filtro , setFiltro} : Props) => {

  const selecionaFiltro = (opcao : Iopcao) => {
    if(filtro === opcao.id){
      return setFiltro(null);
    }
    return setFiltro(opcao.id);
  };

  return(
    <div className={styles.filtros}>
      {filtros.map((opcao) =>(
        <button 
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: filtro === opcao.id
          })}
          key={opcao.id} onClick={() => selecionaFiltro(opcao)}>
          {opcao.label}
        </button>
      ))}
    </div>
  );
};