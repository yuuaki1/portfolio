export default function Stack() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col text-center py-32">
                <h6 className="text-gray-500 pb-5 text-2xl">Skills i use everyday</h6>
                <h1 className="text-7xl font-extrabold">Tech</h1>
                <h1 className="text-7xl font-extrabold">Stack</h1>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-row">
                    <div className="bg-[#111] z-10 m-1 p-64 rounded-3xl relative group hover:bg-gradient-to-t from-blue-400 to-blue-900 duration-800">
                        <img src="/src/svg-asset/css.svg" className="h-40 w-40 grayscale group-hover:grayscale-0 duration-300" />
                        <figcaption className="text-white text-2xl absolute bottom-6 left-6 font-extrabold">CSS 3</figcaption>
                    </div>
                    <div className="bg-[#111] z-10 m-1 p-64 rounded-3xl relative group hover:bg-gradient-to-t from-black to-orange-800 duration-800">
                        <img src="/src/svg-asset/html.svg" className="h-40 w-40 grayscale group-hover:grayscale-0 duration-300" />
                        <figcaption className="text-white text-2xl absolute bottom-6 left-6 font-extrabold">HTML 5</figcaption>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="bg-[#111] z-10 m-1 p-48 rounded-3xl relative group hover:bg-gradient-to-t from-purple-400 to-blue-800 duration-800">
                        <img src="/src/svg-asset/tailwind.svg" className="h-40 w-40 grayscale group-hover:grayscale-0 duration-300" />
                        <figcaption className="text-white text-2xl absolute bottom-6 left-6 font-extrabold">TAILWIND</figcaption>
                    </div>
                    <div className="bg-[#111] z-10 m-1 p-48 rounded-3xl relative group hover:bg-gradient-to-t from-black to-yellow-800 duration-800">
                        <img src="/src/svg-asset/js.svg" className="h-40 w-40 grayscale group-hover:grayscale-0 duration-300" />
                        <figcaption className="text-white text-2xl absolute bottom-6 left-6 font-extrabold">JAVASCRIPT</figcaption>
                    </div>
                    <div className="bg-[#111] z-10 m-1 p-48 rounded-3xl relative group hover:bg-gradient-to-t from-black to-blue-900 duration-800">
                        <img src="/src/svg-asset/react.svg" className="h-40 w-40 grayscale group-hover:grayscale-0 duration-300" />
                        <figcaption className="text-white text-2xl absolute bottom-6 left-6 font-extrabold">REACT</figcaption>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="bg-[#111] z-10 m-1 p-64 rounded-3xl relative group hover:bg-gradient-to-t from-blue-700 to-yellow-900 duration-800">
                        <img src="/src/svg-asset/python.svg" className="h-40 w-40 grayscale group-hover:grayscale-0 duration-300" />
                        <figcaption className="text-white text-2xl absolute bottom-6 left-6 font-extrabold">PYTHON</figcaption>
                    </div>
                </div>
                <div className="pb-40"></div>
            </div>
        </div>
    )
}