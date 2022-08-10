import React from 'react';

import {
  FormInputContainer,
  FormLabelContainer,
  GroupContainer,
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormLabelContainer className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormLabelContainer>
    ) : null}
  </GroupContainer>
);

export default FormInput;
