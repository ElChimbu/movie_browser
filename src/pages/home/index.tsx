import React from 'react';
import Navbar from '../../components/navbar/index';
import { Header } from './../../components/header/index';
import { Card } from '../../components/card/index';
import { ContainerCard } from './../../components/containerCard/index';
import Footer from '../../components/footer/index';

export const Home = () => {
return(<>
    <Header>
        <Navbar />
    </Header>
    <ContainerCard>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </ContainerCard>
    <Footer/>
    </>
)
}