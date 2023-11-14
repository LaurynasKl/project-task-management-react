import style from './Header.module.css';

export function Header() {
    return (    
        <header className={style.mainHeader}>
            <div className={style.logo}>Task-46</div>
            <button id="add-task" className={style.btn}>Add task</button>
        </header>
    );
}