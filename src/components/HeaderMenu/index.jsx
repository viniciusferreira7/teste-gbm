import P from 'prop-types';

import './styles.css';
import user from '../../imagens/image-avatar.png';

import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import React from 'react';

export const HeaderMenu = ({ handleMenu }) => {
  return (
    <header>
      <HiOutlineMenuAlt1 onClick={handleMenu} />
      <div className="userWrapper">
        <img className="user" src={user} alt="User" />
        <p>
          Admin <MdKeyboardArrowDown />
        </p>
      </div>
    </header>
  );
};

HeaderMenu.propTypes = {
  handleMenu: P.func,
};
