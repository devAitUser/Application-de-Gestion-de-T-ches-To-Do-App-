import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

// Config Axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Récupérer toutes les tâches
export const getTasks = async () => {
  const response = await api.get('/');
  return response.data;
};

// Créer une tâche
export const createTask = async (taskData) => {
  const response = await api.post('/', taskData);
  return response.data;
};

// Mettre à jour une tâche
export const updateTask = async (id, taskData) => {
  const response = await api.put(`/${id}`, taskData);
  return response.data;
};

// Supprimer une tâche
export const deleteTask = async (id) => {
  await api.delete(`/${id}`);
};