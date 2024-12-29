import Navbar from "./navbar"
import Sidebar from "./sidebar"
import Footer from "./footer"
import { Outlet } from "react-router-dom";
function Layout(){
    return(
        <>
        <div className=" container-fluid">
            <div className="row">
            <Navbar />
            </div>
            <div className="row">
                <div className=" col-lg-3 col-md-4 gx-sm-1">
                    <Sidebar />
                </div>
                <div className=" col-lg-9 col-md-8">
                  <Outlet/>
                </div>
            </div>
            <Footer />  
      </div>
      
    </>
    )
    
}
export default Layout