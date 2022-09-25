import styles from './Prato.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import cardapio from 'data/Cardapio.json';
import { Tags } from 'components/tags';
import { Pratoi } from 'types/Prato';
import { NotFound } from 'pages/NotFound';
import { PaginaPadrao } from 'components/paginaPadrao';

export const Prato = (props: Pratoi) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = cardapio.find(item => item.id === Number(id));
  if (!prato) {
    return <NotFound/>;
  }
  return (
    <PaginaPadrao>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>
          {prato.title}
        </h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {prato.description}
          </p>
          <Tags  {...prato} />
        </div>
      </section>
    </PaginaPadrao>
  );
};