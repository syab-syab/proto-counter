import React from 'react'
import styled from 'styled-components'
import Controller from './Controller'

const Wrapper = styled.div`
  background: white;
  padding: 5rem 0 0 0;
`

const NumberWrapper = styled.div`
  margin: 4rem 0;
  display: flex;
  font-size: 4rem;
`

const NumberItem = styled.div`
  flex-grow: 1;
  background: #2C2C2C;
  color: white;
  border: white 0.1rem solid;

`

const BtnWrapper = styled.div`
  padding: 0;
  display: flex;
`

const LinkBtn = styled.div`
  background: #2C2C2C;
  flex-grow: 1;
  border: white 0.1rem solid;

`

const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.6rem;
`

const ResetBtn = styled.div`
  background: #2C2C2C;
  color: white;
  font-size: 1.6rem;
  flex-grow: 1;
  border: white 0.1rem solid;

`

const Main = () => {
  return (
    <Wrapper>
      <NumberWrapper>
        <NumberItem>0</NumberItem>
        <NumberItem>0</NumberItem>
        <NumberItem>0</NumberItem>
        <NumberItem>1</NumberItem>
      </NumberWrapper>
      <BtnWrapper>
        <LinkBtn>
          <Link>リンク</Link>
        </LinkBtn>
        <ResetBtn>
          リセット
        </ResetBtn>
      </BtnWrapper>
      <Controller />
    </Wrapper>
  )
}

export default Main