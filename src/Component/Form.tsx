
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useCallback, FC } from 'react';
import { Radio } from '@material-tailwind/react';
import { FormComponent } from '../Types/StateTypes';


const FirstStep: FC<FormComponent> = ({ FirstModal, closeModal, openModal2, setCreateJob, SecondModal, setSubmit, FirstModalActive }) => {

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
                                    <Dialog.Panel className="w-[577px] h-[564px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                        {FirstModalActive && <div>
                                            <div className='flex justify-between py-2'>
                                                <h1 className='text-3xl'>Create a job</h1>
                                                <h1 className='text-2xl'>Step 1</h1>
                                            </div>
                                            {/* Form-1 */}
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
                                                                setCreateJob((pre: any) => {
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
                                                                setCreateJob((pre: any) => {
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
                                                                setCreateJob((pre: any) => {
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
                                                                    setCreateJob((pre: any) => {
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
                                                                    setCreateJob((pre: any) => {
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
                                                        <button className='bg-blue hover:bg-blue-700 text-white  rounded mt-10 font-bold focus:outline-none focus:shadow-outline py-2 px-4'

                                                            type='submit'>Next</button>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>}

                                        {
                                            SecondModal && <div>

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
                                                                        setCreateJob((pre: any) => {
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
                                                                        setCreateJob((pre: any) => {
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
                                                                        setCreateJob((pre: any) => {
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
                                                                        setCreateJob((pre: any) => {
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
                                                                    setCreateJob((pre: any) => {
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
                                                                    setCreateJob((pre: any) => {
                                                                        return {
                                                                            ...pre, applyType: 1
                                                                        }
                                                                    })

                                                                }}
                                                                name="type" label="Quick apply" />
                                                            <Radio id="react"
                                                                onChange={() => {
                                                                    setCreateJob((pre: any) => {
                                                                        return {
                                                                            ...pre, applyType: 2
                                                                        }
                                                                    })

                                                                }}
                                                                name="type" label="Externel apply" />
                                                        </div>
                                                        <div className='flex justify-end'>
                                                            <button className='bg-blue hover:bg-blue-700 text-white  rounded mt-10 font-bold focus:outline-none focus:shadow-outline py-2 px-4'
                                                                type='submit'>Save</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                        }
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


    }, [FirstModal, FirstModalActive])
    return (
        <Modal1 />
    )
}

export default FirstStep