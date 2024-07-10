const Button = ({ text, onClick, color }) => {
    return (
        <button
            className={`text-white mt-3 px-4 py-2 text-base rounded-full ${color}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;