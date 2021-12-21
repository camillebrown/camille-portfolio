import React from 'react';
import classnames from 'classnames';
import { Field, ErrorMessage } from 'formik';

import './inputs.css';

export default function SelectInput({
  field_name,
  label_text,
  className,
  values,
}) {
  let filled;
  if (values[field_name]) filled = true;

  return (
    <>
      <div className={classnames('input-container', { active: filled })}>
        <Field as="select" name={field_name} className={className}>
          <option value="" />
          <option value="google">Google</option>
          <option value="github">Github</option>
          <option value="linkedin">LinkedIn</option>
          <option value="instagram">Instagram</option>
          <option value="referral">Referral</option>
        </Field>
        <label className="input-label" htmlFor={field_name}>
          {label_text}
        </label>
      </div>
      <ErrorMessage name={field_name} component="div" className="validation" />
    </>
  );
}
