import { useContext } from "react";
import { UserContext } from "../context/Context";
import { Link } from "react-router-dom";

const User = () => {
    const { users } = useContext(UserContext);

    return (
        <div className="w-full h-screen p-10 flex flex-col gap-6 items-center bg-purple-800">
            <h1 className="underline underline-offset-8">
                {`> User`}
            </h1>

            <div className="p-5 flex flex-wrap gap-10 justify-center items-center">
                {users.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            to={`/user/${item.id}`}
                            className="w-60 border-4 border-purple-800 hover:border-pink-600 rounded-3xl px-4 py-3.5 bg-zinc-800"
                        >
                            {`👆 ${item.username}`}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default User;