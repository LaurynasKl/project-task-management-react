import style from './Kanban.module.css';
import { Tag } from './Tag'

export function TaskCard({ data, removeTask }){
    const {id, title, description, deadline, tags} = data
    // const tagsList = [];
    // for(const tag of tags){
    //     tagsList.push(<Tag title={tag} />);
    // }

    const tagsList = tags.map((tag, idx) => <Tag key={idx} title={tag} />);

    return(
        <li id={'task_' + id} className={style.taskCard}>
            <div className={style.taskActions}>
                <button onClick={() => removeTask(id)} className={style.btn + 'fa fa-trash'}>delete</button>
            </div>
            <div className={style.taskTitle}>{title}</div>
            <div className={style.taskDesc}>{description}</div>
            <div className={style.taskTags}>{tagsList}</div>
            <div className={style.taskDeadline}>{deadline}</div>
        </li>
    );
}
