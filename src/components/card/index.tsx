import React from 'react'
import Styled from 'styled-components'

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
`
export const Img = Styled.img`
  width: 230px;
  height: 330px
`
type ICard = {
genre?: string;
img?: string;
title?: string;
}

export const Card = ({genre, img, title} : ICard) =>{
return(
<>
  <CardStyles>
    <div className="absolute rounded-lg w-auto h-auto shadow-2xl bg-gray-800">
      <h3 className="text-sm m-3">{genre}</h3>
    </div>
    <div>
    <Img src={img}>
    </Img>
    </div>
    <div>
      <TitleContainer className="bg-blue-900 text-center w-auto h-12 p-2 ">
          <h2 className="text-lg font-semibold">{title}</h2>
      </TitleContainer>
    </div>
  </CardStyles>
</>
)
}