import React from 'react';
import TopMenu from '../topMenu/topMenu'
import './header.scss'

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <TopMenu />
            </div>
        );
    }
}

export default Header;
