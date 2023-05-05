import css from 'styles.module.css'
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { LinkToBack } from 'components/LinkToBack/LinkToBack'
export default function PageNotFound(){
    const location = useLocation();
    let locationValue = location.state;
    if (location.state) {
      locationValue = location.state.from;
    }
    const [from, setFrom] = useState(location.state?.from ?? "/");
    return <>
    <section className={css.PageNotFoundSection}>
    <LinkToBack to={from} setFrom={setFrom} locationValue={locationValue}/>
    <h1 className={css.PageNotFound}>Page is not found</h1>
    <p className={css.PageNotFoundText}>We're sorry, but the page you're looking for doesn't exist.</p>
    </section>
    </> 
}