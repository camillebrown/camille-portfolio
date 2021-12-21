import React from 'react';
import classnames from 'classnames';
import { Field, ErrorMessage } from 'formik';

import './inputs.css';
import { enforceFormat, formatToPhone } from '../../../lib/formatters';

export default function PhoneInput({
  field_name,
  label_text,
  type = 'text',
  className,
  value,
}) {
  let filled;
  if (value) filled = true;

  return (
    <>
      <div className={classnames('input-container', { active: filled })}>
        <Field
          type={type}
          name={field_name}
          className={classnames('input', className)}
          maxLength="14"
          onKeyDown={enforceFormat}
          onKeyUp={formatToPhone}
        />
        <label className="input-label" htmlFor={field_name}>
          {label_text}
        </label>
      </div>
      <ErrorMessage name={field_name} component="div" className="validation" />
    </>
  );
}
