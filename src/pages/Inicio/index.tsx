import Cardapio from 'data/Cardapio.json';
import styles from './inicio.module.scss';
import stylestema from 'styles/tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';

export const Inicio = () => {
  const pratosRecomendados = [...Cardapio];
  const pratosSort = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
  const navigate = useNavigate();

  function Redirecionar(prato: typeof Cardapio[0]) {
    navigate(`/prato/${prato.id}`, {state: {prato}});
  }

  return (
    <section>
      <h3 className={stylestema.titulo}>
        Recomendações da cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosSort.map(item => (
          <div className={styles.recomendado} key={item.id}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              onClick={() => Redirecionar(item)}
              className={styles.recomendado__botao}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylestema.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt='Casa do aluroni' />
        <div className={styles.nossaCasa__endereco}>
          Rua vergueiro 3185 <br /> <br /> Vila mariana SP
        </div>
      </div>
    </section>
  );
};