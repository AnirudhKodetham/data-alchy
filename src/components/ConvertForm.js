import React, { useState } from 'react';
import { Container, Typography, Box, Button, CircularProgress, Alert } from '@mui/material';
import { styled } from '@mui/system';
import JsonInput from './JsonInput';
import FileTypeSelect from './FileTypeSelect';
import { convertData } from '../utils/api';

const ContainerStyled = styled(Container)({
  marginTop: '2rem',
});

const BoxStyled = styled(Box)({
  marginTop: '1rem',
});

const ButtonStyled = styled(Button)({
  marginTop: '1rem',
});

const AlertStyled = styled(Alert)({
  marginTop: '1rem',
});

const ConvertForm = () => {
  const [jsonData, setJsonData] = useState('');
  const [fileType, setFileType] = useState('csv');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleConvert = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await convertData(jsonData, fileType);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `converted.${fileType}`);
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      setError('Failed to convert data. Please check the input and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContainerStyled>
      <Typography variant="h4" component="h1" gutterBottom>
        Data Alchemist - Universal Data Converter
      </Typography>
      <JsonInput value={jsonData} onChange={(e) => setJsonData(e.target.value)} />
      <FileTypeSelect value={fileType} onChange={(e) => setFileType(e.target.value)} />
      <ButtonStyled
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleConvert}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : 'Convert'}
      </ButtonStyled>
      {error && <AlertStyled severity="error">{error}</AlertStyled>}
    </ContainerStyled>
  );
};

export default ConvertForm;
