import React, { ReactNode } from 'react'
import Header  from '../components/header/index'
import SearchInput from './../components/searchInput/index';
import Footer from '../components/footer/index';
import ContainerCard from './../components/containerCard/index';

type templateProps = {
children: ReactNode;
}

const AppWraper = ({children}: templateProps) =>{
return (
<div>
    <Header>
        <SearchInput />
    </Header>
    <ContainerCard>
        {children}
    </ContainerCard>
    <Footer />
</div>
)
}

export default AppWraper