import React from "react";
import "./topMenu.scss";
import { BrowserRouter, NavLink } from "react-router-dom";

class TopMenu extends React.Component {
  render() {
    return (
      <nav className="topMenu">
        <BrowserRouter>
          <ul className="topMenu__menu">
            <li className="topMenu__menu-item">
              <NavLink to="/about">Обо мне</NavLink>
            </li>
            <li className="topMenu__menu-item">
              <NavLink to="/skills">Навыки</NavLink>
            </li>
            <li className="topMenu__menu-item">
              <NavLink to="/services">Заказы</NavLink>
            </li>
            <li className="topMenu__menu-item">
              <NavLink to="/contacts">Контакты</NavLink>
            </li>
          </ul>
        </BrowserRouter>
      </nav>
    );
  }
}

export default TopMenu;
