function TaskItem({ task, onToggleComplete, onDelete }) {
    return (
      <div className={`task-item ${task.completed ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task._id, !task.completed)}
        />
        <span className="task-title">{task.title}</span>
        <button 
          onClick={() => onDelete(task._id)}
          className="delete-btn"
        >
          Supprimer
        </button>
      </div>
    );
  }
  
  export default TaskItem;