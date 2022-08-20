
import React from 'react';
import LocalStyles from './local.style';
import MainLayout from '../../layouts/Main';

const HomePage = () => {
    return (
        <MainLayout>
            <LocalStyles>
                <p>test content</p>
            </LocalStyles>
        </MainLayout>
    );
}

export default HomePage;

