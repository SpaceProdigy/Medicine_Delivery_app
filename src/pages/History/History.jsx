import { useState } from 'react';

import { Reorder } from 'framer-motion';
import { tablets } from '../../DRUGS';

const History = () => {
  const [items, setItems] = useState(tablets);

  return (
    <Reorder.Group values={items} onReorder={setItems}>
      {items.map((item, i) => (
        <Reorder.Item key={i} value={item}>
          {item.description}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default History;
