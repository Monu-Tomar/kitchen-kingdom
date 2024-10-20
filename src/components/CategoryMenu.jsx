import { useEffect, useState } from "react";
import FoodData from '../Data/FoodData'
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/Slices/CategorySlice";


const CategoryMenu=()=>{

    const [categories,setcategories]=useState([]);
    const listUniquecategories=()=>{
        const uniquecategories=[
            ...new Set(FoodData.map((food)=>food.category))
        ];
        setcategories(uniquecategories);      
    };    
    useEffect(()=>{
        listUniquecategories();
    },[]);
    const dispatch=useDispatch();
    const selectedCategory = useSelector((state)=>state.category.category);

    return(
        <div className="mx-6">
        <h3 className="text-xl font-semibold">Find the best food</h3>
        <div className="my-4 flex gap-3 overflow-x-scroll sm:overflow-x-hidden scroll-smooth">
            <button onClick={()=>dispatch(setCategory("All"))}
             className={`px-3 py-2 bg-gray-300 font-bold rounded-lg hover:bg-green-400 hover:text-white
              ${selectedCategory === "All" && "bg-green-500 text-white"} `}>All</button>
            {
                categories.map((category,index)=>{return(
                    <button key={index} onClick={()=>dispatch(setCategory(category))}
                     className={`px-3 py-2 bg-gray-300 font-bold rounded-lg hover:bg-green-400 hover:text-white ${selectedCategory === category && "bg-green-500 text-white"} `}>
                        {category}
                    </button>
                )})
            }
        </div>
        </div>
    );
}
export default CategoryMenu;
