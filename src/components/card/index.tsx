import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardStyles = Styled.div`
margin-top: 10px;
margin-bottom: 10px;
background-color: #dedede;
width: auto;
height: auto;
border-radius: 10px;
padding: 10px;
color: white;
cursor: pointer;
`
const TitleContainer = Styled.div`
border-radius: 0px 0px 40px 40px;
background-color: #2a4365;
text-align: center;
height: 3rem;
width: 230px;
`
export const Img = Styled.img`
width: 230px;
height: 330px
`
type ICard = {
genre: string;
img: string;
title: string;
id: string;
}

export const Card = ({id, genre, img, title} : ICard) =>{
return(
<Link to={`movies/${id}`}>
<CardStyles>
  <div className="truncate absolute rounded-lg w-auto h-auto shadow-2xl bg-gray-800">
    <h3 className="text-sm m-3">{genre}</h3>
  </div>
  <div>
    <Img src={img}>
    </Img>
  </div>
  <div>
    <TitleContainer>
      <h2 className="p-3 truncate text-sm font-semibold">{title}</h2>
    </TitleContainer>
  </div>
</CardStyles>
</Link>)
}