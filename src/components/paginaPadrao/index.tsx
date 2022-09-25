import styles from './paginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import stylestema from 'styles/tema.module.scss';
import React from 'react';

export const PaginaPadrao = ({ children} : {children?: React.ReactNode}) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do codigo e da massa
        </div>
      </header>
      <div className={stylestema.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
};