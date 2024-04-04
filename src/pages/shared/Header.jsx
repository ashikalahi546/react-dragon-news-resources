import Logo from '/assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center space-y-2'>
           <img className='mx-auto' src={Logo} alt="" />
           <p className='text-lg'>Journalism Without Fear or Favour</p>
           <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;