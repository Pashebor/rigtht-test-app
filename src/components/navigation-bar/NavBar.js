import React from 'react';

const NavBar = () => (
  <nav className={'navigation-bar'}>
    <a className={'logo'} href={'/'}> </a>
    <ul className={'navigation-bar-list'}>
      <li className={'navigation-bar-list__item navigation-bar-list__item--active'}><a href={'#'}>Главная</a></li>
      <li className={'navigation-bar-list__item'}><a href={'#'}>О нас</a></li>
      <li className={'navigation-bar-list__item'}><a href={'#'}>Спонсорам</a></li>
      <li className={'navigation-bar-list__item'}><a href={'#'}>Архив</a></li>
    </ul>
    <a className={'logo-small'} href={'/'}> </a>
  </nav>
);

export default NavBar;