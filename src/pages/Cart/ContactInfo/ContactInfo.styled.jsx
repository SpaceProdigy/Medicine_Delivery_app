import { Container, FormControl, styled } from '@mui/material';

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0;
`;

export const StyledFormControl = styled(FormControl)`
  width: 100%;
  max-width: 400px;
`;
