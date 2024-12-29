import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Layout from "./panel/layouts/layout";
import User from "./panel/pages/user";
import Product from "./panel/pages/product";

function App() {
  return (
   <>
   <Router>
        <Routes>
         <Route path='/' element={<Layout />}>
         <Route path='/user' element={< User />} />
          <Route path='/product' element={<Product />} />
         </Route>  
        </Routes>
    </Router>
   </>
  );
}

export default App;
