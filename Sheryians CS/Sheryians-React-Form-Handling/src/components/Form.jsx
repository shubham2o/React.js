import { useForm } from "react-hook-form";

const Form = ({ handleFormSubmitData }) => {
    const { register, handleSubmit, reset } = useForm();

    const handleFormSubmit = (data) => {
        handleFormSubmitData(data);
        reset();
    }

    return (
        <div className="mt-10 flex flex-col items-center gap-10 text-center">
            <form
                action=""
                className="lg:flex gap-5 justify-center items-center"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <div className="w-full">
                    <input
                        type="text"
                        className="w-72 mx-5 my-5 rounded-md p-2 pl-3 text-sm font-bold outline-none"
                        placeholder="Name"
                        {...register('name')}
                    />

                    <input
                        type="text"
                        className="w-72 mx-5 my-5 rounded-md p-2 pl-3 text-sm font-bold outline-none"
                        placeholder="Email"
                        {...register('email')}
                    />

                    <input
                        type="text"
                        className="w-72 mx-5 my-5 rounded-md p-2 pl-3 text-sm font-bold outline-none"
                        placeholder="Image URL"
                        {...register('image')}
                    />
                </div>

                <div>
                    <input
                        type="submit"
                        className="my-5 rounded-md px-4 py-2 bg-blue-500 text-white font-semibold cursor-pointer"
                    />
                </div>
            </form>
        </div>
    )
}

export default Form;