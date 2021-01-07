import React from "react";
import "./topMenu.scss";
import { BrowserRouter, NavLink } from "react-router-dom";

const menuData = [
  { path: '/about', linkText: 'Обо мне' },
  { path: '/skills', linkText: 'Навыки' },
  { path: '/services', linkText: 'Услуги' },
  { path: '/contacts', linkText: 'Контакты' }
];

// const menuItems = menuData.map(item => {return (
// `< li className="topMenu__menu-item" >
//   <NavLink to=${item.path}>${item.linkText}</NavLink>
// </li >`
// }))

const menuItems = menuData.map(item => {
  return (
    < li className='topMenu__menu-item' >
      <NavLink to={item.path}>{item.linkText}</NavLink>
    </li >
  )
})

class TopMenu extends React.Component {
  render() {
    return (
      <nav className="topMenu">
        <BrowserRouter>
          <ul className="topMenu__menu">
            {menuItems}
          </ul>
        </BrowserRouter>
      </nav>
    );
  }
}

export default TopMenu;
