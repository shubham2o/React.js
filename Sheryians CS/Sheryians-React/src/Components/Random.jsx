import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Random = () => {
    const data = ["Shubham", "Aman", "Stephen", "Virat"];
    const [score, setScore] = useState(100);
    const [val, setVal] = useState({ name: "Shubham", isBanned: false });
    const [item, setItem] = useState({ name: "Lebron", number: 23 });
    const [num, setNum] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    const [rem, setRem] = useState([100, 200, 300, 400, 500, 600]);
    const [divByTwo, setDivByTwo] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [addInArr, setAddInArr] = useState([1, 2, 3, 4, 5, 6]);
    const [info, setInfo] = useState([
        { name: "Aman", number: 6 },
        { name: "Klay", number: 11 },
        { name: "Michael", number: 23 },
    ]);
    const [img, setImg] = useState(false);

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
                    className={`text-white mt-3 px-4 py-2 text-base rounded-full ${val.isBanned ? "bg-blue-700" : "bg-red-700"}`}
                    onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
                >
                    Click to Change
                </button>
            </div>

            <div className="bg-amber-400 mb-10 p-4 rounded-3xl">
                <h1>{`${item.name} : ${item.number} ${item.team ? `: ${item.team}` : ""}`}</h1>
                <button
                    className="bg-zinc-700 text-white mt-3 px-4 py-2 text-base rounded-full"
                    onClick={() => setItem({ ...item, team: "Los Angeles Lakers" })}
                >
                    Click to add
                </button>
            </div>

            <div className="bg-lime-400 mb-10 p-4 rounded-3xl">
                <h1>{`${num}`}</h1>

                <button
                    className="bg-zinc-700 text-white mt-3 px-4 py-2 text-base rounded-full"
                    onClick={() => setNum(prev => prev.filter((value, index) => index !== prev.length - 1))}
                >
                    Remove from last
                </button>
            </div>

            <div className="bg-cyan-300 mb-10 p-4 rounded-3xl">
                {rem.map((value, index) => (
                    <h1 key={index}>{value}</h1>
                ))}

                <button
                    className="bg-zinc-700 text-white mt-3 px-4 py-2 text-base rounded-full"
                    onClick={() => setRem(prev => {
                        return prev.filter((value, index) => index !== 2)
                    })}
                >
                    Remove from middle
                </button>
            </div>

            <div className="bg-teal-500 mb-10 p-4 rounded-3xl">
                <h1>{`${divByTwo}`}</h1>

                <button
                    className="bg-zinc-700 text-white mt-3 px-4 py-2 text-base rounded-full"
                    onClick={() => setDivByTwo(prev => prev.filter(value => value % 2 !== 0))}
                >
                    Remove even numbers
                </button>
            </div>

            <div className="bg-purple-400 mb-10 p-4 rounded-3xl">
                <h1>{`${addInArr}`}</h1>

                <button
                    className="bg-zinc-700 text-white mt-3 px-4 py-2 text-base rounded-full"
                    onClick={() => setAddInArr([...addInArr, Math.floor(Math.random() * 10) + 1])}
                >
                    Add in last
                </button>
            </div>

            <div className="bg-red-400 mb-10 p-4 rounded-3xl">
                {info.map((value, index) => (
                    <h1 key={index}>{value.name} : {value.number}</h1>
                ))}

                <button
                    className="bg-zinc-700 text-white mt-3 px-4 py-2 text-base rounded-full"
                    onClick={() =>
                        setInfo(prev =>
                            prev.map(value =>
                                value.number === 11 ? { ...value, number: 31 } : value
                            )
                        )
                    }
                >
                    Update value
                </button>
            </div>

            <div className="bg-amber-400 mb-10 p-4 rounded-3xl flex justify-center items-center">
                <div className="relative w-60 h-32 bg-zinc-700 rounded-xl flex overflow-hidden">
                    <img
                        className={`w-full h-full object-cover shrink-0 transition-transform duration-1000 ease-in-out ${!img ? '-translate-x-[0%]' : '-translate-x-[100%]'}`}
                        src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                    />

                    <img
                        className={`w-full h-full object-cover shrink-0 transition-transform duration-1000 ease-in-out ${img ? '-translate-x-[100%]' : '-translate-x-[0%]'}`}
                        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww"
                    />

                    <button
                        className="bg-[#dadada8b] rounded-full w-9 h-9 bottom-[0%] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center items-center"
                        onClick={() => setImg(prev => !prev)}
                    >
                        <FaArrowRightLong size={"1em"} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Random;