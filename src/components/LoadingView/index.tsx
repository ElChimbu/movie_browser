import React from 'react'
import Styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'

const ProgressContainer = Styled.div`
    width: 75%;
    height: 400px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export function LoadingView() {
  return (
    <ProgressContainer>
      <CircularProgress />
    </ProgressContainer>
  )
}
