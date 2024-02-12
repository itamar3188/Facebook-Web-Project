import "./App.css"
import Feed from "../Components/feed/Feed";
import {createContext, useState} from "react";


export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) => (curr==='light' ? 'dark': 'light'))
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="App" id={theme}>
                <Feed/>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;