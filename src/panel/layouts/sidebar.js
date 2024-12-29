import React from 'react';
import { Link } from "react-router-dom";
function Sidebar(){
    return(
        <>
        <nav class="navbar navbar-dark bg-dark bg-gradient vh-100  align-items-start">
             <ul class="navbar-nav p-4 ">
                <li class="nav-item">
                <Link to ="/user" class="nav-link"> <i class="fa-solid fa-user"></i>.Users Form</Link>
                </li>
                <li class="nav-item">
                <Link to="/product" class="nav-link"> <i class="fa-solid fa-user"></i>.Product Form</Link>
                </li>
                <li class="nav-item">
                <Link to="/category" class="nav-link"> <i class="fa-solid fa-list"></i>.Category Form</Link>
                </li>
             </ul>
       </nav>

        </>
    )
}

export default Sidebar