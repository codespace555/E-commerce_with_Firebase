import React, { useId } from 'react'

function Input({ type = "text", label, placeHolder, className = "", ...prpos }, ref) {
    const id = useId();
  return (
    <>
      <div className='w-full '>
          {label && (
            <label className="inline-block mb-1 pl-1" htmlFor={id}>
              {label}
            </label>
          )}

          <input
            type={type}
            ref={ref}
            id={id}
            className={`bg-gray-600 ml-2  mb-4 px-2 py-2 w-full lg:w-[20em] dark:bg-gray-400 rounded-lg dark:text-slate-800 text-white placeholder:text-gray-200 dark:placeholder:text-slate-800  outline-none ${className}`}
            placeholder={placeHolder || ""}
            {...prpos}
          />
        </div>
    </>
  )
}

export default React.forwardRef(Input)
