import React from 'react';

const Header = (props) => (
    <div className="header">
    <h1 className="header__title">{props.title}</h1>
    {props.subtitle && <h2 class="header__subtitle">{props.subtitle}</h2>}
    </div>
);

Header.defaultProps = {
    title: "Definitely An Extremely Dank App",
    subtitle: "Ultimate Championship Edition 2017"
};

export default Header;