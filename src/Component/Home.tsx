
import { FC, useEffect, useState } from 'react'
import { JobsService } from '../api-services/Axios'
import { CreateJobInterface, HomeComponents } from '../Types/StateTypes'

const Home: FC<HomeComponents> = ({ Form, Button, Cards, FullCard, Card }) => {


    // States For Declaring 

    const [FirstModal, setFirstModal] = useState<boolean>(false)
    const [FirstModalActive, setFirstModalActive] = useState<boolean>(false)
    const [SecondModal, setSecondModal] = useState<boolean>(false)
    const [JobsList, setJobsList] = useState<object[]>([])
    const [submit, setSubmit] = useState<boolean>(false)
    const [CreateJob, setCreateJob] = useState<CreateJobInterface>({
        jobTitle: "",
        companyName: "",
        industry: "",
        location: "",
        remoteType: "",
        experienceMin: 0,
        experienceMax: 0,
        salaryMin: 0,
        salaryMax: 0,
        totalEmployee: 0,
        applyType: 0
    })

    // For Executing Operations

    const closeModal = (): void => {
        setFirstModal(false)
        setSecondModal(false)
    }

    const openModal = (): void => {
        setFirstModal(true)
        setFirstModalActive(true)

    }

    const openModal2 = (): void => {
        setFirstModalActive(false)
        setSecondModal(true)
    }


    // FOR FETCH

    useEffect((): void => {
        (
            async function () {
                try {
                    const { data } = await JobsService.JobsList()
                    setJobsList(data)
                } catch (err) {
                    console.log(err)
                }
            }
        )()

    }, [])

    // FOR POST

    useEffect((): void => {
        if (submit) {
            JobsService.JobsCreate(CreateJob).then(() => {
                setSubmit(false)
                closeModal()
                window.location.reload()

            }).catch((err) => {
                console.log(err)
            })
            setSubmit(false)
            closeModal()
        }


    }, [submit])

    return (
        <>
            <Button openModal={openModal} />
            <Cards JobsList={JobsList} FullCard={FullCard} Card={Card} />
            <Form FirstModal={FirstModal}
                FirstModalActive={FirstModalActive}
                closeModal={closeModal}
                openModal2={openModal2} setCreateJob={setCreateJob}
                SecondModal={SecondModal}
                setSubmit={setSubmit} />
        </>
    )
}

export default Home