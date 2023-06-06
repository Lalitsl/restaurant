import '../App.css';
import Navbar from './Navbar';

function Order() {
  return (
    <>
        <div>
            <Navbar />
        </div>
        <div className=" mx-auto w-[50%]  font-light justify-center mt-52 shadow-xl p-5 mb-20">
                <p className=" text-center text-2xl">Checkout</p>
                <p className='mt-3'>Thank you for your order</p>
        </div>
       
    
    </>
  );
}

export default Order;
