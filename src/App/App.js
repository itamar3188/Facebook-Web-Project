
import Login from "../Components/Login/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "../Components/signup/Register";
import FeedScreen from "../Components/feed/feedScreen";

function App() {
    return(

        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Login />} ></Route>
                <Route path= "/Register" element={<Register />} ></Route>
                <Route path= "/Feed" element={<FeedScreen />} ></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;