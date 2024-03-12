import { tablets } from 'DRUGS';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Text, Wrapper } from './DescriptionComponent.styled';

const DescriptionComponent = () => {
  const [text, setText] = useState('');
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        return;
      }

      const { description } = await tablets.find(
        item => item.id === Number(id)
      );
      setText(description);
    };

    fetchData();
  }, [id]);

  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default DescriptionComponent;
