const Playlist = ({ values }) => {
    const { image, song, artist, added } = values;

    return (
        <div>
            <div className="w-72 p-3 pb-14 bg-white rounded-xl flex items-center gap-4 relative">
                <div className="w-32 h-24 bg-orange-600 rounded-xl">
                    <img
                        className="w-full h-full object-cover object-top rounded-xl"
                        src={image}
                    />
                </div>

                <div className="w-48 h-24 pt-3.5 flex flex-col gap-2.5">
                    <h3 className="text-xl leading-none font-semibold">{song}</h3>

                    <h6 className="text-xs">{artist}</h6>
                </div>

                <button
                    className="w-[45%] px-2.5 py-1.5 bg-orange-600 absolute left-1/2 bottom-0 -translate-x-[50%] -translate-y-[35%] text-white text-xs font-semibold rounded-full"
                >
                    Add to Favourites
                </button>
            </div>
        </div>
    )
}

export default Playlist;