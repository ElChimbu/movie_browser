import React, { ReactNode } from 'react'
import { useHistory } from 'react-router-dom'
import Header  from '../components/header/index'
import SearchInput from './../components/searchInput/index';
import Footer from '../components/footer/index';
import ContainerCard from './../components/containerCard/index';

type templateProps = {
children: ReactNode;
}

const AppWraper = ({children}: templateProps) => {
    const history = useHistory()
    return (
    <div>
        <Header>
            <SearchInput onSearch={(search: string) => history.push(`/?search=${search}`)} />
        </Header>
        <ContainerCard>
            {children}
        </ContainerCard>
        <Footer />
    </div>
    )
}

export default AppWraper