import P from 'prop-types';

import './styles.css';
import logo from '../../imagens/logo.svg';
import { FiHome } from 'react-icons/fi';

import React from 'react';

export const AsideBar = ({ menu }) => {
  return (
    <aside className={menu ? 'menu' : ''}>
      <img src={logo} alt="GBM" />
      <h4> Principal</h4>
      <div className="home">
        <FiHome />
        <h6>Home</h6>
      </div>
    </aside>
  );
};

AsideBar.propTypes = {
  menu: P.bool,
};
