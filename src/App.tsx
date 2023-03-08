import { FC, lazy } from 'react'
import './App.css';
const Home = lazy(() => import("./Component/Home"))
const Button = lazy(() => import('./Component/Button'))
const Cards = lazy(() => import('./Component/Cards'))
const Form = lazy(() => import('./Component/Form'))

const App: FC = (): JSX.Element => {

  return (
    <>
      <Home
        Form={Form}
        Button={Button}
        Cards={Cards}
        FullCard={"grid grid-cols-1 m-5 gap-5 h-full md:grid-cols-1  lg:grid-cols-2"}
        Card={"flex w-full  p-4 rounded-2xl md:w-full gap-3 bg-white"}
      />
    </>
  )
}

export default App
