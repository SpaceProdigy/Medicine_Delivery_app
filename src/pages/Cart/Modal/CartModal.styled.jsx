import { Box, TextField, styled, FormControl, Select } from '@mui/material';

export const Wrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 400px;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 16px;
`;

export const WrapperInputs = styled('form')`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 340px;
`;

export const WrapperTextField = styled(TextField)`
  max-width: 340px;
  fieldset {
    border-color: rgb(174, 186, 203);
  }
`;

export const WrapperSelect = styled(Box)`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const WrapperButtonClose = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
`;

export const StyledFormControl = styled(FormControl)`
  fieldset {
    border-color: rgb(174, 186, 203);
  }
`;
