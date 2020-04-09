import { useState } from 'react';


//key:initialValue as parameters kinda like object key:prop values
export const useLocalStorage = (key, initialValue) => {
    // To retrieve an item from localStorage, call localStorage.getItem('itemName')
    // If that item doesn't exist, it will return undefined
            const [storedValue, setStoredValue] = useState(() => {
            // Get from local storage by key
            const item = window.localStorage.getItem(key); 
            // console.log(`-->`, item);       
            //if item is true ...     
            return item ? JSON.parse(item) : initialValue;
                });
                
                
          const setValue = value => {
              console.log(`this is value`, value)
            // Save state
            setStoredValue(value)
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(value));//passing in key and value that belongs to the key
          };
   
            return [storedValue, setValue];  
    }



