import { useState } from "react";

const Random = () => {
    const data = ["Shubham", "Aman", "Stephen", "Virat"];
    const [score, setScore] = useState(100);
    const [val, setVal] = useState({ name: "Shubham", isBanned: false });

    return (
        <div className="text-lg font-bold bg-zinc-700 p-4">
            <div className="bg-teal-500 mb-10 p-4 rounded-3xl">
                {data.map((value, key) => (
                    <div key={key}>
                        <h1>{value}</h1>
                        <p>{key + 1}</p>
                    </div>
                ))}
            </div>

            <div className="bg-purple-400 mb-10 p-4 rounded-3xl">
                <h1>{score}</h1>
                <button
                    className="bg-zinc-700 text-white mt-3 px-4 py-2 text-base rounded-full"
                    onClick={() => setScore(prev => prev + 1)}
                >
                    Add + 1
                </button>
            </div>

            <div className="bg-red-400 mb-10 p-4 rounded-3xl">
                <h1>{val.name} : {val.isBanned.toString()}</h1>
                <button
                    className="bg-zinc-700 text-white mt-3 px-4 py-2 text-base rounded-full"
                    onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
                >
                    Change
                </button>
            </div>
        </div>
    )
}

export default Random;