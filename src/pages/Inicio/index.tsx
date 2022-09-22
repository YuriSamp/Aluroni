import Cardapio from 'data/Cardapio.json';
import styles from './inicio.module.scss';

export const Inicio = () => {
  const pratosRecomendados = [...Cardapio];
  const pratosSort = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
  return (
    <section>
      <h3 className={styles.titulo}>
        Recomendações da cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosSort.map(item => (
          <div className={styles.recomendado} key={item.id}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomendado__botao}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};