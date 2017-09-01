export const getAllCategories = () => fetch('http://localhost:5001/categories',
  { headers: { Authorization: 'granted' } })
  .then(response => response.json());

export const getAllCategories1 = () => fetch('http://localhost:5001/categories',
  { headers: { Authorization: 'granted' } })
  .then(response => response.json());

