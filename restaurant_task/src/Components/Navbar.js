import React from "react";
import '../App.css';
// import logo from './logo.svg';
import logo1 from "./images/new_logo1.png"


function Navbar(){
    return(
        <>
        <div className="bg-[#3f51b5] text-white p-2 w-100 h-20">
            <div className="flex mt-3">
                <img src={logo1} className="w-10 ml-5" alt="img_logo"/>
                <p className="font-bold text-xl ml-5">Food's Restaurants</p>
            </div>
        </div>
        </>

    );
}
export default Navbar;