import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
   return (
      <div className=" flex flex-col justify-between min-h-screen">
         <Navbar />
         <div className="grow bg-light text-dark">{children}</div>
         <Footer />
      </div>
   );
};

export default MainLayout;
