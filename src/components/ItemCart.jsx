import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart, incrementQty, decrementQty } from "../Redux/Slices/CartSlices";
import toast from "react-hot-toast";
const ItemCart=({id,name,price,image,qty})=>{

    const dispatch=useDispatch();
    return(
        <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
        <MdDelete onClick={()=>{
            dispatch(removeFromCart({id,name,image,price,qty}));
            toast (`${name} Removed! `,{
                icon:"👋",
            });
        }} className="absolute right-7 text-gray-700 cursor-pointer" />
        <img src={image} alt={name} className="w-[50px] h-[50px]"/>
        <div className="leading-5" >
            <h2 className="font-bold text-gray-800">{name}</h2>
            <div className="flex ">
                <span className="font-bold">₹{price}</span>
                <div className="flex gap-2 justify-center items-center absolute right-7">
                    <FaPlus onClick={()=> qty >= 1 ? dispatch(incrementQty({id})) : (qty=0)} className="border-gray-600 border-1 text-gray-700 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
                    <span>{qty}</span>
                    <FaMinus onClick={()=> qty > 1 ? dispatch(decrementQty({id})) : (qty=0)} className="border-gray-600 border-1 text-gray-700 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
                </div>
            </div>
        </div>
        </div>
    );
}
export default ItemCart;