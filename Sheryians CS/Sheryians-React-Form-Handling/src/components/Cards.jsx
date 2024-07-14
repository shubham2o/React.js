import Card from "./Card";

const Cards = () => {
    return (
        <div className="w-full max-h-96 overflow-auto rounded-lg p-4 flex justify-center items-center flex-wrap gap-4">
            <Card />
        </div>
    )
}

export default Cards;