import React from 'react'
import styled from 'styled-components'
import Controller from './Controller'
import { useState } from 'react'
import { localSetItem, localGetItem } from '../functions/localStorageFunc'

const backgroundStyle: string = `
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(85, 85, 85, 1));
`

const Wrapper = styled.main`
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
  const localCountKey: string = "local-count-key"

  const localCountValue: string = localGetItem(localCountKey)


  const [count, setCount]
    = useState<number>(!!localCountValue===false ? 0 : Number(localCountValue))

  const addCount = ():void => {
    if (count < 9999) {
      setCount(count+1)
      localSetItem(localCountKey, String(count+1))
    } else {
      alert("もう無理")
    }
    
  }

  const reduceCount = ():void => {
    // >=にしたいけど挙動がおかしくなる
    if(count > 0) {
      setCount(count-1)
      localSetItem(localCountKey, String(count-1))
    } else {
      setCount(0)
      localSetItem(localCountKey, "0")
    }
  }

  const copyCount = (): void => {
    navigator.clipboard.writeText(count.toString())
  }

  const resetCount = ():void => {
    setCount(0)
    localSetItem(localCountKey, "0")
  }

  const countArr:Array<string> = count.toString().padStart(4, '0').split('')

  return (
    <Wrapper>
      <NumberWrapper>
        {
          countArr.map((c, i) => {
            return (
              <NumberItem key={i}>{c}</NumberItem>      
            )
          })
        }
      </NumberWrapper>
      <BtnWrapper>
        <Btn>
          <Link href='https://homemade-apps.vercel.app/' target='_blank'>リンク</Link>
        </Btn>
        <Btn onClick={copyCount}>
          コピー
        </Btn>
        <Btn onClick={resetCount}>
          リセット
        </Btn>
      </BtnWrapper>
      <Controller AddNum={addCount} ReduceNum={reduceCount} />
    </Wrapper>
  )
}

export default Main