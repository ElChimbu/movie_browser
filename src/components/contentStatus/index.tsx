import React from 'react';
import Styled from 'styled-components';

const TitleContainer = Styled.div`
font-size: 0.875rem;
text-align: center;
width: auto;
height: auto;
background-color: #742a2a;
color: white;
border-radius: 15px 15px 0px 0px;
`

export const ContentStatus = () =>{
    return(
        <div className="flex justify-center">
        <TitleContainer>
            <p className=" m-2">Latest tendencies</p>
        </TitleContainer>
        </div>
    )
}