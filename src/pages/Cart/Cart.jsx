import { useState } from 'react';
import {
  ButtonSabmit,
  CartWrapper,
  Form,
  Image,
  Input,
  InputBox,
  Item,
  Label,
  List,
  Prise,
  Quantity,
  SectionCart,
  Title,
} from './Cart.styled';

const Cart = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Form submitted!', formData);
  };

  return (
    <SectionCart>
      <CartWrapper>
        {' '}
        <Form id="userForm " onSubmit={handleSubmit}>
          <InputBox>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              minLength={1}
              maxLength={100}
              value={formData.name}
              onChange={handleChange}
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              minLength={1}
              maxLength={100}
              value={formData.email}
              onChange={handleChange}
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="phone">Phone:</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
              minLength={1}
              maxLength={100}
              value={formData.phone}
              onChange={handleChange}
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="address">Address:</Label>
            <Input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              minLength={1}
              maxLength={100}
              required
              value={formData.address}
              onChange={handleChange}
            />
          </InputBox>
        </Form>
        <List>
          <Item>
            <Image />
            <Title></Title>
            <Prise></Prise>
            <Quantity type="number"></Quantity>
          </Item>
        </List>
      </CartWrapper>

      <ButtonSabmit type="submit" form="userForm">
        Submit
      </ButtonSabmit>
    </SectionCart>
  );
};

export default Cart;
