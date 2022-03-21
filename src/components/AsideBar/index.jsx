import './styles.css';
import logo from '../../imagens/logo.svg';

import React from 'react';

export const AsideBar = () => {
  return (
    <aside>
      <img src={logo} alt="GBM" />
      <h4>Principal</h4>
    </aside>
  );
};
