import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Image,
  InfoWrapper,
  LinkWrapper,
  MoreInfoWrapper,
  Price,
  Section,
  StyleLink,
  Title,
} from './DragInfo.styled';
import image from './../../images/stub.png';
import { ButtonAdd } from 'components/ButtonAdd/ButtonAdd';
import { tablets } from 'DRUGS';
import { Loader } from 'components/Loader/Loader';
import { Sidebar } from 'components/Sidebar/Sidebar';

const DrugInfo = () => {
  const { id } = useParams();
  const drug = tablets.find(item => item.id === Number(id));

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/drugInfo/${id}/description`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section>
      <Sidebar />

      <MoreInfoWrapper>
        <Image src={image} />
        <InfoWrapper>
          <div>
            <Title>{drug.name}</Title>
            <Price>{drug.price.toFixed(2)}$</Price>
            <ButtonAdd />
          </div>

          <Box>
            <LinkWrapper>
              <StyleLink to={`description`}>Description</StyleLink>
              <StyleLink to={`instructions`}>Instructions</StyleLink>
              <StyleLink to={`activeIngredient`}>ActiveIngredient</StyleLink>
            </LinkWrapper>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Box>
        </InfoWrapper>
      </MoreInfoWrapper>
    </Section>
  );
};

export default DrugInfo;
