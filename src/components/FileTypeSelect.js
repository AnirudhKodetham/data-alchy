import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const fileTypes = [
  { value: 'csv', label: 'CSV' },
  { value: 'excel', label: 'Excel' },
  { value: 'pdf', label: 'PDF' }
];

const FileTypeSelect = ({ value, onChange }) => {
  return (
    <TextField
      label="Output File Type"
      select
      fullWidth
      variant="outlined"
      value={value}
      onChange={onChange}
    >
      {fileTypes.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default FileTypeSelect;
