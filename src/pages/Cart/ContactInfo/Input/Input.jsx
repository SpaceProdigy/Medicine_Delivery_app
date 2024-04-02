import { FormHelperText, InputLabel } from '@mui/material';
import { StyledInput, StyledMuiTelInput } from './Input.styled';
import { Controller } from 'react-hook-form';
import { schema } from '../../YupShema.js';

export const UserInput = ({ id, title, register, errors }) => {
  return (
    <>
      <InputLabel id={`${id}Label`} size="normal" color="info">
        {title}
      </InputLabel>
      <StyledInput
        id={`${id}Input`}
        size="medium"
        label={title}
        type="text"
        color="info"
        placeholder={`Write your ${title.toLocaleLowerCase()}.`}
        {...register(id)}
      />
      <FormHelperText id={`${id}Error`} error>
        {errors[id]?.message}
      </FormHelperText>
    </>
  );
};

export const UserInputTel = ({ id, title, control, errors }) => {
  return (
    <>
      <Controller
        name={id}
        control={control}
        rules={{
          validate: value => {
            try {
              schema.validateSync({ tel: value });
              return undefined;
            } catch (error) {
              return error.message;
            }
          },
        }}
        render={({
          field: { ref: fieldRef, value, ...fieldProps },
          fieldState: { error },
        }) => (
          <>
            <StyledMuiTelInput
              {...fieldProps}
              defaultCountry="GB"
              size="medium"
              label={title}
              value={value ?? ''}
              inputRef={fieldRef}
              color="info"
              placeholder={`Write your ${title.toLocaleLowerCase()}.`}
            />
            <FormHelperText id={`${id}Error`} error>
              {errors.id?.message}
            </FormHelperText>
          </>
        )}
      />
    </>
  );
};
