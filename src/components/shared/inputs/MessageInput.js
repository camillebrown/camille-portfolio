import React from 'react';
import classnames from 'classnames';
import { Field, ErrorMessage } from 'formik';

import './inputs.css';

export default function MessageInput({
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
        <Field
          as="textarea"
          name={field_name}
          className={classnames('input', className)}
        />
        <label className="input-label" htmlFor={field_name}>
          {label_text}
        </label>
      </div>
      <ErrorMessage name={field_name} component="div" className="validation" />
    </>
  );
}
