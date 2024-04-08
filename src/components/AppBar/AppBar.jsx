import {
  Typography,
  Badge,
  IconButton,
  Fade,
  Box,
  // MenuItem,
  // Menu,
} from '@mui/material';

// ICONS
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ModeNightIcon from '@mui/icons-material/ModeNight';
// import { AccountCircle } from '@mui/icons-material';

// LOGO
import logo from '../../images/logo.png';

// STYLED_COMPONENTS
import {
  AppBarStyled,
  BoxStyled,
  Logo,
  StyledLink,
  ToolbarStyled,
  WrapperStyled,
} from './AppBar.styled';

// COMPONENTS
import { useDispatch, useSelector } from 'react-redux';
import { BurgerButton } from 'components/PopUpMenu/BurgerButton/BurgerButton';
import { saveTheme, selectProductsIdArr } from '../../redux/localOperation';
import { useContext } from 'react';
import { MyContext } from 'components/App';

export default function PrimaryAppBar({
  setIsMenuOpen,
  isMenuOpen,
  location,
  toggleTheme,
  theme,
}) {
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleMenu = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const amount = useSelector(selectProductsIdArr);
  const dispatch = useDispatch();
  const { play } = useContext(MyContext);

  return (
    <AppBarStyled>
      <ToolbarStyled>
        <WrapperStyled>
          <BurgerButton
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            play={play}
          />
          <BoxStyled>
            <StyledLink
              to={'./shop/categories'}
              state={{ from: location }}
              onClick={() => play()}
            >
              <Typography variant="h6" noWrap component="h1">
                Drug 24
              </Typography>
            </StyledLink>

            <Logo alt="icon" src={logo} />
          </BoxStyled>
        </WrapperStyled>
        <Box style={{ position: 'relative' }}>
          <IconButton
            size="large"
            aria-label="cart"
            aria-haspopup="true"
            color="inherit"
            onClick={() => {
              play();
              toggleTheme();
              dispatch(
                saveTheme(theme?.palette?.type === 'light' ? 'dark' : 'light')
              );
            }}
          >
            <Fade
              in={theme?.palette.type === 'dark'}
              style={{ position: 'absolute' }}
            >
              <Brightness7Icon />
            </Fade>
            <Fade in={theme?.palette.type === 'light'}>
              <ModeNightIcon color="#fff" />
            </Fade>
          </IconButton>
        </Box>

        <StyledLink to={'./cart'} state={{ from: location }}>
          <IconButton
            size="large"
            aria-label="cart"
            aria-haspopup="true"
            color="inherit"
            onClick={() => {
              play();
            }}
          >
            <Badge badgeContent={amount?.length} color="success">
              <Fade
                in={location.pathname === '/cart'}
                style={{ transitionDelay: '100ms', position: 'absolute' }}
              >
                <ShoppingCartIcon />
              </Fade>

              <Fade
                in={location.pathname !== '/cart'}
                style={{ transitionDelay: '100ms' }}
              >
                <ShoppingCartOutlinedIcon />
              </Fade>
            </Badge>
          </IconButton>
        </StyledLink>
        {/* <div>
          <IconButton size="large" onClick={handleMenu} color="inherit">
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            slotProps={{
              paper: {
                style: {
                  backgroundColor: '#111',
                },
              },
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div> */}
      </ToolbarStyled>
    </AppBarStyled>
  );
}
