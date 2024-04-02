import { StyledFormControl, Wrapper } from './ContactInfo.styled';

import { UserInput, UserInputTel } from './Input/Input';

const inputs = [
  { id: 'fullName', title: 'Full Name' },
  { id: 'tel', title: 'Phone Number' },
  { id: 'email', title: 'Email' },
  { id: 'address', title: 'Address' },
];

export const ContactInfo = ({ errors, register, control }) => {
  return (
    <Wrapper>
      {inputs.map(({ id, title }) => (
        <StyledFormControl key={id}>
          {id === 'tel' ? (
            <UserInputTel
              id={id}
              control={control}
              title={title}
              errors={errors}
            />
          ) : (
            <UserInput
              id={id}
              register={register}
              errors={errors}
              title={title}
            />
          )}
        </StyledFormControl>
      ))}
    </Wrapper>
  );
};
