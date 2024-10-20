import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Assets/pages/home";
import Success from "./Assets/pages/success";
import Error from "./Assets/pages/Error";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route 
                    path="/success"
                    element={<Success />} 
                />
                <Route path="/*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
