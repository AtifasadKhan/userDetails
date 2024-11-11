import {useEffect, useState} from 'react'
import './App.css'
import UserTable from "./components/table.jsx";

import {Datacontext} from './contexts/datacontext.js';
import ThemeContext from "./contexts/themecontext.js";

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const [themeClass, setThemeClass] = useState("light"); // change the default here

    console.log(data)
    return (
        <>

            <ThemeContext.Provider value={{ themeClass, setThemeClass }}>
                <div className={themeClass}>
                    <div className="text-slate-900 bg-slate-100 h-screen flex justify-center items-center dark:text-slate-100 dark:bg-slate-900">
            <Datacontext.Provider value={data}>
                <UserTable/>
            </Datacontext.Provider>
                    </div>
                </div>
            </ThemeContext.Provider>

        </>
    )
}

export default App
