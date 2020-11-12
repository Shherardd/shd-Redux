import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import s from './styles.module.scss'

const Menu = (props) => {
    return (
        <nav className={s.menu}>
            <Link to="/">Usuarios</Link>
            <Link to="/theme">theme</Link>
            <Link to="Tareas">Tareas</Link>
        </nav>
    )
}

export default Menu