import React, { useState, Fragment } from 'react';
import classnames from 'classnames';
import { Listbox, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Dropdown({ options, label, field_name, handleChange }) {
  const [selected, setSelected] = useState(null);

  return (
    <Listbox
      as="div"
      id={field_name}
      name={field_name}
      onChange={(val) => {
        setSelected(val);
        handleChange({
          target: {
            name: { field_name },
            value: val,
          },
        });
      }}
      value={selected}
    >
      {({ open }) => (
        <>
          <Listbox.Label className="block text-xs xxs:text-sm font-medium leading-2 3xs:leading-8 text-off-white pb-2">
            How Did You Find Me? <span className="text-xxs">*optional</span>
          </Listbox.Label>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-dark-blue py-1.5 pl-3 pr-10 text-left text-off-white shadow-sm ring-1 ring-off-white ring-inset ring-gray-300 text-xs sm:text-sm sm:leading-6">
              <span className="block truncate">
                {selected ? selected : 'Select One'}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <FontAwesomeIcon
                  icon="chevron-down"
                  className="text-off-white px-2"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-xs xs:text-sm sm:text-base shadow-lg sm:text-sm">
                {options.map((op, idx) => (
                  <Listbox.Option
                    key={idx}
                    className={({ active }) =>
                      classnames(
                        active ? 'bg-baby-blue text-white' : 'text-gray-900',
                        'relative cursor-pointer select-none py-3 pl-3 pr-9'
                      )
                    }
                    value={op}
                  >
                    {({ active }) => (
                      <>
                        <span
                          className={classnames(
                            active ? 'text-white' : 'text-dark-blue',
                            'absolute inset-y-0 px-4 left-0 flex items-center block truncate'
                          )}
                        >
                          {op}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
