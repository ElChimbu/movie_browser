import React from 'react'
import Styled from 'styled-components'

const CardContainer = Styled.div`
margin-top: 10px;
margin-bottom: 10px;
margin-left: auto;
margin-right: auto;
background-color: #cfcfcf;
width: 19rem;
height: 300px;
border-radius: 10px;
padding: 10px;
color: white;
cursor: pointer;
`
const TitleContainer = Styled.div`
border-radius: 0px 0px 40px 40px;
`
export const Card = () =>{
return(
<>
  <CardContainer>
    <div className="absolute rounded-lg w-auto h-auto bg-gray-800">
      <h3 className="text-sm m-3">Genre</h3>
    </div>
    <div>
      <img src="https://placekitten.com/300/250" />
    </div>
    <div>
      <TitleContainer className="bg-blue-900 text-center w-auto h-12 p-2">
          <h2 className="text-lg font-semibold">THE MOVIE</h2>
      </TitleContainer>
    </div>
  </CardContainer>
</>
)
}