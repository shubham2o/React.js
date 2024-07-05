const Random = () => {
    const data = ["Shubham", "Aman", "Stephen", "Virat"];

    return (
        <div className="bg-teal-600">
            {data.map((value, key) => (
                <div key={key}>
                    <h1>{value}</h1>
                    <p>{key + 1}</p>
                </div>
            ))}
        </div>
    )
}

export default Random;