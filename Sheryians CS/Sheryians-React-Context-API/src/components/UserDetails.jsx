import { useContext } from "react";
import { UserContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    const { users } = useContext(UserContext);
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen p-10 flex flex-col gap-10 items-center bg-pink-800">
            <h1 className="underline underline-offset-8">
                {`> User Details`}
            </h1>

            <div className="border-4 border-zinc-400 rounded-3xl w-full flex flex-col gap-10 bg-green-900">
                {users.map((item, index) => {
                    return (
                        item.id == id
                            ?
                            <div
                                key={index}
                                className="p-5 flex flex-col gap-5"
                            >
                                <h1>{`Id : ${item.id}`}</h1>
                                <h1>{`Username : ${item.username}`}</h1>
                                <h1>{`Country : ${item.country}`}</h1>
                            </div>
                            :
                            null
                    )
                })}
            </div>

            <button
                className="rounded-full px-3 py-1.5 bg-zinc-500"
                onClick={() => navigate(-1)}
            >
                👈 Go Back
            </button>
        </div>
    )
}

export default UserDetails;