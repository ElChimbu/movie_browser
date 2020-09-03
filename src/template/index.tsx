import React, { ReactNode } from 'react'
import { Header } from '../components/header/index'
import SearchInput from './../components/searchInput/index';
import Footer from '../components/footer/index';
import  Styled  from 'styled-components';

type templateProps = {
    children: ReactNode;
    }

export const AppWraper = ({children}: templateProps) =>{
return (
<div>
    <Header>
        <SearchInput/>
    </Header>
    <div>
    {children}
    </div>
    <Footer />
</div>
)
}