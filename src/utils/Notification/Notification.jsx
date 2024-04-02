import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import { IoIosClose } from 'react-icons/io';
import { FcInfo, FcOk } from 'react-icons/fc';
import {
  MotionButton,
  MotionLineTime,
  MotionReorderGroup,
  MotionReorderItem,
  MotionWrapper,
  Text,
} from './Notification.styled';
import { useCallback, useEffect } from 'react';

// SOUND
import soundClick from '../../Sounds/Button.mp3';
import useSound from 'use-sound';

export const Notification = ({ isNotifi, setIsNotyfi }) => {
  const [play] = useSound(soundClick, { volume: 0.05 });
  const handleClose = useCallback(
    id => {
      setIsNotyfi(prevState => prevState.filter(item => item.id !== id));
    },
    [setIsNotyfi]
  );

  useEffect(() => {
    isNotifi.map(item => {
      return setTimeout(() => {
        handleClose(item.id);
      }, 5000);
    });
  }, [isNotifi, handleClose]);

  return createPortal(
    <MotionReorderGroup values={isNotifi} onReorder={setIsNotyfi}>
      <AnimatePresence>
        {isNotifi?.map(({ message, id, type }, index, arr) => (
          <MotionReorderItem
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key={id}
            value={arr[index]}
          >
            <MotionWrapper
              $type={type}
              onDoubleClick={() => {
                handleClose(id);
                play();
              }}
            >
              <MotionLineTime
                $type={type}
                initial={{ width: 0 }}
                animate={{
                  width: '100%',
                }}
                transition={{ duration: 6 }}
              />
              <MotionButton
                $type={type}
                onClick={() => {
                  handleClose(id);
                  play();
                }}
              >
                <IoIosClose size={20} />
              </MotionButton>
              {type === 'info' ? (
                <FcInfo size={20} />
              ) : type === 'success' ? (
                <FcOk size={20} />
              ) : null}
              <Text>{message}</Text>
            </MotionWrapper>
          </MotionReorderItem>
        ))}
      </AnimatePresence>
    </MotionReorderGroup>,
    document.querySelector('#popup-root')
  );
};
