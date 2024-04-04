import { IoLogoGoogle } from "react-icons/io";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import QZone from '/assets/qZone1.png'
import QZone2 from '/assets/qZone2.png'
import QZone3 from '/assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="mb-3 space-y-2">
        <h2 className="font-medium text-xl mb-3">Login With</h2>
        <Link className="flex items-center gap-2 btn btn-outline  ">
          <IoLogoGoogle></IoLogoGoogle> Login With Google
        </Link>
        <Link className="flex items-center gap-2 btn btn-outline  ">
          <FaGithub></FaGithub> Login With Github
        </Link>
      </div>

      <div>
      <h2 className="font-medium text-xl mb-3">Find Us On</h2>
        <Link className="flex items-center gap-2 border rounded-t-lg p-2 ">
          <FaFacebookF className="text-blue-600"></FaFacebookF> Facebook
        </Link>
        <Link className="flex items-center gap-2 border-x  p-2 ">
          <FaTwitter className="text-blue-500"></FaTwitter> Twitter
        </Link>
        <Link className="flex items-center gap-2 border rounded-b-lg p-2 ">
          <FaInstagram className="text-red-500"></FaInstagram> Instagram
        </Link>
      </div>
      <div>
      <h2 className="font-medium text-xl mt-3">Q-Zone</h2>
      <div>
<img src={QZone} alt="" />
<img src={QZone2} alt="" />
<img src={QZone3} alt="" />
      </div>
      </div>
    </div>
  );
};

export default RightSideNav;
