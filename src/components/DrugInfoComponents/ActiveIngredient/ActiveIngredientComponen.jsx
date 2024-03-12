import { tablets } from 'DRUGS';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Text, Wrapper } from './ActiveIngredientComponen.styled';

const ActiveIngredientComponen = () => {
  const [text, setText] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        return;
      }

      const { activeIngredient } = await tablets.find(
        item => item.id === Number(id)
      );
      setText(activeIngredient);
    };

    fetchData();
  }, [id]);

  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default ActiveIngredientComponen;
