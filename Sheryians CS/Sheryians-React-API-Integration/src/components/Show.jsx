import { useEffect, useState } from "react";
import axios from "../utils/axios";

const Show = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios
            .get("/products")
            .then(products => setProducts(products.data))
            .catch(err => console.log(err.message))
    }

    const addProducts = () => {
        axios
            .post("/products", {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic',
            })
            .then(resp => console.log(resp.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="bg-zinc-800">
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
                            className="w-full border-solid border-b-4 border-sky-600 px-5 py-6 flex flex-col gap-6"
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

                            <li className="flex flex-col flex-wrap">
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
                <h1 className="text-center tracking-wider text-xl">
                    {`Loading...`}
                </h1>
            }
        </div>
    )
}

export default Show;