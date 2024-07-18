import { useState } from "react";
import axios from "axios";

const Show = () => {
    const api = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios
            .get(api)
            .then(products => setProducts(products.data))
            .catch(err => console.log(err.message))
    }

    const addProducts = () => {
        axios
            .post(api, {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic',
            })
            .then(resp => console.log(resp.data))
            .catch(err => console.log(err))
    }

    return (
        <div className="bg-zinc-800">
            <button
                className="m-10 rounded-2xl px-4 py-1 bg-blue-500 text-white text-lg font-semibold"
                onClick={() => getProducts()}
            >
                Get Products Details
            </button>

            <button
                className="m-10 rounded-2xl px-4 py-1 bg-blue-500 text-white text-lg font-semibold"
                onClick={() => addProducts()}
            >
                Add Products Details - Output is in Console
            </button>

            {products.length > 0
                ?
                products.map((item, index) => {
                    return (
                        <ul
                            key={index}
                            className="w-full border-solid border-b-4 border-sky-600 px-10 py-6 flex flex-col gap-6"
                        >
                            <li className="flex flex-col gap-1">
                                <span className="text-yellow-400 font-bold">
                                    Item id :
                                </span>

                                {item.id}
                            </li>

                            <li className="flex flex-col gap-1">
                                <span className="text-yellow-400 font-bold">
                                    Title :
                                </span>

                                {item.title}
                            </li>

                            <li className="flex flex-col gap-1">
                                <span className="text-yellow-400 font-bold">
                                    Price :
                                </span>

                                ${item.price}
                            </li>

                            <li className="flex flex-col flex-wrap gap-1">
                                <span className="text-yellow-400 font-bold">
                                    Description :
                                </span>

                                <span className="">{item.description}</span>
                            </li>

                            <li className="w-36">
                                <img
                                    src={item.image}
                                    className="h-full object-cover rounded-2xl"
                                />
                            </li>

                            <li className="flex flex-col gap-1">
                                <span className="text-yellow-400 font-bold">
                                    Ratings :
                                </span>

                                {item.rating.rate}
                            </li>
                        </ul>
                    )
                })
                :
                <h1 className="px-10 py-6 tracking-wider">
                    {`Loading...`}
                </h1>
            }
        </div>
    )
}

export default Show;