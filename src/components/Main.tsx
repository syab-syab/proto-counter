import React from 'react'
import styled from 'styled-components'
import Controller from './Controller'

const backgroundStyle: string = `
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(85, 85, 85, 1));
`

const Wrapper = styled.div`
  ${backgroundStyle}
  padding: 5rem;
  height: 90vh;

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

const Btn = styled.div`
  background: #2C2C2C;
  color: white;
  font-size: 1.6rem;
  flex-grow: 1;
  border: white 0.1rem solid;
  padding: 1rem 0;
`

const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.6rem;
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
        <Btn>
          <Link>リンク</Link>
        </Btn>
        <Btn>
          コピー
        </Btn>
        <Btn>
          リセット
        </Btn>
      </BtnWrapper>
      <Controller />
    </Wrapper>
  )
}

export default Main