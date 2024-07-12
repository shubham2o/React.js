const Navbar = ({ data }) => {
    return (
        <div className="w-full px-8 py-3 flex justify-between items-center font-semibold">
            <h3 className="text-orange-600 underline decoration-2 font-bold text-lg">Playlist.</h3>

            <div className="w-[7.2rem] px-2 py-1 bg-orange-600 text-white rounded-md text-sm flex justify-between items-center gap-1.5">
                <h3 className="pt-0.5">Favourites</h3>

                <h4
                    className="px-1.5 pt-[2px] pb-[1.5px] bg-black rounded-full text-xs"
                >
                    {data.filter(item => item.added).length}
                </h4>
            </div>
        </div>
    )
}

export default Navbar;