import React from 'react';
import classnames from 'classnames';
import InputMask from '@mona-health/react-input-mask';

import Dropdown from '../../shared/Dropdown';
import Input from '../../shared/Input';
import TextArea from '../../shared/TextArea';

export default function Form({
  content,
  handleChange,
  loading,
  messageData,
  sendEmail,
  state,
}) {
  const options = [
    'LinkedIn',
    'Instagram',
    'Dribble',
    'Github',
    'Referral',
    'Other',
  ];

  return (
    <form
      id="form"
      autoComplete="off"
      className="w-4/5 m-auto flex flex-col gap-3 font-gotham-light tracking-wider"
      onSubmit={sendEmail}
    >
      <div className="w-full flex flex-col xxs:gap-6 xxs:flex-row justify-between">
        <Input
          handleChange={handleChange}
          field_name="first_name"
          label="First Name"
          required={true}
          value={messageData.first_name}
        />
        <Input
          handleChange={handleChange}
          field_name="last_name"
          label="Last Name"
          required={true}
          value={messageData.last_name}
        />
      </div>
      <div className="relative w-full my-3">
        <InputMask
          id="phone"
          name="phone"
          type="text"
          mask="(999) 999-9999"
          placeholder=" "
          required
          onChange={handleChange}
          value={messageData.phone}
          className="pt-0 pb-2 text-xs xxs:text-sm font-medium leading-2 3xs:leading-8 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-off-white border-off-white overflow-x-scroll"
        />
        <label
          htmlFor="phone"
          className={classnames(
            'absolute duration-300 left-0 origin-top-left pointer-events-none transform transition-transform',
            messageData.phone ? 'text-xs xxs:text-sm font-medium leading-2 3xs:leading-8 top-0' : 'text-off-white text-xs xxs:text-sm font-medium leading-2 3xs:leading-8 top-0'
          )}
        >
          Phone
        </label>
        <span className="text-sm text-red-600 hidden" id="error">
          * Phone is required
        </span>
      </div>
      <Input
        handleChange={handleChange}
        field_name="email"
        label="Email"
        required={true}
        value={messageData.email}
      />
      <Dropdown
        field_name="found_me"
        handleChange={handleChange}
        label={
          <span>
            How Did You Find Me? <span className="text-xxs">*optional</span>
          </span>
        }
        options={options}
      />
        <TextArea
          handleChange={handleChange}
          field_name="description"
          label="Project Description"
          required={true}
          value={messageData.description}
        />
      <div className="w-full xs:w-1/2 mxl:w-3/4 mx-auto flex items-center justify-center">
        <button
          className={classnames(
            'submit h-10 my-5 uppercase border-y-2 transition-all duration-500 ease-in-out text-white bg-dark-blue border-light-gray hover:bg-light-gray hover:border-x-2 font-gotham-light text-xxs tracking-stretch',
            loading
              ? 'h-9 w-9 border-x-2 border-light-gray border-l-mint rotating hover:bg-transparent'
              : 'w-full hover:rounded-full',
            state === 'success' &&
              'bg-mint hover:bg-mint border-mint rounded-full'
          )}
        >
          {loading ? '' : content}
        </button>
      </div>
    </form>
  );
}
