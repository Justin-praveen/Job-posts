import { Dialog, Transition } from '@headlessui/react'
import { Radio } from '@material-tailwind/react'
import { Fragment, Suspense, useCallback, useEffect, useState } from 'react'
import { JobsService } from './api-services/Axios'

const Jobs = (): JSX.Element => {
    const [FirstModal, setFirstModal] = useState(false)
    const [SecondModal, setSecondModal] = useState(false)
    const [JobsList, setJobsList] = useState([])


    function closeModal() {

        setFirstModal(false)
        setSecondModal(false)
    }

    function openModal() {
        setFirstModal(true)

    }

    const openModal2 = () => {
        setSecondModal(true)
        setFirstModal(false)
    }


    useEffect(() => {
        (
            async function () {
                const { data } = await JobsService.JobsList()
                setJobsList(data)
            }
        )()

    }, [])


    const Modal1 = useCallback((): JSX.Element => {
        if (FirstModal) {
            return (
                <Transition appear show={FirstModal} as={Fragment}>
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
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <div className='flex justify-between py-2'>
                                            <h1 className='text-3xl'>Create a job</h1>
                                            <h1 className='text-2xl'>Step 1</h1>
                                        </div>


                                        {/* Form */}

                                        <div className='w-full max-w-sm'>
                                            <form className='m-2'>
                                                <div className='mb-4'>
                                                    <label className='block text-gray-700 text-base ' htmlFor="userName">
                                                        Job Titel
                                                    </label>
                                                    <input className=' required: appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"text"} id='userName' placeholder='ex : UX UI Designer' />
                                                </div>
                                                <div className='mb-4'>
                                                    <label className='block text-gray-700 text-base ' htmlFor="userName">
                                                        Job Titel
                                                    </label>
                                                    <input className=' appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"text"} id='userName' placeholder='ex : UX UI Designer' />
                                                </div>
                                                <div className='mb-4'>
                                                    <label className='block text-gray-700 text-base ' htmlFor="userName">
                                                        Job Titel
                                                    </label>
                                                    <input className=' appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"text"} id='userName' placeholder='ex : UX UI Designer' />
                                                </div>
                                                {/* 2 */}
                                                <div className='flex justify-evenly gap-3'>
                                                    <div className=''>
                                                        <label className='block text-gray-700 text-base ' htmlFor="userName">
                                                            Job Titel
                                                        </label>
                                                        <input className=' appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"text"} id='userName' placeholder='ex : UX UI Designer' />
                                                    </div>
                                                    <div className=''>
                                                        <label className='block text-gray-700 text-base ' htmlFor="userName">
                                                            Job Titel
                                                        </label>
                                                        <input className=' appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"text"} id='userName' placeholder='ex : UX UI Designer' />
                                                    </div>
                                                </div>
                                                {/* 2-end */}
                                                <div className='flex justify-end'>
                                                    <button className='bg-blue-500 hover:bg-blue-700 text-white  rounded mt-10 font-bold focus:outline-none focus:shadow-outline py-2 px-4'
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            e.preventDefault()
                                                            openModal2()

                                                        }}
                                                        type='submit'>Next</button>
                                                </div>
                                            </form>
                                        </div>

                                        {/* Form-end */}
                                        {/* <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Your payment has been successfully submitted. We’ve sent
                                            you an email with all of the details of your order.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div> */}
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
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                                    <Dialog.Panel className="w-98 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <div className='flex justify-between py-2'>
                                            <h1 className='text-3xl'>Create a job</h1>
                                            <h1 className='text-2xl'>Step 2</h1>
                                        </div>


                                        {/* Form */}

                                        <div className='w-full max-w-sm'>
                                            <form className='m-2'>
                                                {/* 2 */}
                                                <div className='flex justify-evenly gap-3'>
                                                    <div className=''>
                                                        <label className='block text-gray-700 text-base ' htmlFor="userName">
                                                            Job Titel2
                                                        </label>
                                                        <input className=' appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"text"} id='userName' placeholder='ex : UX UI Designer' />
                                                    </div>
                                                    <div className=''>
                                                        <label className='block text-gray-700 text-base ' htmlFor="userName">
                                                            Job Titel
                                                        </label>
                                                        <input className=' appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"text"} id='userName' placeholder='ex : UX UI Designer' />
                                                    </div>
                                                </div>
                                                {/* 2-end */}
                                                {/* 2 */}
                                                <div className='flex justify-evenly gap-3'>
                                                    <div className=''>
                                                        <label className='block text-gray-700 text-base ' htmlFor="userName">
                                                            Job Titel2
                                                        </label>
                                                        <input className=' appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"text"} id='userName' placeholder='ex : UX UI Designer' />
                                                    </div>
                                                    <div className=''>
                                                        <label className='block text-gray-700 text-base ' htmlFor="userName">
                                                            Job Titel
                                                        </label>
                                                        <input className=' appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"text"} id='userName' placeholder='ex : UX UI Designer' />
                                                    </div>
                                                </div>
                                                {/* 2-end */}
                                                <div className='mb-4'>
                                                    <label className='block text-gray-700 text-base ' htmlFor="userName">
                                                        Job Titel2
                                                    </label>
                                                    <input className=' required: appearance-none border rounded w-full py-3 m-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type={"text"} id='userName' placeholder='ex : UX UI Designer' />
                                                </div>
                                                {/* radio */}
                                                <div className="flex gap-3">
                                                    <Radio id="html" name="type" label="Quick apply" />
                                                    <Radio id="react" name="type" label="Externel apply" />
                                                </div>
                                                <div className='flex justify-end'>
                                                    <button className='bg-blue-500 hover:bg-blue-700 text-white  rounded mt-10 font-bold focus:outline-none focus:shadow-outline py-2 px-4'
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            e.preventDefault()

                                                        }}
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
                        <div className='grid grid-cols-2 m-7 gap-4 h-full  '>
                            {
                                JobsList.map((data: any, Key: any) => {
                                    return (

                                        <div className='bg-white grid grid-flow-col-dense grid-cols-2 t p-5 rounded'>

                                            <div className='flex w-max'>

                                                <div className='
                                                    '><img className='w-20 h-20 rounded' src={"https://cdn.vox-cdn.com/thumbor/sW5h16et1R3au8ZLVjkcAbcXNi8=/0x0:3151x2048/2000x1333/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png"} /></div>
                                                <div className=' ml-2'>
                                                    <h1 className=' text-4xl '>{data.jobTitle}</h1>
                                                    <h2 className='text-bold text-2xl mt-1'>{data.companyName}-{data.industry}</h2>
                                                    <h2 className=' text-2xl mt-2'>{data.location} TamilNadu , India(in-office)</h2>

                                                    <h2 className='text-bold text-2xl mt-5'>{data.remoteType} (9.00 am - 5.00 pm IST)</h2>
                                                    <h2 className='text-bold text-2xl mt-2'>Experience{`${data.experienceMix} - ${data.experienceMax} years`}</h2>
                                                    <h2 className='text-bold text-2xl mt-2'>INR ($){`${data.salaryMin} - ${data.salaryMax} /Month`}</h2>
                                                    <h2 className='text-bold text-2xl mt-2'>{data.totalEmployee} employees</h2>


                                                    <div className='flex'>
                                                        {
                                                            data.applyType === 1 ? <button className='bg-blue-500  text-2xl rounded w-full py-3 mt-4 text-white'>
                                                                Apply now

                                                            </button> :
                                                                <button className='text-blue-500 text-2xl w-full border-2  border-blue-500 mt-3 rounded bg-white py-3'>
                                                                    External Apply

                                                                </button>
                                                        }

                                                    </div>

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