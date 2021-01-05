import React from 'react';
import './topMenu.scss'

class TopMenu extends React.Component {
    render() {
        return (
            <nav className='topMenu'>
                <ul className='topMenu__menu'>
                    <li className='topMenu__menu-item'>Обо мне</li>
                    <li className='topMenu__menu-item'>Навыки</li>
                    <li className='topMenu__menu-item'>Заказы</li>
                    <li className='topMenu__menu-item'>Контакты</li>
                </ul>
            </nav>
        );
    }
}

export default TopMenu;
