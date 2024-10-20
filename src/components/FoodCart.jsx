import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slices/CartSlices";

const FoodCart=({id,name,price,desc,image,rating, handleToast})=>{
    const dispatch=useDispatch();
    return(
        <div className="font-bold w-[250px] bg-white p-5 flex flex-col gap-2 rounded-lg ">
        <img src={image} alt={name} className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-out" />
        <div className="text-sm flex justify-between">
            <h1>{name}</h1>
            <span>₹{price} </span>
        </div>
        <p className="text-sm font-normal">
            {desc.slice(0,50)}...</p>
        <div className="flex justify-between">
            <span className="flex items-center"> <FaStar className="mr-1 text-yellow-400" />{rating}</span>
            <button onClick={()=>{
                dispatch(addToCart({id,image,name,price,rating,qty:1}));
                handleToast(name);
            }} className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">Add to Cart</button>
        </div>
        </div>
    );
}
export default FoodCart;

// toutobe time 2:44