import style from './Kanban.module.css'
import { KanbanColumn } from './KanbanColumn';

// {/* <button className="fa fa-trash"></button> */}
// {/* <h2 className="normal underline">Backlog</h2>                  globaliai naudoajmas */}
// {/* <h2 className={style.title + " normal underline"}>Backlog</h2>     mix style */}

export function Kanban(){
    const data = [
        {
            id: 1,
            columnIndex: 1,
            title: 'HTML',
            description: 'Task desciption about',
            deadline: 2024,
            tags: ['html', 'font'],
        },
        {
            id: 2,
            columnIndex: 0,
            title: 'CSS',
            description: 'Task desciption about',
            deadline: 2023,
            tags: ['css', 'column', 'color'],
        },
        {
            id: 3,
            columnIndex: 0,
            title: 'Javascript',
            description: 'Task desciption about',
            deadline: 2022,
            tags: ['js', 'loops', 'if'],
        },
    ];
    
    return (
    <section id="kanban" className={style.todo} 
        style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <KanbanColumn tasks={data.filter(task => task.columnIndex === 0)} title="Backlog" />
        <KanbanColumn tasks={data.filter(task => task.columnIndex === 1)} title="Todo" />
        <KanbanColumn tasks={data.filter(task => task.columnIndex === 2)} title="In progress" />
        <KanbanColumn tasks={data.filter(task => task.columnIndex === 3)} title="Done" />
        </section>
    );
}