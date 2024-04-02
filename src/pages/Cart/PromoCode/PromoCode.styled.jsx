import { OutlinedInput, styled } from '@mui/material';

export const StyledInput = styled(OutlinedInput)`
  color: ${({ isvalid }) => (isvalid ? '#008000' : 'inherit')};
  fieldset {
    border-color: ${({ isvalid }) =>
      isvalid ? '#008000' : 'rgb(174, 186, 203)'};
  }
`;
