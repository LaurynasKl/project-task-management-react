import './Header.css'

export function Header() {
    return (    
        <header className="main-header">
            <div className="logo">Task-46</div>
            <button id="add-task" className="btn">Add task</button>
        </header>
    );
}