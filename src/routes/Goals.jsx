import Sidebar from "../components/Sidebar";


const Goals = () => {
    return (
        <>
            <Sidebar />
            <div className=" ml-6 mt-9  text-2xl w-3/5 ">
                <h1 className="title text-4xl">Goals</h1>

                <div className="flex justify-around bg-red-500 mt-9  p-5">
                    <div className="w-52 bg-white mb-3 rounded-2xl">
                        <h1 className="title text-4xl ml-3">Name 1</h1>
                        <p className="title text-2xl ml-3">$1,000,000</p>
                    </div>
                    <div className="w-52 bg-white mb-3">
                        <h1 className="title text-4xl ml-3">Name 2</h1>
                        <p className="title text-2xl ml-3">$1,000,000</p>
                    </div>
                    <div className="w-52 bg-white mb-3">
                        <h1 className="title text-4xl ml-3">Name 3</h1>
                        <p className="title text-2xl ml-3">$1,000,000</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Goals;