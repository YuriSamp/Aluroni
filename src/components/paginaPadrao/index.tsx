import styles from './paginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';

export const PaginaPadrao = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do codigo e da massa
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};