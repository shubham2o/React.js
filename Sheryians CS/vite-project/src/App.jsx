import React from 'react';

function App() {
    const data = ["Shubham", "Sharma", 23, "Delhi"];

    return (
        <div
            className="bg-white text-2xl text-red-500"
        >
            {data.map((value, index) => (
                <h1
                    key={index}
                    className="border-b-[3px] border-amber-300"
                >
                    {value}
                </h1>
            ))}
        </div>
    )
}

export default App;
