import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Forms = () => {
    const [data, setData] = useState(" ");
    const [name, setName] = useState({ fullName: "" });
    const { register, handleSubmit } = useForm();
    const [fName, setFName] = useState();

    const firstName = useRef(null);
    const lastName = useRef(null);
    let yourName;

    const handleSub = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form
                action=""
                className="py-14 font-bold text-center"
                onSubmit={handleSub}
            >
                <h1 className="mb-10 text-lime-400 underline text-2xl">
                    useRef()
                </h1>

                <input
                    type="text"
                    placeholder="First Name"
                    className="w-52 h-10 mx-4 mb-8 rounded-3xl px-4"
                    ref={firstName}
                />

                <input
                    type="text"
                    placeholder="Last Name"
                    className="w-52 h-10 mx-4 mb-8 rounded-3xl px-4"
                    ref={lastName}
                />

                <br />

                <input
                    type="submit"
                    className="w-24 h-9 mb-8 rounded-3xl bg-zinc-500 cursor-pointer"
                    onClick={() => setData(`${firstName.current.value} ${lastName.current.value}`)}
                />

                <div className="flex justify-center items-center">
                    <div className="w-72 h-10 flex justify-center items-center bg-lime-300">
                        {data}
                    </div>
                </div>
            </form>

            <form
                action=""
                className="py-14 font-bold text-center"
                onSubmit={handleSub}
            >
                <h1 className="mb-10 text-purple-400 underline text-2xl">
                    Controlled Components - useState()
                </h1>

                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-52 h-10 mx-4 mb-8 rounded-3xl px-4"
                    onChange={event => setName({ ...name, fullName: event.target.value })}
                />

                <div className="flex justify-center items-center">
                    <div className="w-72 h-10 flex justify-center items-center bg-purple-300">
                        {name.fullName}
                    </div>
                </div>
            </form>

            <form
                action=""
                className="py-14 font-bold text-center"
                onSubmit={handleSubmit(data => {
                    yourName = data.fullName;
                    return yourName;
                })}
            >
                <h1 className="mb-10 text-red-400 underline text-2xl">
                    React Hook Form - useForm()
                </h1>

                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-52 h-10 mx-4 mb-8 rounded-3xl px-4"
                    {...register('fullName')}
                />

                <br />

                <input
                    type="submit"
                    className="w-24 h-9 mb-8 rounded-3xl bg-zinc-500 cursor-pointer"
                    onClick={() => setFName(yourName)}
                />

                <div className="flex justify-center items-center">
                    <div className="w-72 h-10 flex justify-center items-center bg-red-300">
                        {fName}
                    </div>
                </div>
            </form>
        </div >
    )
}

export default Forms;
