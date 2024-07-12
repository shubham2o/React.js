const Nba = ({ values, handleClick, index }) => {
    const { name, position, image, friend } = values;

    return (
        <div className="w-52 bg-white rounded-xl overflow-hidden">
            <div className="w-full h-48 rounded-t-xl bg-blue-200">
                <img
                    className="w-full h-full object-cover object-top pt-2"
                    src={image}
                />
            </div>

            <div className="w-full h-full p-3">
                <h3 className="text-xl font-semibold">{name}</h3>

                <h5 className="text-sm">{position}</h5>

                <button
                    className={`mt-4 px-3 py-1 text-xs text-white font-semibold rounded-md ${friend ? "bg-red-600" : "bg-blue-600"}`}
                    onClick={() => handleClick(index)}
                >
                    {friend ? "Remove friend" : "Add friend"}
                </button>
            </div>
        </div>
    )
}

export default Nba;