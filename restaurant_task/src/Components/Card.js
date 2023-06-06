import '../App.css';
import React, { useState } from "react";

function Card(){
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(100);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
        setTotalPrice(totalPrice + 100);
    }

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotalPrice(totalPrice - 100);
        }
    }
    return(
        <>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 px-20 gap-10 p-2 w-100 h-20 mt-20">

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src="https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/w_1000,h_684,c_limit/the-ultimate-hamburger.jpg" alt="hamburger_img" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hamburger</h5>
                    <p> Price :100 </p>
                    <p> Total : {quantity} </p>
                    <p> Cost(INR) : {totalPrice} </p>
                

                    <div className="flex mt-14">
                        <button className="px-5 rounded bg-[#3f51b5] text-2xl text-white" onClick={handleIncrease}>+</button>
                        <button className="px-5 rounded bg-[#e0e0e0] text-2xl ml-5 bg-red-200" onClick={handleDecrease}>-</button>
                    </div>
                
                </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg h-52" src="https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries.JPG" alt="fries_img" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fries</h5>
                    <p> Price : 100 </p>
                    <p> Total : {quantity} </p>
                    <p> Cost(INR) : {totalPrice} </p>


                    <div className="flex my-3">
                        <button className="px-5 rounded bg-[#3f51b5] text-2xl text-white" onClick={handleIncrease}>+</button>
                        <button className="px-5 rounded bg-[#e0e0e0] text-2xl ml-5 bg-red-200" onClick={handleDecrease}>-</button>
                    </div>
                   
                </div>
            </div>


            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg h-52" src="https://economictimes.indiatimes.com/thumb/msid-89484901,width-1200,height-900,resizemode-4,imgsize-124344/pepsico-coke-call-out-india-as-a-key-growth-market-in-global-earnings.jpg?from=mdr" alt="coke_img" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cock</h5>
                    <p> Price : 50 </p>
                    <p> Total : {quantity} </p>
                    <p> Cost(INR) : {totalPrice} </p>


                    <div className="flex my-3">
                        <button className="px-5 rounded bg-[#3f51b5] text-2xl text-white" onClick={handleIncrease}>+</button>
                        <button className="px-5 rounded bg-[#e0e0e0] text-2xl ml-5 bg-red-200" onClick={handleDecrease}>-</button>
                    </div>
                   
                </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg h-52" src="https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pepsi_img" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pepsi</h5>
                    <p> Price : 50 </p>
                    <p> Total : {quantity} </p>
                    <p> Cost(INR) : {totalPrice} </p>

                    <div className="flex my-3">
                        <button className="px-5 rounded bg-[#3f51b5] text-2xl text-white" onClick={handleIncrease}>+</button>
                        <button className="px-5 rounded bg-[#e0e0e0] text-2xl ml-5 bg-red-200" onClick={handleDecrease}>-</button>
                    </div>
                   
                </div>
            </div>

           
        </div>
        </>

    );
}
export default Card;



