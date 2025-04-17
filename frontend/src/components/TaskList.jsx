import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleComplete, onDelete }) {
  if (tasks.length === 0) {
    return <div className="no-tasks">Aucune tâche à afficher</div>;
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;