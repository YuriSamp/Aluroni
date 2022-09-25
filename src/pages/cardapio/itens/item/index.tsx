import styles from './item.module.scss';
import { Tags } from 'components/tags';
import { Pratoi } from 'types/Prato';
import { useNavigate } from 'react-router-dom';

export const Item = (props: Pratoi) => {
  const { title, description, photo, id } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.item} onClick={() =>navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Tags {...props} />
      </div>
    </div>
  );
};