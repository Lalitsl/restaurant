import React from "react";
import { Link } from "react-router-dom";


function Home(){
    return(
        <>
        
        <div className="">
            <div className=" mx-auto w-[50%] text-7xl font-light flex justify-center mt-52 text-center">
                <p className="">Welcome to Food's Kitchen</p>
            </div>
          
            <div className="text-center mt-10 ">
                <Link to="/card">
                    <button class="bg-[#3f51b5] text-white hover:bg-blue-700 font-bold py-2 px-4 rounded text-center">GO TO MENU </button>
                </Link>
            </div>
        </div>
    
    
        </>

    );
}
export default Home;