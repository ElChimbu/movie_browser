import React from 'react'
import Styled from 'styled-components'

type ICard = {
  lang: string
  img: string
  title: string
}

const CardStyles = Styled.div`
  margin: 20px;
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

const Img = Styled.img`
  width: 230px;
  height: 330px
`

export function Card({ lang, img, title }: ICard) {
  return (
    <CardStyles>
      <div className="truncate absolute rounded-lg w-auto h-auto shadow-2xl bg-gray-800">
        <h3 className="text-sm m-3">{lang.toUpperCase()}</h3>
      </div>
      <div>
        <Img src={`https://image.tmdb.org/t/p/w500/${img}`}></Img>
      </div>
      <div>
        <TitleContainer>
          <h2 className="p-3 truncate text-sm font-semibold">{title}</h2>
        </TitleContainer>
      </div>
    </CardStyles>
  )
}
