import { useContext, useState } from 'react';
import { MyContext } from 'components/App';
import { useLocation, useNavigate } from 'react-router-dom';

// ICONS
import CategoryIcon from '@mui/icons-material/Category';
import CableIcon from '@mui/icons-material/Cable';
import DiamondIcon from '@mui/icons-material/Diamond';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// COMPONENTS
import {
  AccordionDetails,
  AccordionSummary,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  AccordionStyled,
  BoxStyled,
  NavLinkStyled,
  Wrapper,
} from './Accordion.styled';

const directions = [
  {
    name: 'All categories',
    route: 'categories',
  },
  {
    name: 'Electronics',
    route: 'electronics',
  },
  {
    name: 'Jewelery',
    route: 'jewelery',
  },
  {
    name: "Men's clothing",
    route: "men's clothing",
  },

  {
    name: "Women's clothing",
    route: "women's clothing",
  },
];

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export const AccordionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { play } = useContext(MyContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = route => {
    return decodeURIComponent(location.pathname) === `/shop/${route}`;
  };
  return (
    <AccordionStyled
      expanded={isOpen}
      onChange={(_, expanded) => setIsOpen(expanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="secondary" />}
        aria-controls="panel1-content"
        id="panel1-header"
        onClick={() => {
          play();
        }}
      >
        <Typography variant="h6" component="p">
          Categories
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {directions.map(({ name, route }, index) => (
          <BoxStyled key={index} active={isActive(route) ? 'true' : undefined}>
            <NavLinkStyled
              onClick={event => {
                event.preventDefault();
                play();
                navigate(`/shop/${route}`);
                setIsOpen(false);
              }}
            >
              <Wrapper style={{ color: colors[index] }}>
                {name === 'All categories' ? (
                  <CategoryIcon />
                ) : name === 'Electronics' ? (
                  <CableIcon />
                ) : name === 'Jewelery' ? (
                  <DiamondIcon />
                ) : name === "Men's clothing" ? (
                  <MaleIcon />
                ) : (
                  <FemaleIcon />
                )}

                <ListItemText primary={name} />
              </Wrapper>
            </NavLinkStyled>
          </BoxStyled>
        ))}
      </AccordionDetails>
    </AccordionStyled>
  );
};
