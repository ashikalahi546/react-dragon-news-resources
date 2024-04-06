import { useParams } from "react-router-dom";
import Header from "../shared/Header";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import Navber from "../shared/Navber";


const News = () => {
    const {id} = useParams()
    return (
        <div>
           <Header></Header>
           <Navber></Navber>
           <div className="grid grid-cols-4 gap-5">
            <div className="col-span-3">
       <h1 className="text-2xl font-medium">New Details</h1>
       {id}
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
           </div>
        </div>
    );
};

export default News;