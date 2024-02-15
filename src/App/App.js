import "./App.css"
import {createContext, useState} from "react";
import Login from "../Components/Login/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "../Components/signup/Register";
import FeedScreen from "../Components/feed/feedScreen";
export const ThemeContext = createContext(null);
function App() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((curr) => (curr==='light' ? 'dark': 'light'))
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Login />} ></Route>
                <Route path= "/Register" element={<Register />} ></Route>
                <Route path= "/Feed" element={<FeedScreen />} ></Route>
            </Routes>
        </BrowserRouter>
        </ThemeContext.Provider>
    );
}
export default App