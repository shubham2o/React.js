import { useEffect, useState } from "react";
import axios from "../utils/axios";

const About = () => {
    const [normalData, setNormalData] = useState("This contains Normal Data.");
    const [largeData, setLargeData] = useState("This contains Large Data.");

    const getUsers = () => {
        axios
            .get("/users")
            .then(users => console.log(users.data))
            .catch(err => console.log(err.message))
    }

    useEffect(() => {
        getUsers();
    }, [largeData]);

    return (
        <div className="p-10 underline underline-offset-8 leading-10 flex flex-col gap-12">
            <div className="border-dotted border-2 border-blue-900 p-5">
                <h1 className="pb-3">
                    {normalData}
                </h1>

                <button
                    className="rounded-2xl px-3 py-1.5 bg-blue-600 text-sm"
                    onClick={() => setNormalData("> Normal Data has been changed.")}
                >
                    Change
                </button>
            </div>

            <div className="border-dotted border-2 border-blue-900 p-5">
                <h1 className="pb-3">
                    {largeData}
                </h1>

                <button
                    className="rounded-2xl px-3 py-1.5 bg-blue-600 text-sm"
                    onClick={() => setLargeData("> Large Data has been changed.")}
                >
                    Change
                </button>
            </div>
        </div>
    )
}

export default About;