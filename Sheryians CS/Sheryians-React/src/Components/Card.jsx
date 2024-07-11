const Card = () => {
    const data = [
        {
            image: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww",
            name: "Amazon Basics",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            instock: true,
        },
        {
            image: "https://images.unsplash.com/photo-1611075760601-7c8d0bb90b6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5pa2UlMjBqb3JkYW58ZW58MHx8MHx8fDA%3D",
            name: "Air Jordan",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            instock: false,
        },
        {
            image: "https://images.unsplash.com/photo-1580980379270-cf860f6db3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFkaWRhcyUyMGJveHxlbnwwfHwwfHx8MA%3D%3D",
            name: "Adidas Originals",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            instock: true,
        }
    ];

    return (
        <div className="w-full h-screen bg-zinc-700 flex items-center justify-center gap-10">
            {data.map((elem, index) => (
                <div
                    key={index}
                    className="w-52 bg-zinc-100 rounded-xl overflow-hidden"
                >
                    <div className="w-full h-32 px-1 pt-1">
                        <img
                            src={elem.image}
                            alt={elem.name}
                            className="w-full h-full object-cover rounded-t-xl"
                        />
                    </div>

                    <div className="w-full px-3 py-4">
                        <h2 className="font-semibold">
                            {elem.name}
                        </h2>

                        <p className="text-xs mt-3">
                            {elem.description}
                        </p>

                        <button
                            className={`mt-3 px-2 py-1 text-xs rounded text-zinc-100 ${elem.instock ? 'bg-blue-600' : 'bg-red-600'}`}
                            onClick={() => alert(`${elem.instock ? 'in stock' : 'out of stock'}`)}
                        >
                            {elem.instock ? "in stock" : "out of stock"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;