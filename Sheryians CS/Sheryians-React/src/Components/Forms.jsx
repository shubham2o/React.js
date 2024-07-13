import { useRef, useState } from "react";

const Forms = () => {
    const firstName = useRef(null);
    const lastName = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const [data, setData] = useState(" ");

    return (
        <div>
            <form
                action=""
                className="pt-20 pb-20 font-bold text-center"
                onSubmit={handleSubmit}
            >
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
                    <div className="w-72 h-10 flex justify-center items-center bg-green-300">
                        {data}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Forms;
