import style from './Kanban.module.css';

export function Tag(props){
    return(
        <div className={style.tag} style={{ color: '#333' }}>{props.title}</div>
    );
}