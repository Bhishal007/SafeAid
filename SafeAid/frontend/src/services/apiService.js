import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:6000/api',
});

export const getResources = async () => {
  const response = await api.get('/resources');
  return response.data;
};

export const createResource = async (resourceData) => {
  const response = await api.post('/resources', resourceData);
  return response.data;
};

export const getUpdate = async () => {
  const response = await api.get('/updates');
  return response.data;
};

export const createUpdate = async (updateData) => {
  const response = await api.post('/updates', updateData);
  return response.data;
};

export default { getResources, createResource, getUpdate, createUpdate };