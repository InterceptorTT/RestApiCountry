import {createContext} from 'react'

const ThemeContext = createContext();

export default function ThemeProvider(props){
        const theme = "light";
        return(
            <ThemeContext.Provider value={theme}>
                {props.children}
            </ThemeContext.Provider>
        )
}

