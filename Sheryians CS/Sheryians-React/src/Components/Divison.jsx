const Division = ({ content, bgColor }) => {
    return (
        <div className={`mb-10 p-4 rounded-3xl ${bgColor}`}>
            {content}
        </div>
    )
}

export default Division;