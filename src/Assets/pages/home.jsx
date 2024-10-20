import Cart from "../../components/Cart";
import CategoryMenu from "../../components/CategoryMenu";
import FoodItems from "../../components/Fooditems";
import Navbar from "../../components/Navbar";

const Home=()=>{
    return(
        <>        
        <Navbar />
        <CategoryMenu />
        <FoodItems />
        <Cart />
        </>
    );
}
export default Home;