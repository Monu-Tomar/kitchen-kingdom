import { setSearch } from "../Redux/Slices/SearchSlice";
import { useDispatch } from "react-redux";
const Navbar=()=>{
    const dispatch=useDispatch();   
    return(
        <>
        <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
            <div>
                <h3 className="text-xl font-bold text-gray-600">{new Date().toDateString()}</h3>
                <h1 className="text-2xl font-bold">Kitchen Kingdom</h1>
            </div>
            <div>
                <input type="search" name="Search" placeholder="Search Here" className="border p-1 border-gray-400 text-sm rounded-lg outline-none lg:w-[25vw] w-full " onChange={(e)=>dispatch(setSearch(e.target.value))} />
            </div>
        </nav>
        </>
    );
}
export default Navbar;