import Sidebar from "../components/Sidebar";
import { useFirestore } from "../hooks/useFireStore";
import "../Styles.css";

const Home = () => {
    
    return <>

        <Sidebar />
        <div className="p-7 w-full text-2xl title ">
            <span className="text-sm text-gray-500">Dashboard</span>
            <h1 className="text-4xl">Metas de Ahorro</h1>

            <div className="flex justify-evenly h-auto  pr-5 pt-5  m-auto  text-center">

                <div className=" w-30 h-40 bg-white rounded-lg border border-gray-200 p-5 ">
                    <p className="text-sm text-gray-500">4 Millones</p>
                    <h1 className=" mt-7 ">$1.500.000</h1>
                </div>

                <div className=" w-30 h-40 bg-white rounded-lg border border-gray-200 p-5 ">
                    <p className=" text-sm text-gray-500">4 Millones</p>
                    <h1 className="  mt-7 ">$1.500.000</h1>
                </div>

                <div className=" w-30 h-40 bg-white rounded-lg border border-gray-200 p-5 ">
                    <p className="text-sm text-gray-500">4 Millones</p>
                    <h1 className=" mt-7 ">$1.500.000</h1>
                </div>

                <div className=" w-30 h-40 bg-white rounded-lg border border-gray-200 p-5 ">
                    <p className="text-sm text-gray-500">4 Millones</p>
                    <h1 className=" mt-7 ">$1.500.000</h1>
                </div>
            </div>


        </div>

       


    </>

}
export default Home;