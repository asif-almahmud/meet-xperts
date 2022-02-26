import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import ConnectWithoutContactSharpIcon from "@mui/icons-material/ConnectWithoutContactSharp";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
   const [menuIsOpen, setMenuIsOpen] = useState(false);

   const activeStyle = ({ isActive }) => {
      return isActive
         ? "inline-block mx-4 text-dimmed w-full md:w-fit text-center "
         : "text-slate-100 hover:text-dimmed  inline-block mx-4 cursor-pointer w-full md:w-fit text-center ";
   };

   useEffect(() => {
      return () => {
         setMenuIsOpen(false);
      };
   }, []);

   return (
      <>
         <div className="h-14 sm:h-16 blur-sm bg-slate-900/70 fixed top-0 left-0 z-40 w-screen"></div>
         <div className="h-14 sm:h-16 bg-secondary/80 text-light sticky top-0 left-0 z-50 flex items-center justify-between">
            {/* Left Part */}
            <div className=" md:hidden">
               <button
                  // onBlur={() => setMenuIsOpen(fals
                  onClick={() => {
                     setMenuIsOpen(!menuIsOpen);
                  }}
                  className=" text-slate-100 flex items-center justify-center mx-4 cursor-pointer"
               >
                  <MenuIcon />
               </button>

               {menuIsOpen && (
                  <>
                     <div className="py-4 md:hidden bg-secondary/95 absolute top-14 sm:top-16 left-0 flex flex-col justify-center items-center w-screen gap-x-1.5 font-medium ">
                        <NavLink to="/about" className={activeStyle}>
                           About
                        </NavLink>
                        <NavLink to="/industries" className={activeStyle}>
                           Industries
                        </NavLink>
                        <NavLink to="/consultants" className={activeStyle}>
                           Consultants
                        </NavLink>
                        <NavLink to="/services" className={activeStyle}>
                           Services
                        </NavLink>
                     </div>
                  </>
               )}
            </div>

            <Link to="/" className="flex flex-col">
               <div className="text-slate-100 flex items-center justify-center mx-4 text-xl italic font-semibold">
                  MeetXperts<span className="mx-1"></span>
                  <ConnectWithoutContactSharpIcon />
               </div>
               <div className="inline-block mx-4 text-sm italic font-normal text-gray-100">
                  Get Solutions From Experts
               </div>
            </Link>

            {/* Middle Part */}
            <div className="md:block hidden font-medium">
               <NavLink to="/about" className={activeStyle}>
                  About
               </NavLink>
               <NavLink to="/industries" className={activeStyle}>
                  Industries
               </NavLink>
               <NavLink to="/consultants" className={activeStyle}>
                  Consultants
               </NavLink>
               <NavLink to="/services" className={activeStyle}>
                  Services
               </NavLink>
            </div>

            {/* Right Part */}
            <div className="text-slate-100 inline-block mx-4">Login</div>
         </div>
         {/* <div
            className={`h-screen w-screen bg-transparent fixed bottom-0 left-0 ${
               menuIsOpen ? "block" : "hidden"
            }`}
            onClick={() => {
               setMenuIsOpen(false);
            }}
         ></div> */}
      </>
   );
};
export default Navbar;
