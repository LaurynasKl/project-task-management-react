import { useState } from 'react';
import style from './Kanban.module.css'
import { KanbanColumn } from './KanbanColumn';

// {/* <button className="fa fa-trash"></button> */}
// {/* <h2 className="normal underline">Backlog</h2>                  globaliai naudoajmas */}
// {/* <h2 className={style.title + " normal underline"}>Backlog</h2>     mix style */}

export function Kanban({tasks, removeTask}){
    const [title, setTitle] = useState('');
    const [columns, setColumns] = useState(['Backlog', 'Todo']);

    
    function newColumnSubmit(event){
        event.preventDefault();
        setColumns(prev => [...prev, title]);
        setTitle('');
    }
    function inputUpdate(event){
        setTitle(event.target.value);
    }

    return (
    <section id="kanban" className={style.todo} style={{ gridTemplateColumns: `repeat(${columns.length + 1}, 1fr)` }}>
        {columns.map((column, idx) => (
            <KanbanColumn key={idx} 
            tasks={tasks.filter(task => task.columnIndex === idx)} 
            title={column} 
            removeTask={removeTask} />
        ))}
        <form className={style.newColumn}>
            <input type="text" value={title} onChange={inputUpdate} placeholder='Naujas stulpelis' />
            <button type="submit" onClick={newColumnSubmit}>Prideti</button>
        </form>
        </section>
    );
}