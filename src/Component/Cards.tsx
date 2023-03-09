import { FC, Suspense } from 'react'
import { CardComponent } from '../Types/StateTypes'

const Cards: FC<CardComponent> = (Props): JSX.Element => {

    const { JobsList,
        FullCard,
        Card,
        CardContent,
        CardImage,
        ExternelApplyButton,
        QuickApplyButton,
        CardContent1,
        CardContent2,
        CardContent3,
        CardContent4,
        CardContent5,
        CardContent6,
        CardContentTitle
    } = Props
    return (
        <>

            <div className={FullCard}>
                <Suspense fallback={<>Loading....!</>}>
                    {
                        JobsList.map((data: any, Key: any) => {
                            return (

                                <div key={Key} className={Card}>
                                    <div className='
                                                    '><img className={CardImage} src={"https://cdn.vox-cdn.com/thumbor/sW5h16et1R3au8ZLVjkcAbcXNi8=/0x0:3151x2048/2000x1333/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png"} /></div>
                                    <div className={CardContent}>
                                        <h1 className={CardContentTitle}>{data.jobTitle}</h1>
                                        <h2 className={CardContent1}>{data.companyName}-{data.industry}</h2>
                                        <h2 className={CardContent2}>{data.location}, TamilNadu , India ({data.remoteType})</h2>
                                        <h2 className={CardContent3}>Part-Time (9.00 am - 5.00 pm IST)</h2>
                                        <h2 className={CardContent4}>Experience {`(${data.experienceMin} - ${data.experienceMax} years)`}</h2>
                                        <h2 className={CardContent5}>INR (₹) {`${data.salaryMin.toLocaleString("en-US")} - ${data.salaryMax.toLocaleString("en-US")} / Month`}</h2>
                                        <h2 className={CardContent6}>10 - {data.totalEmployee} employees</h2>

                                        <div className='flex'>
                                            {
                                                data.applyType === 1 ? <button className={QuickApplyButton}>
                                                    Apply now

                                                </button> :
                                                    <button className={ExternelApplyButton}>
                                                        External ApplySlate
                                                    </button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Suspense>

            </div>

        </>
    )
}

export default Cards