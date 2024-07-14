const Card = ({ user, handleRemoveBtn, userId }) => {
    const { name, email, image } = user;

    return (
        <div className="w-52 h-full rounded-lg p-2.5 bg-zinc-100 flex flex-col items-center">
            <div className="w-[5vw] h-[5vw] rounded-full bg-zinc-400 overflow-hidden">
                <img
                    src={image}
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <h1 className="mt-2 text-xl font-semibold">
                {name}
            </h1>

            <h4 className="opacity-70 text-xs font-semibold">
                {email}
            </h4>

            <p className="mt-2 text-center text-sm font-semibold leading-1 tracking-tight">
                Lorem ipsum is placeholder text commonly used in the graphic, print.
            </p>

            <button
                className="mt-4 px-2.5 py-1 bg-red-600 text-xs text-white rounded-md font-semibold"
                onClick={() => handleRemoveBtn(userId)}
            >
                Remove it
            </button>
        </div>
    )
}

export default Card;