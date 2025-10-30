import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil'
import { countAtom } from './store/atoms/count'

function App() {
  return (
    <RecoilRoot>
      <div>
        <Count />
      </div>
    </RecoilRoot>
  )
}

function Count() {
  return (
    <div>
      <CountRender />
      <Button />
    </div>
  )
}

function CountRender() {
  const count = useRecoilValue(countAtom)
  return (
    <div>
      <b>{count}</b>
    </div>
  )
}

function Button() {
  const [count, setCount] = useRecoilState(countAtom)

  return (
    <div>
      {count % 2 === 0 && <p>it is Even</p>}
      {count % 2 !== 0 && <p>it is Odd</p>}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default App
