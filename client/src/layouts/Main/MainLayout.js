
import React from 'react';
import LocalStyles from './local.style';

const MainLayout = ({children}) => {
    return (
        <LocalStyles>
            <header>
                Welcome to BattleBook
            </header>
            <main>
                {children}
            </main>
        </LocalStyles>
    );
}

export default MainLayout;

