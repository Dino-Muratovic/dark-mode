import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

//Create a function
export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('Dark mode', false);
    
    useEffect(() => {       
            //if darkMode is true, add a class of darkmode, otherwise remove that class
            darkMode ? window.document.body.classList.add('dark-mode') : window.document.body.classList.remove('dark-mode')       
    }, [darkMode])

    const setDark = () => {
            !darkMode ? setDarkMode(true) : setDarkMode(false)
    }


     return [darkMode, setDark] // darkMode is just a slice of state, setDark is an actual function  
}