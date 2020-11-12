import React, {useState, useEffect} from 'react'
import s from './style.module.scss'

const Theme = () => {
    const [theme, setTheme] = useState('dark')

    const changeTheme = (th) => {
        let data = document.getElementsByTagName('HTML')[0]
        
        if(th === 'dark'){
            setTheme('light')
            data.dataset.theme = 'light'
            window.localStorage.setItem("tema", "light")
        } else {
            setTheme('dark')
            data.dataset.theme = 'dark'
            window.localStorage.setItem("tema", 'dark')
        }        
    }

    useEffect(() => {
        let tema = localStorage.getItem("tema")   
        if(tema === ''){
            setTheme('light')
        }else{
            setTheme(tema)
        }
    },[])

    return (
        <div className={s.themeSelector}>
            <button onClick={() => {changeTheme(theme)}}>Change theme</button>     
        </div>
    )
}

export default Theme
