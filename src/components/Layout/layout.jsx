import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import '../../styles/index.scss';
import layoutStyles from './layout.module.scss';

// eslint-disable-next-line react/prop-types
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

// Layout.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   children: PropTypes.object.isRequired,
// };
