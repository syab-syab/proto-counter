import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  background: #2C2C2C;
  padding: 1.5rem 0
`

const Title = styled.p`
  color: white;
  font-size: 3.6rem;
  padding: 0;
  margin: 0;
`

const Header = () => {
  return (
    <Wrapper>
      <Title>TDNカウンター</Title>
    </Wrapper>
  )
}

export default Header