import { useEffect, useState } from 'react'

function getSavedValue(key: any, initialValue:any) {
    const savedValue = localStorage.getItem(key);
    if(savedValue) return savedValue;

    if(initialValue instanceof Function) return;
    return initialValue;
}

const useLocalStorage = (key: any, initialValue:any) => {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    })

    useEffect(() => {
        localStorage.setItem(key, value)
    }, [value]);

    return [value, setValue]
}

export default useLocalStorage
