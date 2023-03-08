import { FC, Suspense } from 'react'
import { CardComponent } from '../Types/StateTypes'

const Cards: FC<CardComponent> = ({ JobsList, FullCard, Card }): JSX.Element => {
    return (
        <>
            <Suspense fallback={<></>}>
                <div className={FullCard}>
                    {
                        JobsList.map((data: any, Key: any) => {
                            return (

                                <div key={Key} className={Card}>
                                    <div className='
                                                    '><img className='w-20 h-20 rounded md:w-20 md:h-20 lg:w-20 lg:h-20' src={"https://cdn.vox-cdn.com/thumbor/sW5h16et1R3au8ZLVjkcAbcXNi8=/0x0:3151x2048/2000x1333/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png"} /></div>
                                    <div className='ml-2 font-poppins p-0'>
                                        <h1 className=' text-3xl '>{data.jobTitle}</h1>
                                        <h2 className='text-bold text-2xl mt-1 '>{data.companyName}-{data.industry}</h2>
                                        <h2 className=' text-2xl mt-1 text-gray-600 '>{data.location}, TamilNadu , India ({data.remoteType})</h2>
                                        <h2 className='text-bold text-2xl mt-5 font-poppins'>Part-Time (9.00 am - 5.00 pm IST)</h2>
                                        <h2 className='text-bold text-2xl mt-2 '>Experience {`(${data.experienceMin} - ${data.experienceMax} years)`}</h2>
                                        <h2 className='text-bold text-2xl mt-2 '>INR (₹) {`${data.salaryMin.toLocaleString("en-US")} - ${data.salaryMax.toLocaleString("en-US")} / Month`}</h2>
                                        <h2 className='text-bold text-2xl mt-2 '>10 - {data.totalEmployee} employees</h2>

                                        <div className='flex'>
                                            {
                                                data.applyType === 1 ? <button className='bg-blue-500  text-2xl rounded w-full p-3 py-3 mt-4 text-white md:w-full lg:w-full'>
                                                    Apply now

                                                </button> :
                                                    <button className='text-blue-500 text-2xl w-max border-2 p-3 border-blue-500 mt-3 rounded bg-white py-3 md:w-full lg:w-full'>
                                                        External ApplySlate

                                                    </button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Suspense>
        </>
    )
}

export default Cards