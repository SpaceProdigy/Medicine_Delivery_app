import React from 'react';
import { ListStyled } from './List.styled';
import { Item } from 'components/Item/Item';
import SchemaDrugsList from 'shema.org/SchemaDrugsList';

export const List = ({ data }) => {
  const JSON_LD = SchemaDrugsList(data);

  return (
    <>
      <script type="application/ld+json">{JSON_LD}</script>
      <ListStyled>
        {data?.map(({ id, name, activeIngredient, price }) => {
          return (
            <Item
              key={id}
              id={id}
              title={name}
              price={price}
              activeIngredient={activeIngredient}
            />
          );
        })}
      </ListStyled>
    </>
  );
};
