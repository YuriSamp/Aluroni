import styles from './item.module.scss';
import classNames from 'classnames';

interface Props {
  title: string
  description: string
  photo: string
  size: number
  serving: number
  price: number
  categotyLabel: string
}


export const Item = ({ title, description, photo, size, serving, price, categotyLabel }: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div className={classNames({
            [styles.item__tipo]: true,
            [styles[`item__tipo__${categotyLabel.toLowerCase()}`]] :true
          })}>
            {categotyLabel}
          </div>
          <div className={styles.item__porcao}>
            {size}g
          </div>
          <div className={styles.item__qtdpessoas}>
           Serve {serving} pessoa{serving === 1 ? '' : 's'}
          </div>
          <div className={styles.item__valor}>
            R${price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};