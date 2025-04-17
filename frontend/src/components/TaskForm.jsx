import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    setSubmitting(true);
    try {
      await onAddTask(title);
      setTitle('');
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ajouter une nouvelle tâche..."
        disabled={submitting}
      />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Ajout...' : 'Ajouter'}
      </button>
    </form>
  );
}

export default TaskForm;