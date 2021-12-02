import React, { createContext, useEffect, useState } from "react"
//changes between dark and light themes
const themes ={
    dark:{
        backgroundColor:"darkcyan",
        color:"chocolate"
    },
    light:{
        backgroundColor:"pink",
        color:"red"
    }
}

const initialState={
    dark:false,
    theme: themes.light,
    toggle:()=>{}
}

const ThemeContext = createContext(initialState);

function ThemeProvider({children}){
    const [dark, setDark]= useState(false);
    useEffect(()=>{
        const isDark = localStorage.getItem('dark') === 'true';
        setDark(isDark);
    },[dark])

    const toggle = () =>{
        const isDark = !dark;
        localStorage.setItem("dark" , JSON.stringify(isDark));
        setDark(isDark);
    }

    const theme = dark ? themes.dark : themes.light;

    return(
        <ThemeContext.Provider value={{theme, dark, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider};