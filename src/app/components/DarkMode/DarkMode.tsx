'use client'

import { useEffect, useState } from 'react'
import './DarkMode.css'

export default () => {

    const[theme, setTheme] = useState(false)

    const darkMode = () => {
        setTheme(!theme)
    }

    useEffect(() => {
        if (theme) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [theme])

    return(
    <div className='container'>
    <h1 className='title'>Hello World</h1>
    <div className='wrapper'>
        <label className="switch">
            <input onChange={darkMode} type="checkbox" />
            <span className="slider round"></span>
        </label>
    </div>
    </div>
    )
}