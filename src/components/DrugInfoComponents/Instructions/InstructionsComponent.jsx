import { tablets } from 'DRUGS';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Text, Wrapper } from './InstructionsComponent.styled';

const InstructionsComponent = () => {
  const [decoration, setDescription] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        return;
      }

      const { instructions } = await tablets.find(
        item => item.id === Number(id)
      );
      setDescription(instructions);
    };

    fetchData();
  }, [id]);

  return (
    <Wrapper>
      <Text>{decoration}</Text>
    </Wrapper>
  );
};

export default InstructionsComponent;
