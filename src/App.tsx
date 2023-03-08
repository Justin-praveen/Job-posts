import { FC, lazy } from 'react'
import './App.css'
import Button from './Component/Button'
import Cards from './Component/Cards'
import FirstStep from './Component/Form'

const Jobs = lazy(() => import("./Jobs"))

const App: FC = (): JSX.Element => {

  return (
    <>
      <Jobs
        Form={FirstStep}
        Button={Button}
        Cards={Cards}
      />
    </>

  )
}

export default App
