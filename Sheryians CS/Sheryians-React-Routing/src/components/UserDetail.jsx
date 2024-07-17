import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
    const { username } = useParams();
    const navigate = useNavigate();

    const goBackHandler = () => {
        // navigate("/user");
        // OR (to go back one component behind, i.e., on previous component)
        navigate(-1);
    }

    return (
        <div className="w-full h-screen pt-10 font-semibold bg-teal-900 text-white text-center tracking-wider">
            <h1 className="text-xl underline underline-offset-8">
                USER DETAIL
            </h1>

            <div className="mt-6 flex justify-center items-center gap-3">
                <span className="">
                    Username:
                </span>

                <span className="text-yellow-400">
                    {username}
                </span>
            </div>

            <button
                className="mt-16 px-3 py-1.5 bg-white text-black rounded-2xl"
                onClick={() => goBackHandler()}
            >
                ← Go Back
            </button>

        </div>
    )
}

export default UserDetail;