import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import '../../styles/index.scss';
import layoutStyles from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
