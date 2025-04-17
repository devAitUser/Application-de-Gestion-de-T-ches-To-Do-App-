import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { getTasks, createTask, updateTask, deleteTask } from './services/api';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
      setLoading(false);
    } catch (err) {
      setError('Erreur lors du chargement des tâches');
      setLoading(false);
    }
  };

  const handleAddTask = async (title) => {
    try {
      const newTask = await createTask({ title });
      setTasks([newTask, ...tasks]);
    } catch (err) {
      setError('Erreur lors de l\'ajout de la tâche');
    }
  };

  const handleToggleComplete = async (id, completed) => {
    try {
      const updatedTask = await updateTask(id, { completed });
      setTasks(tasks.map(task => 
        task._id === id ? updatedTask : task
      ));
    } catch (err) {
      setError('Erreur lors de la mise à jour de la tâche');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      setError('Erreur lors de la suppression de la tâche');
    }
  };

  if (loading) return <div className="loading">Chargement...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="app">
      <h1>Gestionnaire de Tâches</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList 
        tasks={tasks} 
        onToggleComplete={handleToggleComplete}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}

export default App;