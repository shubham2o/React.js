const Card = () => {
    return (
        <div className="w-full h-screen bg-zinc-700">
            <div
                className="w-52 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-xl overflow-hidden"
            >
                <div className="w-full h-32 bg-zinc-300">
                    <img
                        src="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww"
                        className="w-full h-full object-cover"
                        alt="Amazon-Basics-img"
                    />
                </div>
                <div className="w-full px-3 py-4">
                    <h2 className="font-semibold">
                        Amazon Basics
                    </h2>
                    <p className="text-xs mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;