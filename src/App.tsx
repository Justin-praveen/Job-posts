import { FC, lazy } from 'react'
import './App.css'

const Jobs = lazy(() => import("./Jobs"))

const App: FC = (): JSX.Element => {

  return (
    <>
      <Jobs />
    </>

  )
}

export default App
