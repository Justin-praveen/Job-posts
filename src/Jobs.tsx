import { Dialog, Transition } from '@headlessui/react'
import { Radio } from '@material-tailwind/react'
import { Fragment, Suspense, useCallback, useEffect, useState } from 'react'
import { JobsService } from './api-services/Axios'

const Jobs = (): JSX.Element => {

    // interface 

    interface CreateJobInterface {
        jobTitle: string,
        companyName: string,
        industry: string,
        location: string,
        remoteType: string,
        experienceMin: number,
        experienceMax: number,
        salaryMin: number,
        salaryMax: number,
        totalEmployee: number,
        applyType: number

    }
    const [FirstModal, setFirstModal] = useState<boolean>(false)
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

    const closeModal = (): void => {

        setFirstModal(false)
        setSecondModal(false)
    }

    const openModal = (): void => {
        setFirstModal(true)

    }

    const openModal2 = (): void => {
        setSecondModal(true)
        setFirstModal(false)
    }




    // FOR FETCH

    useEffect(() => {
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

    useEffect(() => {
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


    const Modal1 = useCallback((): JSX.Element => {
        if (FirstModal) {
            return (
                <Transition appear show={FirstModal} as={Fragment}>
                    <Dialog as="div" className="relative z-10 " onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-80" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-w-full min-h-full  items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full md:w-3/6 lg:w-3/6 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <div className='flex justify-between py-2'>
                                            <h1 className='text-3xl'>Create a job</h1>
                                            <h1 className='text-2xl'>Step 1</h1>
                                        </div>


                                        {/* Form */}

                                        <div>
                                            <form className='m-2' onSubmit={(e) => {
                                                e.stopPropagation()
                                                e.preventDefault()
                                                openModal2()
                                            }}>
                                                <div className='mb-4'>
                                                    <label className='block text-gray-800 text-base ' htmlFor="userName">
                                                        Job Titel*
                                                    </label>
                                                    <input required
                                                        onChange={(e) => {
                                                            setCreateJob((pre) => {
                                                                return {
                                                                    ...pre, jobTitle: e.target.value
                                                                }
                                                            })

                                                        }}
                                                        className=' required: appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"text"} id='userName' placeholder='ex : UX UI Designer' />
                                                </div>
                                                <div className='mb-4'>
                                                    <label className='block text-gray-700 text-base ' htmlFor="CompanyName">
                                                        Company name*
                                                    </label>
                                                    <input required
                                                        onChange={(e) => {
                                                            setCreateJob((pre) => {
                                                                return {
                                                                    ...pre, companyName: e.target.value
                                                                }
                                                            })

                                                        }}
                                                        className=' appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"text"} id='CompanyName' placeholder='ex :Google' />
                                                </div>
                                                <div className='mb-4'>
                                                    <label className='block text-gray-700 text-base ' htmlFor="Industry">
                                                        industry*
                                                    </label>
                                                    <input required
                                                        onChange={(e) => {
                                                            setCreateJob((pre) => {
                                                                return {
                                                                    ...pre, industry: e.target.value
                                                                }
                                                            })

                                                        }}
                                                        className=' appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"text"} id='Industry' placeholder='ex :Information Technology' />
                                                </div>
                                                {/* 2 */}
                                                <div className='grid grid-cols-2 gap-3'>
                                                    <div className=''>
                                                        <label className='block text-gray-700 text-base ' htmlFor="Location">
                                                            Location*
                                                        </label>
                                                        <input required
                                                            onChange={(e) => {
                                                                setCreateJob((pre) => {
                                                                    return {
                                                                        ...pre, location: e.target.value
                                                                    }
                                                                })

                                                            }}
                                                            className=' appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"text"} id='Location' placeholder='ex : Chennai' />
                                                    </div>
                                                    <div className=''>
                                                        <label className='block text-gray-700 text-base ' htmlFor="Remote">
                                                            Remote type
                                                        </label>
                                                        <input required
                                                            onChange={(e) => {
                                                                setCreateJob((pre) => {
                                                                    return {
                                                                        ...pre, remoteType: e.target.value
                                                                    }
                                                                })

                                                            }}
                                                            className=' appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"text"} id='Remote' placeholder='ex : in-office' />
                                                    </div>
                                                </div>
                                                {/* 2-end */}
                                                <div className='flex justify-end'>
                                                    <button className='bg-blue-500 hover:bg-blue-700 text-white  rounded mt-10 font-bold focus:outline-none focus:shadow-outline py-2 px-4'

                                                        type='submit'>Next</button>
                                                </div>
                                            </form>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            )
        } else {
            return (
                <></>
            )
        }


    }, [FirstModal])

    const Modal2 = useCallback((): JSX.Element => {
        if (SecondModal) {
            return (
                <Transition appear show={SecondModal} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-80" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-w-full min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full md:w-3/6 lg:w-3/6 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <div className='flex justify-between py-2'>
                                            <h1 className='text-3xl'>Create a job</h1>
                                            <h1 className='text-2xl'>Step 2</h1>
                                        </div>


                                        {/* Form */}

                                        <div >
                                            <form className='m-2' onSubmit={(e: React.FormEvent<HTMLElement>) => {
                                                e.preventDefault()
                                                setSubmit(true)
                                            }}>
                                                {/* 2 */}
                                                <div className='grid grid-cols-2 gap-3'>
                                                    <div className=''>
                                                        <label className='block text-gray-700 text-base ' htmlFor="experience">
                                                            Experience
                                                        </label>
                                                        <input required
                                                            onChange={(e) => {
                                                                setCreateJob((pre) => {
                                                                    return {
                                                                        ...pre, experienceMin: parseInt(e.target.value)
                                                                    }
                                                                })

                                                            }}
                                                            className=' appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"number"} id='experience' placeholder='Minimum' />
                                                    </div>
                                                    <div className='mt-6'>

                                                        <input required
                                                            onChange={(e) => {
                                                                console.log(e.target.value)
                                                                setCreateJob((pre) => {
                                                                    return {
                                                                        ...pre, experienceMax: parseInt(e.target.value)
                                                                    }
                                                                })

                                                            }}
                                                            className=' appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"number"} placeholder='Maximum' />
                                                    </div>
                                                </div>
                                                {/* 2-end */}
                                                {/* 2 */}
                                                <div className='grid grid-cols-2 gap-3'>
                                                    <div className=''>
                                                        <label className='block text-gray-700 text-base ' htmlFor="salary">
                                                            Salary
                                                        </label>
                                                        <input required
                                                            onChange={(e) => {
                                                                setCreateJob((pre) => {
                                                                    return {
                                                                        ...pre, salaryMin: parseInt(e.target.value)
                                                                    }
                                                                })

                                                            }}
                                                            className=' appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"number"} id='salary' placeholder='Minimum' />
                                                    </div>
                                                    <div className='mt-6'>

                                                        <input required
                                                            onChange={(e) => {
                                                                setCreateJob((pre) => {
                                                                    return {
                                                                        ...pre, salaryMax: parseInt(e.target.value)
                                                                    }
                                                                })

                                                            }}
                                                            className=' appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"number"} placeholder='Maximum' />
                                                    </div>
                                                </div>
                                                {/* 2-end */}
                                                <div className='mb-4'>
                                                    <label className='block text-gray-700 text-base' htmlFor="employee">
                                                        Total employee
                                                    </label>
                                                    <input
                                                        onChange={(e) => {
                                                            setCreateJob((pre) => {
                                                                return {
                                                                    ...pre, totalEmployee: parseInt(e.target.value)
                                                                }
                                                            })

                                                        }}
                                                        required className='appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"number"} id='employee' placeholder='ex : 100' />
                                                </div>
                                                {/* radio */}
                                                <label className='block text-gray-700 text-base ' htmlFor="employee">
                                                    Apply type
                                                </label>
                                                <div className="flex gap-3">

                                                    <Radio id="html"
                                                        onChange={() => {
                                                            setCreateJob((pre) => {
                                                                return {
                                                                    ...pre, applyType: 1
                                                                }
                                                            })

                                                        }}
                                                        name="type" label="Quick apply" />
                                                    <Radio id="react"
                                                        onChange={() => {
                                                            setCreateJob((pre) => {
                                                                return {
                                                                    ...pre, applyType: 2
                                                                }
                                                            })

                                                        }}
                                                        name="type" label="Externel apply" />
                                                </div>
                                                <div className='flex justify-end'>
                                                    <button className='bg-blue-500 hover:bg-blue-700 text-white  rounded mt-10 font-bold focus:outline-none focus:shadow-outline py-2 px-4'
                                                        type='submit'>Save</button>
                                                </div>
                                            </form>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            )
        } else {
            return (
                <></>
            )
        }

    }, [SecondModal])

    return (
        <>
            <div>
                <div className=" mt-10 inset-0 flex justify-center">
                    <button
                        type="button"
                        onClick={openModal}
                        className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                        + Create Job
                    </button>
                </div>

                <div>
                    <Suspense fallback={<></>}>
                        <div className='grid grid-cols-1 m-5 gap-5 h-full md:grid-cols-1  lg:grid-cols-2  '>
                            {
                                JobsList.map((data: any, Key: any) => {
                                    return (

                                        <div className='flex w-full  p-4 rounded-2xl md:w-full gap-3 bg-white'>
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
                </div>
            </div>
            <Modal1 />
            <Modal2 />
        </>
    )
}

export default Jobs