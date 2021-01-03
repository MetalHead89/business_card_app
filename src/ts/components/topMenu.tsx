import React from 'react';

class TopMenu extends React.Component {
    render() {
        return (
            <nav className='topMenu'>
                <ul>
                    <li>Обо мне</li>
                    <li>Навыки</li>
                    <li>Заказы</li>
                    <li>Контакты</li>
                </ul>
            </nav>
        );
    }
}

export default TopMenu;
