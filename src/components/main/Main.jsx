import { Kanban } from '../kanban/Kanban';
import { Aside } from '../aside/Aside';
import style from './Main.module.css'

export function Main() {
    return (
        <main className={style.mainContent}>
            <Kanban />  
            <Aside />
        </main>
    );
}