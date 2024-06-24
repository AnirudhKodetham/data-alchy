import axios from 'axios';

export const convertData = async (data, type) => {
  const response = await axios.post('http://localhost:5000/convert', { data, type });
  return response;
};
