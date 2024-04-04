import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto mt-3 xl:px-0 px-5">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;