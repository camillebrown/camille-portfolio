import React from 'react';
import { Formik, Form } from 'formik';
import validator from 'validator';

import {
  TextInput,
  PhoneInput,
  MessageInput,
  SelectInput,
} from '../../shared/inputs';

export default function ContactForm({ form, sendEmail }) {
  return (
    <Formik
      initialValues={{
        full_name: '',
        email: '',
        phone: '',
        message: '',
        found_by: '',
      }}
      validate={async (values) => {
        const errors = {};
        if (!values.full_name) errors.full_name = '* Required';
        if (!values.message) errors.message = '* Required';
        if (!values.found_by) errors.found_by = '* Required';
        if (!values.email) {
          errors.email = '* Required';
        } else if (!validator.isEmail(values.email)) {
          errors.email = '* Invalid email address';
        }
        if (!values.phone) {
          errors.phone = '* Required';
        } else if (
          !validator.isMobilePhone(values.phone.replace(/\D/g, ''), 'en-US')
        ) {
          errors.phone = '* Invalid phone number';
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        sendEmail();
        resetForm({});
      }}
    >
      {({ isSubmitting, values}) => (
        <Form ref={form}>
          <TextInput
            id="full_name"
            field_name="full_name"
            label_text="Full Name"
            className="full_name"
            value={values.full_name || ''}
          />
          <div className="contact_form-email_phone-container">
            <div className="contact_form-email_phone">
              <TextInput
                id="email"
                field_name="email"
                label_text="Email"
                className="email_phone"
                value={values.email || ''}
              />
            </div>
            <div className="contact_form-email_phone">
              <PhoneInput
                id="phone"
                field_name="phone"
                label_text="Phone"
                className="phone_number"
                value={values.phone || ''}
              />
            </div>
          </div>
          <MessageInput
            id="message"
            field_name="message"
            label_text="Describe your project..."
            className="contact_form-message"
            value={values.message || ''}
          />
          <SelectInput
            id="found_by"
            field_name="found_by"
            label_text="How did you find me?"
            className="found_by"
            value={values.found_by || ''}
          />
          <button type="submit" disabled={isSubmitting} className="form-btn">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
}
