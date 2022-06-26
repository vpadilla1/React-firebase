import { Outlet } from "react-router-dom"


const LayoutForm = () => {
    return (
        <div className="w-96 mx-auto mt-10">
            <Outlet />
        </div>
    )
}

export default LayoutForm