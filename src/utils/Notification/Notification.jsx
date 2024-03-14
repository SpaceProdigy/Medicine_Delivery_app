import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import { IoIosClose } from 'react-icons/io';
import {
  MotionButton,
  MotionReorderGroup,
  MotionReorderItem,
  MotionText,
  MotionWrapper,
} from './Notification.styled';

export const Notification = ({ isNotifi, setIsNotyfi }) => {
  const handleClose = index => {
    const newArray = [...isNotifi];
    newArray.splice(index, 1);
    setIsNotyfi(newArray);
  };

  return createPortal(
    <MotionReorderGroup values={isNotifi} onReorder={setIsNotyfi}>
      <AnimatePresence>
        {isNotifi.map((item, index) => (
          <MotionReorderItem
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key={item.id}
            value={item}
          >
            <MotionWrapper>
              <MotionButton
                whileTap={{ scale: 0.8 }}
                onClick={() => handleClose(index)}
              >
                <IoIosClose size={20} />
              </MotionButton>
              <MotionText>{item.message}</MotionText>
            </MotionWrapper>
          </MotionReorderItem>
        ))}
      </AnimatePresence>
    </MotionReorderGroup>,
    document.querySelector('#popup-root')
  );
};
