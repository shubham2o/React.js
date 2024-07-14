import Card from "./Card";

const Cards = ({ users, handleRemove }) => {
    return (
        <div className="w-full min-h-96 max-h-96 overflow-auto rounded-lg p-4 flex justify-center items-center flex-wrap gap-4">
            {users.map((item, index) => {
                return (
                    <Card
                        key={index}
                        user={item}
                        handleRemoveBtn={handleRemove}
                        userId={index}
                    />
                )
            })}
        </div>
    )
}

export default Cards;