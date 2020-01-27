import { useState, useEffect } from 'react'

const getStored = (key, defaultValue) => {
    if (typeof window !== 'undefined' && 'localStorage' in window) {
        const value = window.localStorage.getItem(key)
        if (value) return JSON.parse(value)
    }

    return defaultValue
}
export default (key, defaultValue) => {
    const [memory, setMemory] = useState(getStored(key, defaultValue))

    useEffect(() => {
        if ('localStorage' in window) {
            window.localStorage.setItem(key, JSON.stringify(memory))
        }
    }, [memory])

    return [memory, setMemory]
}
