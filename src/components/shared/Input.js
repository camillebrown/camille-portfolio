import React from 'react';
import classnames from 'classnames';

export default function Input({ field_name, handleChange, label, value }) {
  return (
    <div className="relative w-full my-3">
      <input
        type="text"
        name={field_name}
        id={field_name}
        placeholder=" "
        value={value}
        onChange={handleChange}
        required
        className="pt-0 pb-2 text-xs xxs:text-sm font-medium leading-2 3xs:leading-8 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-off-white border-off-white overflow-x-scroll"
      />
      <label
        htmlFor={field_name}
        className={classnames(
          'absolute duration-300 left-0 origin-top-left pointer-events-none transform transition-transform',
          value ? 'text-xs xxs:text-sm font-medium leading-2 top-0' : 'text-off-white text-xs xxs:text-sm font-medium leading-2 top-0'
        )}
      >
        {label}
      </label>
      <span className="text-sm text-red-600 hidden" id="error">
        *{label} is required
      </span>
    </div>
  );
}
