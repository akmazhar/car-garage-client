import { Link } from "react-router-dom";
import { MdWorkOutline} from "react-icons/md";

const Navbar = () => {
 const navItems = <>
      <li><Link to="/" className=" font-mono font-semibold">Home</Link></li>
      <li><Link to="about" className=" font-mono font-semibold">About</Link></li>
      <li><Link to="service" className=" font-mono font-semibold">Service</Link></li>
     <li ><Link to="blog" className=" font-mono font-semibold">Blog</Link></li>
    <li><Link to="contact" className=" font-mono font-semibold">Contact</Link></li>
 </>
    return (

       
      
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             
             {navItems}
             
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl"><img src="https://i.ibb.co/vzGHcbZ/Car-Service-Logo.png" alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal mr-48">
           
         {navItems}
       
          </ul>
        </div>
      <div className="flex-1 navbar-end mr-3">
        < MdWorkOutline className="flex-1 navbar-end h-7 w-8"></MdWorkOutline>
      {/* <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 gap-5 p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div> */}
        <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
        <div className="navbar-end">
        

          <a className="btn btn-outline btn-warning mr-5">Appointment</a>
        </div>
      </div>
     
      </div>
      
    
    );
};

export default Navbar;