import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const Success=()=>{
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false);
        },3000);
    },[]);
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            {
                loading ? (<PropagateLoader color={"#123abc"} size={40} />) : (
                    <div>
                        <h2 className="text-3xl font-semibold mb-4 text-orange-500 text-center"  >Order Successful!</h2>
                        <p>Your order has been Sucessfully placed.</p>
                        <Link to="/" className="text-white underline mt-4 bg-green-500 rounded-md px-1">Back to home</Link>
                    </div>
                )
            }
            
        </div>
    );
}
export default Success;