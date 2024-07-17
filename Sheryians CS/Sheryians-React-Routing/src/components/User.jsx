import { Link, Outlet } from "react-router-dom";

const User = () => {
    return (
        <div className="w-full h-screen pt-10 text-center bg-teal-900 tracking-wide">
            <h1 className="text-2xl underline underline-offset-8">
                User
            </h1>

            <div className="mt-6 p-2 flex justify-center items-center gap-10 bg-white text-teal-900 font-bold">
                <Link
                    to="/user/stephen-curry"
                    className="px-4 py-1 rounded-2xl hover:bg-teal-900 hover:text-white"
                >
                    Stephen Curry
                </Link>

                <Link
                    to="/user/klay-thompson"
                    className="px-4 py-1 rounded-2xl hover:bg-teal-900 hover:text-white"
                >
                    Klay Thompson
                </Link>

                <Link
                    to="/user/draymond-green"
                    className="px-4 py-1 rounded-2xl hover:bg-teal-900 hover:text-white"
                >
                    Draymond Green
                </Link>
            </div>

            <Outlet />
        </div>
    )
}

export default User;