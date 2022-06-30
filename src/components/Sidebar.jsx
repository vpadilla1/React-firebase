import { useContext, useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import { UserContext } from './../context/UserProvider';


const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const { signOutUser } = useContext(UserContext);
    const handleLogout = async () => {
        try {
            await signOutUser();
        } catch (error) {
            console.log(error.code)
        }
    }
    

    return (
<>
        <div className={`${open ? "w-60" : "w-20"} duration-300  h-full bg-white relative`}> 
            <img src="./src/assets/control.png"
                onClick={() => setOpen(!open)}
                className={` absolute cursor-pointer rounded-full -right-3 top-5 w-7 border-2 border-dark-purple ${!open && "rotate-180"} `} />
            <Link to="/">
            <div className="mt-16 flex gap-x-4 items-center">
                <img
                    src="./src/assets/logo.png"
                    className={` w-14 cursor-pointer duration-500 ${open && "rotate-[360deg] w-20"}`}
                />
                <h1
                            className={`text-dark-purple origin-left font-extrabold text-2xl inline-block duration-200 ${!open && "scale-0"
                        }`}
                >
                    Save Cash
                </h1>
            </div>
            </Link>
                <ul className="pt-6">
                    <NavLink to={"/"}>
                        <li className=" flex rounded-md p-2 hover:bg-gray-100 dark:hoverbg-gray-700 text-black text-base items-center gap-x-4 bg-light-white">
                        
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-10 fill-dark-purple" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                            </svg>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>

                                Dashboard
                            </span>
                        </li>
                    </NavLink>
                <NavLink to="/profile">

                        <li className="flex  rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-black text-base items-center gap-x-4 bg-light-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-10 fill-dark-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                       
                        Profile
                    </span>
                </li>
                    </NavLink>
                    <NavLink to="/goals">
                        <li className="flex  rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-black text-base items-center gap-x-4 bg-light-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-10 fill-dark-purple" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>

                                Goals
                            </span>
                        </li>
                    </NavLink>
                    <NavLink to="/newSavings">
                        <li className="flex  rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-black text-base items-center gap-x-4 bg-light-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-10 fill-dark-purple" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>

                                New Savings
                            </span>
                        </li>
                    </NavLink>
                <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-base items-center gap-x-4" onClick={handleLogout}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-10 fill-dark-purple" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                        </svg>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Logout
                        </span>
                    
                </li>
            </ul>
        </div>
    </>

    )
}

export default Sidebar;