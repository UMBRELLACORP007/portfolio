import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// ── Projects ────────────────────────────────────────────────
export const getProjects = (params = {}) =>
  API.get('/projects', { params });

export const getProject = (id) =>
  API.get(`/projects/${id}`);

export const createProject = (data) =>
  API.post('/projects', data);

// ── Contact ─────────────────────────────────────────────────
export const submitContact = (data) =>
  API.post('/contact', data);

// ── Health ──────────────────────────────────────────────────
export const checkHealth = () =>
  API.get('/health');

export default API;
