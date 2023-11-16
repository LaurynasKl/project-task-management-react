import style from './Header.module.css';

export function Header({ updateAsideVisibility }) {
    function showAside(){
        updateAsideVisibility(true);
    }

    return (    
        <header className={style.mainHeader}>
            <div className={style.logo}>Task-46</div>
            <button onClick={showAside} className={style.btn}>Add task</button>
        </header>
    );
}