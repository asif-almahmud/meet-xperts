import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

const Home = () => {
   return (
      <>
         <MainLayout>
            <div className="mt-36 container flex items-center justify-center p-4 mx-auto text-justify">
               <Link
                  to="/meeting"
                  className="border-secondary/70 rounded-[999px]  px-4 py-2 border-2 text-secondary hover:text-light hover:bg-secondary/80"
               >
                  Enter Meeting
               </Link>
            </div>
         </MainLayout>
      </>
   );
};

export default Home;
