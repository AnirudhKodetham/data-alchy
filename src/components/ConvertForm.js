import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, MenuItem } from '@mui/material';
import { Root, CustomPaper, CustomButton, CustomHeader } from '../styles';
import { convertData } from '../utils/api';

const ConvertForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState('');
  const [type, setType] = useState('csv');

  const handleConvert = async () => {
    try {
      const response = await convertData(data, type);
      if (response) {
        navigate('/success', { state: { file: response.data, type } });
      }
    } catch (error) {
      console.error('Failed to convert data:', error);
      alert('Failed to convert data. Please check the input and try again.');
    }
  };

  return (
    <Root>
      <CustomPaper>
        <CustomHeader variant="h4">
          Data Converter
        </CustomHeader>
        <TextField
          label="JSON Data"
          multiline
          rows={6}
          variant="outlined"
          fullWidth
          value={data}
          onChange={(e) => setData(e.target.value)}
          margin="normal"
        />
        <TextField
          select
          label="Select File Type"
          variant="outlined"
          fullWidth
          value={type}
          onChange={(e) => setType(e.target.value)}
          margin="normal"
        >
          <MenuItem value="csv">CSV</MenuItem>
          <MenuItem value="excel">Excel</MenuItem>
          <MenuItem value="pdf">PDF</MenuItem>
        </TextField>
        <CustomButton
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleConvert}
        >
          Convert
        </CustomButton>
      </CustomPaper>
    </Root>
  );
};

export default ConvertForm;
