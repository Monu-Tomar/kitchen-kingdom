import { RiCloseCircleLine } from "react-icons/ri";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart=()=>{
    const[activeCart,setActiveCart]=useState(false);
    const cartItems= useSelector((state)=>state.cart.Cart);
    const totalQty = cartItems.reduce((totalqty, item)=> totalqty + item.qty, 0);
    const totalPrice = cartItems.reduce((total, item)=> total + item.qty *item.price, 0);

    const navigate=useNavigate();

    return(
        <>
        <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 mb-3 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
            <div className="flex justify-between py-1 px-2">
            <span className="text-xl font-bold">My Order</span>
            <RiCloseCircleLine onClick={()=>setActiveCart(!activeCart)} className="border-gray-600 text-gray-600 font-bold text-3xl hover:text-red-400 cursor-pointer" />
            </div>

            { cartItems.length>0 ?
                cartItems.map((food)=>{return(
                    <ItemCart key={food.id}
                        id={food.id}
                        name={food.name}
                        price={food.price}
                        image={food.image}
                        qty={food.qty}
                    />
                )}) : <h2 className="text-xl text-center font-bold text-gray-800">Your cart is empty</h2>
            }
            <div className="absolute bottom-0">
                <h3 className="font-semibold text-gray-800">Items : {totalQty} </h3>
                <h3 className="font-semibold text-gray-800">Total Amount : {totalPrice} </h3>
                <hr className="w-[90vw] lg:w-[18vw] m-2 "/>
                <button onClick={()=>navigate("/success")} className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5 ">CheckOut</button>
            </div>
        </div>
        <FaShoppingCart className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all"} `} onClick={()=>setActiveCart(!activeCart)}/>
        </>
    );
}
export default Cart;