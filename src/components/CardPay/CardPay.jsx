import { Fade, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

import {
  BlackTape,
  CVVTape,
  MotionWrapperCard,
  WrapperChip,
  WrapperDetected,
  WrapperExpiry,
  WrapperName,
  WrapperNumber,
  WrapperTape,
} from './CardPay.styled';

// SVG
import { CardChipSvg } from 'images/CardChipSvg';
import { DiscoverSvg } from 'images/banksSvg/DiscoverSvg';
import { AmexSvg } from 'images/banksSvg/AmexSvg';

// UTILS
import { detectCardType } from 'utils/detectCardType';
import { VisaSvg } from 'images/banksSvg/VisaSvg';
import { MasterCardSvg } from 'images/banksSvg/MasterCardSvg';
import { GCBSvg } from 'images/banksSvg/JCBSvg';

export const CardPay = ({
  month,
  year,
  name,
  number,
  isFlipped,
  handleClick,
  cvv,
}) => {
  const theme = useTheme();
  return (
    <MotionWrapperCard
      onClick={handleClick}
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isFlipped ? 0 : 1 }}
        exit={{ opacity: 0 }}
      >
        {['Visa', 'MasterCard', 'Discover', 'American Express', 'JCB'].map(
          (el, index) => (
            <Fade key={index} in={detectCardType(number) === el} timeout={1000}>
              <WrapperDetected>
                {el === 'Visa' && <VisaSvg width={80} height={80} />}
                {el === 'MasterCard' && (
                  <MasterCardSvg width={80} height={80} />
                )}
                {el === 'Discover' && <DiscoverSvg width={80} height={80} />}
                {el === 'American Express' && (
                  <AmexSvg width={80} height={80} />
                )}
                {el === 'JCB' && <GCBSvg width={80} height={80} />}
              </WrapperDetected>
            </Fade>
          )
        )}

        <WrapperChip>
          <CardChipSvg width={41} />
        </WrapperChip>

        <WrapperNumber>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.primary.contrastText,
              opacity: !number && 0.8,
              whiteSpace: 'nowrap',
            }}
          >
            {number}
            {'0000 0000 0000 0000'.slice(number?.length)}
          </Typography>
        </WrapperNumber>

        <WrapperName>
          <Typography
            variant="button"
            fontSize={12}
            sx={{ color: theme.palette.primary.contrastText, opacity: 0.8 }}
          >
            Name on card
          </Typography>
          <Typography
            variant="subtitle2"
            fontSize={12}
            sx={{
              color: theme.palette.primary.contrastText,
              opacity: !name && 0.8,
            }}
          >
            {`${name ? name : 'Card owner name'}`}
          </Typography>
        </WrapperName>
        <WrapperExpiry>
          <Typography
            variant="button"
            fontSize={12}
            sx={{ color: theme.palette.primary.contrastText, opacity: 0.8 }}
          >
            Expiry date
          </Typography>
          <Typography
            variant="subtitle2"
            fontSize={12}
            sx={{
              color: theme.palette.primary.contrastText,
              opacity: year || month || 0.8,
            }}
          >
            {`${month ? month : '00'} / ${year ? year : '00'}`}
          </Typography>
        </WrapperExpiry>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isFlipped ? 1 : 0 }}
        exit={{ opacity: 0 }}
      >
        <WrapperTape>
          <BlackTape></BlackTape>
          <CVVTape>
            <div
              style={{
                transform: 'scaleX(-1)',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: 2,
                marginLeft: 10,
              }}
            >
              <Typography variant="button">CVV:</Typography>
              <div
                style={{
                  border: 'solid 2px #555',
                  width: 45,
                  height: 20,
                  borderRadius: 5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="button">{cvv}</Typography>
              </div>
            </div>
          </CVVTape>
        </WrapperTape>
      </motion.div>
    </MotionWrapperCard>
  );
};
