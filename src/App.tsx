import { FC, lazy } from 'react';
import './App.css';
const Home = lazy(() => import("./Component/Home"));
const Button = lazy(() => import('./Component/Button'));
const Cards = lazy(() => import('./Component/Cards'));
const Form = lazy(() => import('./Component/Form'));

const App: FC = (): JSX.Element => {

  return (
    <>
      <Home
        Form={Form}
        Button={Button}
        Cards={Cards}
        FullCard={"grid grid-cols-1 mt-10 w-fit gap-3 h-full md:grid-cols-1 md:w-max md:m-3 lg:grid-cols-2 lg:gap-5 lg:w-max"}
        Card={"flex w-full h-fit p-4 rounded-[10px] md:w-[830px] h-[320px] gap-2 bg-white"}
        CardContent={"font-poppins "}
        QuickApplyButton={"bg-blue  text-[16px] rounded w-full  h-[40px] mt-4 text-white md:w-full lg:w-full"}
        ExternelApplyButton={"text-blue text-[16px] w-full border-2  border-blue mt-3 rounded bg-white  h-[40px] md:w-full lg:w-full"}
        CardImage={"w-[48px] h-[48px] rounded md:w-[48px] md:h-[48px] lg:w-[48px] lg:h-[48px]"}
        CardContentTitle={"text-[24px]"}
        CardContent1={"text-bold text-[16px] mt-1"}
        CardContent2={"text-[16px] mt-1 text-gray-600 "}
        CardContent3={"text-bold text-[16px] mt-[24px] font-poppins"}
        CardContent4={"text-bold text-[16px] mt-[8px] "}
        CardContent5={"text-bold text-[16px] mt-[8px]"}
        CardContent6={"text-bold text-[16px] mt-[8px] "}

      />
    </>
  )
}

export default App
