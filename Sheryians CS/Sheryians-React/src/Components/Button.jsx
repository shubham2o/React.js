const Button = ({ text, onClick }) => {
    return (
        <button
            className="bg-zinc-700 text-white mt-3 px-4 py-2 text-base rounded-full"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;