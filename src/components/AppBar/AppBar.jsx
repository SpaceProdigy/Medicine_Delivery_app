import { Typography, Badge, IconButton, Fade, Box } from '@mui/material';

// SOUND
import soundClick from '../../Sounds/Button.mp3';
import useSound from 'use-sound';

// ICONS
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ModeNightIcon from '@mui/icons-material/ModeNight';

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

export default function PrimaryAppBar({
  setIsOpen,
  isOpen,
  location,
  toggleTheme,
  theme,
}) {
  const amount = useSelector(selectProductsIdArr);
  const dispatch = useDispatch();
  const [play] = useSound(soundClick, { volume: 0.05 });

  return (
    <AppBarStyled>
      <ToolbarStyled>
        <WrapperStyled>
          <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
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
      </ToolbarStyled>
    </AppBarStyled>
  );
}
