import React from 'react';
import { useLocation } from 'react-router-dom';
import { Root, CustomPaper, CustomButton, CustomHeader } from '../styles';

const SuccessPage = () => {
  const location = useLocation();
  const { file, type } = location.state || {};

  const downloadFile = () => {
    const blob = new Blob([file], { type: getFileMimeType(type) });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `converted.${type}`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const getFileMimeType = (fileType) => {
    switch (fileType) {
      case 'csv':
        return 'text/csv';
      case 'excel':
        return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      case 'pdf':
        return 'application/pdf';
      default:
        return '';
    }
  };

  return (
    <Root>
      <CustomPaper>
        <CustomHeader variant="h4">
          File Converted Successfully!
        </CustomHeader>
        <CustomButton
          variant="contained"
          color="primary"
          onClick={downloadFile}
        >
          Download File
        </CustomButton>
      </CustomPaper>
    </Root>
  );
};

export default SuccessPage;
