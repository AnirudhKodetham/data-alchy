import React from 'react';
import { TextField } from '@mui/material';

const JsonInput = ({ value, onChange }) => {
  return (
    <TextField
      label="JSON Data"
      placeholder='{"name": "Product1", "price": 100, "category": "Category1"}'
      multiline
      fullWidth
      rows={10}
      variant="outlined"
      value={value}
      onChange={onChange}
    />
  );
};

export default JsonInput;
