import style from './Aside.module.css'
import { Form } from '../form/Form'

export function Aside(){
    return (
        <aside id="aside" className={style.aside}>
        <div className={style.asideBg}></div>
        <div className={style.asideContainer}>
            <header className={style.asideHeader}>
                <h2 className={style.asideTitle}>Add task</h2>
                <button type="button" className="fa fa-times"></button>
            </header>
            <div className="aside-content">
                <Form />
            </div>
        </div>
    </aside>
    );
}