import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectHistory } from '../../redux/localOperation';
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  AccordionStyled,
  StyledImage,
  StyledItem,
  StyledLink,
  StyledList,
  StyledSubItem,
  WrapperInfoItem,
} from './History.styled';
import { MyContext } from 'components/App';

const History = () => {
  const productsHistory = useSelector(selectHistory);
  const { play } = useContext(MyContext);

  return (
    <>
      <Container>
        <StyledList>
          {productsHistory.length > 0 &&
            [...productsHistory]
              .reverse()
              .map(
                (
                  {
                    date,
                    id,
                    time,
                    orderInputs,
                    orderedObjects,
                    totalPrice,
                    totalPriceWithDiscount,
                    isDiscount,
                  },
                  index
                ) => (
                  <StyledItem key={id}>
                    <AccordionStyled defaultExpanded={index === 0}>
                      <AccordionSummary
                        sx={{ transition: 'all 1s ease' }}
                        expandIcon={
                          <ExpandMoreIcon
                            color="secondary"
                            sx={{ transition: 'all 1s ease' }}
                          />
                        }
                        aria-controls="panel1-content"
                        id="panel1-header"
                        onClick={() => {
                          play();
                        }}
                      >
                        <Typography variant="subtitle2">
                          {`Order date ${date}`}
                          <Typography variant="caption">{` at ${time}`}</Typography>
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails>
                        {orderedObjects.map(({ image, price, title, id }) => (
                          <StyledSubItem key={id}>
                            <StyledLink
                              to={`/product/${id}`}
                              onClick={() => {
                                play();
                              }}
                            >
                              <Box sx={{ overflow: 'hidden' }}>
                                <StyledImage src={image} />
                              </Box>
                            </StyledLink>
                            <WrapperInfoItem>
                              <StyledLink
                                to={`/product/${id}`}
                                onClick={() => {
                                  play();
                                }}
                              >
                                <Typography variant="caption">{`${title}`}</Typography>
                              </StyledLink>

                              <Typography variant="caption">{`Price: ${price}$`}</Typography>
                            </WrapperInfoItem>
                          </StyledSubItem>
                        ))}
                        <Box
                          key={id}
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 0.5,
                            marginTop: 1,
                          }}
                        >
                          <Typography variant="caption">{`Customer: ${orderInputs.fullName}`}</Typography>
                          <Typography variant="caption">{`Email: ${orderInputs.email}`}</Typography>
                          <Typography variant="caption">{`Address: ${orderInputs.address}`}</Typography>
                          <Typography variant="caption">{`Phone number: ${orderInputs.tel}`}</Typography>
                          <Typography variant="caption">{`Order date: ${date} at ${time}`}</Typography>

                          {totalPriceWithDiscount && (
                            <>
                              <Typography variant="caption">
                                You used a {isDiscount.discount}% discount code.
                              </Typography>

                              <Typography
                                variant="caption"
                                style={{
                                  background: '#FFD700',
                                  padding: '5px 10px',
                                  borderRadius: 5,
                                  color: '#111',
                                }}
                              >
                                {orderInputs.promoCode}
                              </Typography>
                            </>
                          )}

                          <Typography variant="subtitle2">
                            Total:
                            <Typography
                              variant={
                                totalPriceWithDiscount ? 'caption' : 'subtitle2'
                              }
                              component="span"
                              style={
                                totalPriceWithDiscount && {
                                  textDecorationLine: 'line-through',
                                  color: '#B22222',
                                }
                              }
                            >
                              {` ${totalPrice.toFixed(2)}$`}
                            </Typography>
                            {totalPriceWithDiscount && (
                              <Typography
                                variant="subtitle2"
                                component="span"
                                style={{ color: '#008000' }}
                              >
                                {totalPriceWithDiscount}
                              </Typography>
                            )}
                          </Typography>
                        </Box>
                      </AccordionDetails>
                    </AccordionStyled>
                  </StyledItem>
                )
              )}
        </StyledList>
      </Container>
    </>
  );
};

export default History;
