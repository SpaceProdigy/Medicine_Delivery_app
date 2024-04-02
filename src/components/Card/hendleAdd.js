const { nanoid } = require('nanoid');
const { saveProductsIds } = require('../../redux/localOperation');

export const handleAdd = async (
  { selectedArr, id, title },
  dispatch,
  setIsNotyfi
) => {
  try {
    let shortProduct = title;
    if (title.length > 15) {
      const product = [...title].slice(0, 15);
      product.splice(15, 0, '...');
      shortProduct = product.join('');
    }

    if (!selectedArr.includes(id)) {
      dispatch(saveProductsIds(id));
      setIsNotyfi(prevState => {
        if (prevState?.length >= 5) {
          return [
            ...prevState.slice(1),
            {
              message: `${shortProduct} added to cart.`,
              type: 'info',
              visible: true,
              id: nanoid(),
            },
          ];
        }
        return [
          ...prevState,
          {
            message: `${shortProduct} added to cart.`,
            type: 'success',
            visible: true,
            id: nanoid(),
          },
        ];
      });
    } else {
      setIsNotyfi(prevState => {
        if (prevState?.length >= 5) {
          return [
            ...prevState.slice(1),
            {
              message: `${shortProduct} is already in the cart.`,
              type: 'info',
              visible: true,
              id: nanoid(),
            },
          ];
        }
        return [
          ...prevState,
          {
            message: `${shortProduct} is already in the cart.`,
            type: 'info',
            visible: true,
            id: nanoid(),
          },
        ];
      });
    }
  } catch (error) {
    return console.log(error);
  }
};
