import { Box, Image, StyleLink, Text, Wrapper } from './NotFound.styled';
import image from './../../images/warning.png';

export const NotFound = () => {
  return (
    <Box>
      <Wrapper>
        <Image src={image} />
        <Text>Oops, something went wrong.</Text>
        <StyleLink to="/">Home page</StyleLink>
      </Wrapper>
    </Box>
  );
};
