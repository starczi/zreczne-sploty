import React, { useState } from 'react';
import Nav from './navigation';
// import Hamburger from './hamburger';
import Logo from './logo';
import headerStyles from './header.module.scss';

export default function Header() {
  // const [showMenu, setShowMenu] = useState(false);

  // let menu;
  // if (!showMenu) {
  //   menu = <div> yolo</div>;
  // }

  return (
    <header className={headerStyles.header}>
      <Logo />
      <div className={headerStyles.navWrapper}>
        <Nav />
        {/* <Hamburger onClick={() => setShowMenu(!showMenu)} /> */}
      </div>
      {/* {menu} */}
    </header>
  );
}
