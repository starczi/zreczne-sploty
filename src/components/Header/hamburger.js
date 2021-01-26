import React from 'react';
import hamgurgerStyles from './hamburger.module.scss';

export default function Hamburger() {
  return (
    <div className={hamgurgerStyles.menuBtn}>
      <div className={hamgurgerStyles.menuBtn__burger} />
    </div>
  );
}
