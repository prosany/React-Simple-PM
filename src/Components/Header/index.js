import React from 'react';
import Style from '../../Style/navbar.module.scss';
import Logo from '../../Assets/Images/logo/logo.png';

export default function Header() {
    return (
        <React.Fragment>
            <header className={Style.header}>
                <div className={Style.logo}>
                    <img src={Logo} alt="Practice App" />
                </div>
                <nav>
                    Nav Menu
                </nav>
            </header>
        </React.Fragment>
    )
}
