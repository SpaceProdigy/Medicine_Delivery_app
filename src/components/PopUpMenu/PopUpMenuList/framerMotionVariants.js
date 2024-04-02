export const list = {
  open: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: 1,
    },
  },
};

export const navigation = {
  open: {
    x: 0,
    transition: { duration: 0.5 },
  },

  closed: {
    x: '-100%',
    transition: {
      duration: 0.5,
    },
  },
};
