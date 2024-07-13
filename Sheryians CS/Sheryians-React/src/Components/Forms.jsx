import { useRef, useState } from "react";

const Forms = () => {
    const [data, setData] = useState(" ");
    const [name, setName] = useState({ fullName: "" });

    const firstName = useRef(null);
    const lastName = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form
                action=""
                className="py-14 font-bold text-center"
                onSubmit={handleSubmit}
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
                onSubmit={handleSubmit}
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
        </div>
    )
}

export default Forms;
