import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Reduce = styled.div`
  background: #2C2C2C;
  color: white;
  flex-grow: 1;
  font-size: 5rem;
  border: white 0.1rem solid;
`

const Add = styled.div`
  background: #2C2C2C;
  color: white;
  flex-grow: 1;
  font-size: 5rem;
  border: white 0.1rem solid;
`

const Controller = () => {
  return (
    <Wrapper>
      <Reduce>－</Reduce>
      <Add>＋</Add>
    </Wrapper>
  )
}

export default Controller