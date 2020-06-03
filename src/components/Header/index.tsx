import React from 'react';

// import { Container } from './styles';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header>
            <h1>Ecoleta</h1>
        </header>
    )
};

export default Header;