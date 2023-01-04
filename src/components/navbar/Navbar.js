import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "../../App.css";

const Navbar = () => { 
   return (
     
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
         <div className="container">
            <Link to="/" className="fs-6 ubuntu navbar-brand">
               Find <span className="text-primary">Rick-Morty</span> Characters
            </Link>

            {/* <div class="nav gap-4 ">
               <NavLink to="/" class="nav-link active">Characters</NavLink>
               <NavLink to="/episodes" class="nav-link">Episodes</NavLink>          
               <NavLink to="/location" class="nav-link">Location</NavLink>
            </div> */}
            <button 
               className="navbar-toggler" 
               type="button" 
               data-bs-toggle="collapse" 
               data-bs-target="#navbarNavAltMarkup" 
               aria-controls="navbarNavAltMarkup"
               aria-expanded="false"  
               aria-label="Toggle navigation"
               jsx="true"
            > 
               <style jsx>
                  {`
                     button[aria-expanded="false"] > .close {
                        display: none;
                     }
                     button[aria-expanded="true"] > .open {
                        display: none;
                     }
                  `}
               </style>
               <i className="fa-solid fa-bars fw-bold open"></i>
               <i className="fa-solid fa-x fw-bold close"></i>
            </button>
          
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
               <div className="navbar-nav" style={{fontSize: "13px"}}>
                  <NavLink to="/" className="nav-link active">Characters</NavLink>
                  <NavLink to="/episodes" className="nav-link">Episodes</NavLink>          
                  <NavLink to="/location" className="nav-link">Location</NavLink>
               </div>
            </div>
         </div>
      </nav>    
   )
}

export default Navbar