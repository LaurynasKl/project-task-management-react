import { Kanban } from '../kanban/Kanban';
import { Aside } from '../aside/Aside';
import style from './Main.module.css'

export function Main({tasks, isAsideVisible, addTask, removeTask}) {
    return (
        <main className={style.mainContent}>
            <Kanban tasks={tasks} removeTask={removeTask}/>  
            {isAsideVisible && <Aside addTask={addTask} />}
        </main>
    );
}