import { useState } from 'react';
import style from './Kanban.module.css'
import { KanbanColumn } from './KanbanColumn';

// {/* <button className="fa fa-trash"></button> */}
// {/* <h2 className="normal underline">Backlog</h2>                  globaliai naudoajmas */}
// {/* <h2 className={style.title + " normal underline"}>Backlog</h2>     mix style */}

export function Kanban(){
    const [title, setTitle] = useState('');

    const columns = ['Backlog', 'Todo'];
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
    
    function newColumnSubmit(event){
        event.preventDefault();
        columns.push(title)
        console.log(title, columns);
    }
    function inputUpdate(event){
        setTitle(event.target.value);
    }

    return (
    <section id="kanban" className={style.todo} style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {columns.map((column, idx) => (
            <KanbanColumn tasks={data.filter(task => task.columnIndex === idx)} title={column} />
        ))}
        <form className={style.newColumn}>
            <input type="text" value={title} onChange={inputUpdate} placeholder='Naujas stulpelis' />
            <button type="submit" onClick={newColumnSubmit}>Prideti</button>
        </form>
        </section>
    );
}