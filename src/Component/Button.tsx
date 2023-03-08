import { FC } from 'react'

const Button: FC<{ openModal: React.FunctionComponent }> = ({ openModal }) => {
    return (
        <div className=" mt-10 inset-0 flex justify-center">
            <button
                type="button"
                onClick={openModal}
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
                + Create Job
            </button>
        </div>

    )
}

export default Button