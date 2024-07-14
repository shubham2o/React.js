const Form = () => {
    return (
        <div className="mt-10 flex flex-col items-center gap-10 text-center">
            <form
                action=""
                className="lg:flex gap-5 justify-center items-center"
            >
                <div className="w-full">
                    <input
                        type="text"
                        className="w-72 mx-5 my-5 rounded-md p-2 text-sm font-bold outline-none"
                        placeholder="Name"
                    />

                    <input
                        type="text"
                        className="w-72 mx-5 my-5 rounded-md p-2 text-sm font-bold outline-none"
                        placeholder="Email"
                    />

                    <input
                        type="text"
                        className="w-72 mx-5 my-5 rounded-md p-2 text-sm font-bold outline-none"
                        placeholder="Image URL"
                    />
                </div>

                <div>
                    <input
                        type="submit"
                        className="my-5 rounded-md px-5 py-1.5 bg-blue-500 text-white font-semibold cursor-pointer"
                    />
                </div>
            </form>
        </div>
    )
}

export default Form;