export const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: '-100%',
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
