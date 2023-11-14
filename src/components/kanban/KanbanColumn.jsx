import style from './Kanban.module.css';
import { TaskCard } from './TaskCard';

export function KanbanColumn({title, tasks}){
    return(
        <div className={style.column}>
            <h2 className={style.title + " normal underline"}>{title}</h2>
            <ul className={style.taskList}>
                {tasks.map(task => <TaskCard data={task} />)}
            </ul>
        </div>
    );
}

console.log('labas');