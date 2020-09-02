import React, { ReactNode } from 'react'
import { Header } from '../components/header/index'
import SearchInput from './../components/searchInput/index';
import Footer from '../components/footer/index';

type templateProps = {
    children: ReactNode;
    }

export const AppWraper = ({children}: templateProps) =>{
return (
<>
    <Header>
        <SearchInput/>
    </Header>
    {children}
    <Footer />
</>
)
}