import { NavLink } from "react-router-dom"
import css from 'styles.module.css'
export const LinkToBack = ({to}) =>{
    return <div className={css.BackLinkContainer}>
        <div className={css.container}>
        <NavLink className={css.BackLink} to={to}>Back</NavLink>
        </div>
    </div>
}