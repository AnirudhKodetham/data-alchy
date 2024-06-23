import axios from 'axios';

export const convertData = async (data, type) => {
  try {
    const response = await axios.post('http://localhost:5000/convert', { data, type }, {
      responseType: 'blob',
    });
    return response;
  } catch (error) {
    console.error('API error:', error.response ? error.response.data : error.message);
    throw error;
  }
};
